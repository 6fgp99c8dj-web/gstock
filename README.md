# G Stock — 現場在庫管理 PWA

シーリング職人向け 在庫・工程・出面・AI相談 管理アプリ

## 機能

- 在庫管理（QR 読取・生成・長押し増減）
- カテゴリ・商品管理
- 現場管理
- 出面管理（21日〜20日締め / LINE送信）
- 写真管理
- 工程表 OCR（カメラ撮影 → AI解析 → 自動登録）
- AI 現場アシスタント（Mock / OpenAI / Gemini / Claude 切替可能）
- Google Calendar / Apple Calendar エクスポート（ICS）
- 通知（前日18:00 / 当日7:00 / 在庫不足）
- JSON バックアップ・リストア
- CSV 在庫エクスポート
- PWA 対応（オフライン動作 / ホーム画面追加）

## セットアップ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:5173）
npm run dev

# 本番ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## 環境変数

```bash
cp .env.example .env
# .env を編集して API キーを設定
```

## デプロイ

### Vercel（推奨・無料）

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# dist/ フォルダを Netlify にドロップ
```

### GitHub Pages

```bash
npm run build
# dist/ を gh-pages ブランチに push
```

### 自前サーバー（Nginx）

```nginx
server {
    listen 80;
    root /var/www/gstock/dist;
    index index.html;

    # SPA のルーティング対応
    location / {
        try_files $uri $uri/ /index.html;
    }

    # PWA のキャッシュ設定
    location ~* \.(js|css|png|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## iPhone へのインストール手順

1. Safari でアプリの URL を開く
2. 共有ボタン（□↑）をタップ
3.「ホーム画面に追加」をタップ
4. 「追加」をタップ

→ ホーム画面にアイコンが追加され、フルスクリーンで動作します

## データについて

すべてのデータは端末の `localStorage` に保存されます。  
サーバーへの送信は行いません（AI 相談時は選択した API のみ通信）。

バックアップは 設定 → JSON バックアップ からダウンロードできます。

## AI Provider 切替

設定画面から Mock / OpenAI / Gemini / Claude を切替可能。  
API キーは `.env` に設定するか、将来の設定画面 UI から入力できます。

## ライセンス

Private
