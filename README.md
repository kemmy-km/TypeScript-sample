
## 参考ページ
TypeScript + Node.js プロジェクトのはじめかた2020
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49

基本的に、終了させる際は`control + C`キー。

## tscコマンドのバージョン確認
```sh
npx tsc -v
```

## 起動
```sh
# 起動
npm run dev
# ビルド
npm run build
# dist配下削除
npm run clean

# `tsconfig.json`の作成
npx tsc --init

# コンパイルを実行
npx tsc

# --watchオプション
npx tsc --watch
```

## ts-node パッケージで実行
```sh
npx ts-node src/index.ts
# Hello, World!
```

# 1回実行
```sh
npm run dev

# 変更検知
npm run dev:watch
```

## TODO
下記も導入したい

## ts-node-dev パッケージ
毎回変更検知されると困る場合は、下記のパッケージをアンインストールする

```sh
npm install -D ts-node-dev
```
