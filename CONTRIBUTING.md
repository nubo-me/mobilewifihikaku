# Contributing to Mobile WiFi Comparison Site

このプロジェクトへの貢献をありがとうございます！以下のガイドラインに従って、プロジェクトの品質向上にご協力ください。

## 🚀 How to Contribute

### 1. Issues
- バグレポート、機能要望、質問はすべてIssuesで受け付けています
- 新しいIssueを作成する前に、既存のIssueを確認してください
- Issueには適切なラベルを付けてください

### 2. Pull Requests
1. このリポジトリをフォークします
2. フィーチャーブランチを作成します (`git checkout -b feature/amazing-feature`)
3. 変更を加えて、テストを実行します
4. コミットメッセージは明確で分かりやすくします
5. プルリクエストを作成します

### 3. Development Setup

```bash
# リポジトリのクローン
git clone https://github.com/YOUR_USERNAME/mobilewifi-comparison.git
cd mobilewifi-comparison

# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local

# 開発サーバーの起動
npm run dev
```

## 📝 Code Style

- **TypeScript**: 型定義を適切に行ってください
- **ESLint**: `npm run lint` でコード品質をチェックしてください  
- **Prettier**: コードフォーマットを統一してください
- **コメント**: 複雑なロジックには日本語でコメントを追加してください

## 🧪 Testing

```bash
# リントチェック
npm run lint

# ビルドテスト
npm run build
```

## 📋 Commit Message Format

```
type(scope): subject

body

footer
```

### Types
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント更新
- `style`: コードスタイル修正
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: その他のメンテナンス

### Examples
```
feat(comparison): add price filter functionality
fix(mobile): resolve responsive layout issue
docs(readme): update installation instructions
```

## ❓ Questions

質問がある場合は、Issueを作成するか、プロジェクトメンテナーにお気軽にお問い合わせください。

ご協力ありがとうございます！ 🙏
