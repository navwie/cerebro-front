# cerebro-front

[![Push to main branch](https://github.com/DiscoverNimbus2/cerebro-front/actions/workflows/cd.yml/badge.svg)](https://github.com/DiscoverNimbus2/cerebro-front/actions/workflows/cd.yml)
[![Push to non-main branch](https://github.com/DiscoverNimbus2/cerebro-front/actions/workflows/ci.yml/badge.svg)](https://github.com/DiscoverNimbus2/cerebro-front/actions/workflows/ci.yml)
[![Manual Refresh](https://github.com/DiscoverNimbus2/cerebro-front/actions/workflows/instance_refresh.yml/badge.svg)](https://github.com/DiscoverNimbus2/cerebro-front/actions/workflows/instance_refresh.yml)

This repo contains the infrastructure that the [cerebro-infra](https://github.com/DiscoverNimbus2/cerebro-infra) depends upon.

![image](Diagram.png)

Cloning repository from git

```sh
git clone git@github.com:DiscoverNimbus2/cerebro-front.git
```

Switch branch to dev

```sh
git checkout dev
```

Configure env files in root and cerebro folders.

Run containers.

```sh
docker compose up -d
```

Go to project folder.

```sh
cd ./loan_forms
```

Setting storage folder.

```sh
sudo chmod 777 -R ./storage
```

Install and run npm.

```sh
npm install
npm run dev
```

Go into the container.

```sh
docker exec -it <project name>-php bash
```

Run composer install.

```sh
composer install
```

Generate laravel key.

```sh
php artisan key:generate
```

Out of container.

```sh
exit
```

Run test for js from loan_forms folder.

```sh
npm run test
```
