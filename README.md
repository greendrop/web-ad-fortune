# web-ad-fortune

Web ad Fortune 無料版APIとNuxt.jsを使用した星座占いです。

## 使用言語・ライブラリ

- Web ad Fortune 無料版API
- Nuxt.js(Vue.js)
- Vuetify

## 環境構築アプリケーション

- Docker
- Docker Compose
- direnv
- git

## セットアップ

```shell
$ git clone git@github.com:greendrop/web-ad-fortune.git
$ cd web-ad-fortune
$ vi .envrc
$ direnv allow
$ docker-compose pull
$ docker-compose build
$ docker-compose run --rm front bash
$ yarn install
$ exit
$ docker-compose up
```

### .envrc

```
export USER_ID=`id -u`
export GROUP_ID=`id -g`
```

## ブラウザで表示

http://localhost:3000
