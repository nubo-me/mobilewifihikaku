# 📱 Mobile WiFi Comparison Site

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://mobilewifihikaku.web.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.0.0-orange)](https://firebase.google.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue)](https://tailwindcss.com/)

日本のモバイルWiFiサービスを比較・検索できるWebサイトです。料金、データ容量、通信速度などの詳細情報を一覧で確認し、最適なサービスを見つけることができます。

## 🌐 Live Demo

**🔗 [https://mobilewifihikaku.web.app](https://mobilewifihikaku.web.app)**

## ✨ Features

### 📊 主要機能
- **料金比較**: 月額料金、初期費用、解約金の比較
- **プラン検索**: データ容量別のプラン検索
- **速度情報**: 各サービスの通信速度比較
- **詳細情報**: キャンペーン情報、対応エリア、端末情報
- **レスポンシブデザイン**: PC・タブレット・スマートフォン対応

### 🔒 セキュリティ機能
- **CSP (Content Security Policy)**: XSS攻撃防御
- **セキュリティヘッダー**: HSTS、X-Frame-Options設定
- **Firebase Analytics**: プライバシー配慮のアクセス解析

### 🚀 SEO最適化
- **メタタグ最適化**: Open Graph、Twitter Card対応
- **構造化データ**: JSON-LD形式でのデータ構造化
- **サイトマップ**: 検索エンジン最適化
- **パフォーマンス**: 静的サイト生成による高速表示

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15.3.2](https://nextjs.org/)**: React フレームワーク
- **[TypeScript](https://www.typescriptlang.org/)**: 型安全な開発
- **[Tailwind CSS](https://tailwindcss.com/)**: スタイリング
- **[Recharts](https://recharts.org/)**: データ可視化

### Backend & Infrastructure
- **[Firebase Hosting](https://firebase.google.com/products/hosting)**: 静的サイトホスティング
- **[Firebase Analytics](https://firebase.google.com/products/analytics)**: アクセス解析
- **Static Site Generation**: SEO最適化された静的サイト

### Development Tools
- **[ESLint](https://eslint.org/)**: コード品質管理
- **[PostCSS](https://postcss.org/)**: CSS処理
- **[Cross-env](https://github.com/kentcdodds/cross-env)**: 環境変数管理

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0以上
- npm または yarn
- Firebase CLI (デプロイ用)

### Installation

```bash
# リポジトリのクローン
git clone https://github.com/YOUR_USERNAME/mobilewifi-comparison.git
cd mobilewifi-comparison

# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.localファイルを編集してFirebase設定を追加
```

### Development

```bash
# 開発サーバーの起動
npm run dev

# ブラウザで http://localhost:3000 を開く
```

### Build & Deploy

```bash
# プロダクションビルド
npm run build

# Firebase にデプロイ
npm run deploy
```

## 📁 Project Structure

```
mobilewifi-comparison/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # レイアウトコンポーネント
│   ├── page.tsx           # メインページ
│   ├── robots.txt         # 検索エンジン設定
│   └── sitemap.ts         # サイトマップ生成
├── lib/                   # ユーティリティ
│   └── firebase.ts        # Firebase設定
├── public/                # 静的ファイル
├── firebase.json          # Firebase設定
├── next.config.ts         # Next.js設定
└── tailwind.config.js     # Tailwind設定
```

## 🔧 Configuration

### Environment Variables

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals**: 全指標でGood評価
- **静的サイト生成**: 高速な初期読み込み
- **画像最適化**: Next.js Image コンポーネント使用

## 🤝 Contributing

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 License

このプロジェクトは MIT License の下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 📞 Contact

プロジェクトに関する質問やフィードバックがございましたら、お気軽にお問い合わせください。

---

⭐ このプロジェクトが役に立った場合は、ぜひスターを付けてください！
