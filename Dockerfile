FROM php:8.2-apache

RUN apt-get update && apt-get install -y --no-install-recommends libcurl4-openssl-dev \
    && docker-php-ext-install mysqli pdo pdo_mysql curl \
    && rm -rf /var/lib/apt/lists/* \
    && a2enmod rewrite

WORKDIR /var/www/html

COPY . /var/www/html
COPY docker/entrypoint.sh /usr/local/bin/aloha-system-entrypoint

RUN chmod +x /usr/local/bin/aloha-system-entrypoint \
    && chown -R www-data:www-data /var/www/html

ENTRYPOINT ["/usr/local/bin/aloha-system-entrypoint"]
CMD ["apache2-foreground"]
