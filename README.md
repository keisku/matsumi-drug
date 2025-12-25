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

# リリース

タグを作成してリリースします。

```bash
git tag 2025-12-25
git push origin 2025-12-25

# 同日2回目以降のリリース
git tag 2025-12-25-a
git push origin 2025-12-25-a
```
