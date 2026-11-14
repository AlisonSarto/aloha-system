#!/bin/sh
set -eu

uploads=/var/www/html/uploads/estoque/carrinhos
mkdir -p "$uploads"
if [ "$(stat -c '%u' "$uploads")" != "33" ]; then
    chown -R www-data:www-data /var/www/html/uploads
fi

exec "$@"
