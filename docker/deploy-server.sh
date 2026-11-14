#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

: "${DEPLOY_SHA:?DEPLOY_SHA is required}"
[[ "$DEPLOY_SHA" =~ ^[0-9a-f]{40}$ ]]

project="$HOME/Dev/aloha-system"
backup_root="$HOME/Dev/aloha-system-backups"
stamp="$(date +%Y%m%d-%H%M%S)"
backup="$backup_root/$stamp"
staging="$HOME/Dev/aloha-system.next-$stamp"
rollback="$HOME/Dev/aloha-system.rollback-$stamp"
restore_test="aloha-system-restore-check-$stamp"
swapped=0

compose_in() {
    local directory="$1"
    shift
    (cd "$directory" && docker compose --project-name aloha-system "$@")
}

compose_exec() {
    local directory="$1"
    local service="$2"
    shift 2
    compose_in "$directory" exec --interactive=false -T "$service" "$@"
}

cleanup() {
    local status=$?
    docker rm -f "$restore_test" >/dev/null 2>&1 || true
    if [ "$status" -ne 0 ] && [ "$swapped" -eq 0 ]; then
        if [ ! -e "$project" ] && [ -d "$rollback" ]; then
            mv "$rollback" "$project" || true
        fi
        if [ -d "$staging/.db" ] && [ -d "$project" ] && [ ! -e "$project/.db" ]; then
            mv "$staging/.db" "$project/.db" || true
        fi
        if [ -d "$staging/uploads" ] && [ -d "$project" ] && [ ! -e "$project/uploads" ]; then
            mv "$staging/uploads" "$project/uploads" || true
        fi
        if [ -d "$staging" ] && [ ! -e "$staging/.db" ] && [ ! -e "$staging/uploads" ]; then
            rm -rf "$staging"
        fi
        if [ -d "$project" ]; then
            compose_in "$project" up -d >/dev/null 2>&1 || true
        fi
    fi
    return "$status"
}
trap cleanup EXIT

test -d "$project/.db"
test -f "$project/.env"
mkdir -p "$project/uploads/estoque/carrinhos" "$backup_root" "$backup"
chmod 700 "$backup_root" "$backup"
chown -R 33:33 "$project/uploads"

# Clone and build the exact commit before interrupting the live service.
(
    umask 022
    git clone --branch main https://github.com/alisonsarto/aloha-system.git "$staging"
    git -C "$staging" checkout --detach "$DEPLOY_SHA"
)
cp -p "$project/.env" "$backup/.env"
cp -p "$project/.env" "$staging/.env"
chmod 600 "$backup/.env" "$staging/.env"
compose_in "$staging" config --quiet
compose_in "$staging" build app

db_container="$(compose_in "$project" ps -q db)"
test -n "$db_container"
docker exec "$db_container" sh -c 'MYSQL_PWD="$MYSQL_PASSWORD" exec mysqldump --single-transaction --no-tablespaces --routines --triggers --events --hex-blob --set-gtid-purged=OFF -h 127.0.0.1 -P 3306 -u"$MYSQL_USER" "$MYSQL_DATABASE"' | gzip -1 > "$backup/database.sql.gz"
gzip -t "$backup/database.sql.gz"

# Verify that the SQL backup restores into an isolated MySQL instance.
db_name="$(docker exec "$db_container" sh -c 'printf %s "$MYSQL_DATABASE"')"
test_password="$(openssl rand -hex 24)"
docker run -d --rm --name "$restore_test" \
    -e MYSQL_ROOT_PASSWORD="$test_password" \
    -e MYSQL_DATABASE="$db_name" mysql:8.0 >/dev/null
docker exec "$restore_test" sh -c 'umask 077; printf "[client]\nuser=root\npassword=%s\n" "$MYSQL_ROOT_PASSWORD" > /tmp/restore-test.cnf'
ready=0
for attempt in $(seq 1 90); do
    if docker exec "$restore_test" sh -c 'mysql --defaults-extra-file=/tmp/restore-test.cnf --batch --skip-column-names "$MYSQL_DATABASE" -e "SELECT 1"' >/dev/null 2>&1; then
        ready=1
        break
    fi
    sleep 1
done
if [ "$ready" -ne 1 ]; then
    echo "Temporary MySQL authentication did not become ready." >&2
    exit 1
fi
gzip -dc "$backup/database.sql.gz" | docker exec -i "$restore_test" sh -c 'exec mysql --defaults-extra-file=/tmp/restore-test.cnf "$MYSQL_DATABASE"'
table_count="$(docker exec "$restore_test" sh -c 'mysql --defaults-extra-file=/tmp/restore-test.cnf --batch --skip-column-names "$MYSQL_DATABASE" -e "SHOW TABLES"' | wc -l)"
if [ "$table_count" -lt 1 ]; then
    echo "Temporary database restore produced no tables." >&2
    exit 1
fi
docker rm -f "$restore_test" >/dev/null

# Save raw database files and photos after stopping writes.
compose_in "$project" stop app db
tar -czf "$backup/data.tar.gz" -C "$project" .db uploads
tar -tzf "$backup/data.tar.gz" >/dev/null
chmod 600 "$backup/database.sql.gz" "$backup/data.tar.gz" "$backup/.env"
sha256sum "$backup/database.sql.gz" "$backup/data.tar.gz" "$backup/.env"

# Keep the database and uploaded photos at the same project-relative paths.
mv "$project/.db" "$staging/.db"
mv "$project/uploads" "$staging/uploads"
mv "$project" "$rollback"
mv "$staging" "$project"
swapped=1

compose_in "$project" up -d db
db_container="$(compose_in "$project" ps -q db)"
ready=0
for attempt in $(seq 1 90); do
    health="$(docker inspect "$db_container" --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' 2>/dev/null || true)"
    if [ "$health" = healthy ]; then
        ready=1
        break
    fi
    sleep 2
done
if [ "$ready" -ne 1 ]; then
    echo "System database did not become healthy. Verified backup: $backup" >&2
    exit 1
fi

compose_in "$project" run --rm --no-deps app php server/db/migrate.php up
compose_in "$project" up -d app

app_port="$(sed -n 's/^APP_EXTERNAL_PORT=//p' "$project/.env" | tail -1 | tr -d "\"'")"
app_port="${app_port:-8000}"
curl --fail --silent --show-error --max-time 15 "http://127.0.0.1:$app_port/" -o /dev/null

echo "Deployment succeeded: $DEPLOY_SHA"
echo "Verified backup: $backup"
echo "Previous code: $rollback"
