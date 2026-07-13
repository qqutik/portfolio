FROM dunglas/frankenphp:php8.4 AS base

# Системні PHP-розширення, потрібні Symfony + PostgreSQL
RUN install-php-extensions \
    pdo_pgsql \
    intl \
    opcache \
    zip

WORKDIR /app

# Composer з офіційного образу
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER=1

# Спочатку лише файли залежностей — щоб кешувати шар composer install
COPY composer.json composer.lock symfony.lock ./
RUN composer install \
    --no-scripts \
    --prefer-dist \
    --no-progress \
    --no-interaction

# Далі решта коду
COPY . .

RUN composer dump-autoload --optimize --no-interaction

# FrankenPHP слухає на 80 і за замовчуванням віддає /app/public/index.php
# (ENTRYPOINT/CMD успадковуються з базового образу dunglas/frankenphp)
ENV SERVER_NAME=:80
EXPOSE 80
