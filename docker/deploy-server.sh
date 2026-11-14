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
        if [ -d "$staging/.volumes" ] && [ -d "$project" ] && [ ! -e "$project/.volumes" ]; then
            mv "$staging/.volumes" "$project/.volumes" || true
            if [ -d "$project/.volumes/db" ] && [ ! -e "$project/.db" ]; then
                ln -s .volumes/db "$project/.db" || true
            fi
        fi
        if [ -d "$staging" ] && [ ! -e "$staging/.volumes" ]; then
            rm -rf "$staging"
        fi
        if [ -d "$project" ]; then
            compose_in "$project" up -d >/dev/null 2>&1 || true
        fi
    fi
    return "$status"
}
trap cleanup EXIT

test -d "$project/.db" || test -d "$project/.volumes/db"
test -f "$project/.env"
mkdir -p "$backup_root" "$backup"
chmod 700 "$backup_root" "$backup"

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

# Move persistent files under the project-local .volumes directory after writes stop.
compose_in "$project" stop app db
if [ -d "$project/.volumes" ]; then
    mv "$project/.volumes" "$staging/.volumes"
else
    mkdir -p "$staging/.volumes"
fi
if [ -L "$project/.db" ]; then
    rm "$project/.db"
fi
if [ -d "$project/.db" ]; then
    mv "$project/.db" "$staging/.volumes/db"
elif [ ! -d "$staging/.volumes/db" ]; then
    echo "Database directory was not found in .db or .volumes/db." >&2
    exit 1
fi
if [ ! -d "$staging/.volumes/uploads" ]; then
    mkdir -p "$staging/.volumes/uploads"
    if [ -d "$project/uploads" ] && find "$project/uploads" -type f -print -quit | grep -q .; then
        docker run --rm \
            -v "$project/uploads:/legacy:ro" \
            -v "$staging/.volumes/uploads:/uploads" \
            alpine:3.22 sh -c 'cp -a /legacy/. /uploads/'
    fi
fi
# Back up the complete persistent directory and verify its archive.
docker run --rm --entrypoint sh \
    -v "$staging/.volumes:/source:ro" \
    -v "$backup:/backup" \
    -e HOST_UID="$(id -u)" -e HOST_GID="$(id -g)" \
    mysql:8.0 -c 'tar -czf /backup/data.tar.gz -C /source . && chown "$HOST_UID:$HOST_GID" /backup/data.tar.gz && chmod 600 /backup/data.tar.gz'
tar -tzf "$backup/data.tar.gz" >/dev/null
chmod 600 "$backup/database.sql.gz" "$backup/data.tar.gz" "$backup/.env"
sha256sum "$backup/database.sql.gz" "$backup/data.tar.gz" "$backup/.env"

# Keep .volumes at the same project-relative path across the code swap.
mv "$project" "$rollback"
mv "$staging" "$project"
swapped=1

# Preserve paths expected by the previous code if it needs to be restored.
ln -s "$project/.volumes/db" "$rollback/.db"
if [ -e "$rollback/uploads" ] || [ -L "$rollback/uploads" ]; then
    rm -rf "$rollback/uploads"
fi
ln -s "$project/.volumes/uploads" "$rollback/uploads"

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
http_ready=0
for attempt in $(seq 1 30); do
    if curl --fail --silent --max-time 3 "http://127.0.0.1:$app_port/" -o /dev/null; then
        http_ready=1
        break
    fi
    sleep 2
done
if [ "$http_ready" -ne 1 ]; then
    echo "Application did not return a successful HTTP response. Backup: $backup" >&2
    echo "Previous code: $rollback" >&2
    compose_in "$project" ps >&2 || true
    compose_in "$project" logs --tail=100 app >&2 || true
    exit 1
fi

echo "Deployment succeeded: $DEPLOY_SHA"
echo "Verified backup: $backup"
echo "Previous code: $rollback"
