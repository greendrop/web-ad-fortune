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
$ cp .env.example .env
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

### .env

APIのURL  
以下URLにはレスポンスヘッダーに`Access-Control-Allow-Origin`が設定されていないため、APIを中継してレスポンスヘッダーを設定するものを用意

Netlify Lambdaの使用例 https://github.com/greendrop/netlify-lambda-web-ad-fortune

```
API_URL=http://api.jugemkey.jp/api/horoscope/free
```

## ブラウザで表示

http://localhost:3000
