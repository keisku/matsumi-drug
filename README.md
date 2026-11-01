# 開発環境のセットアップ

```bash
pnpm install
```

# 開発サーバーの起動

```bash
pnpm dev
```

http://localhost:5173/ でアクセスできます。

# ビルド

```bash
pnpm build
```

`dist/` に静的ファイルが生成されます。

# lint

```bash
pnpm lint
```

型チェックには TypeScript 7、lint には Oxlint を使います。
`.oxlintrc.json` で TypeScript、React Hooks、Fast Refresh のルールを設定しています。
