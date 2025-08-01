# Firebase セキュリティ設定ガイド

## 🔒 セキュリティ対策一覧

### 1. 環境変数管理
- **重要**: `.env.local`ファイルに機密情報を保存
- **禁止**: ソースコードへの直接埋め込み
- **確認**: `.env.local`が`.gitignore`で除外されていること

### 2. Firebase Security Rules

#### Firestore Rules (`firestore.rules`)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 読み取り専用（静的サイトのため）
    match /{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

#### Storage Rules (`storage.rules`)
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 読み取り専用
    match /{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

### 3. HTTPヘッダーセキュリティ

以下のセキュリティヘッダーが設定済み：
- `X-Frame-Options: DENY` - クリックジャッキング防止
- `X-Content-Type-Options: nosniff` - MIMEスニッフィング防止
- `X-XSS-Protection: 1; mode=block` - XSS攻撃防止
- `Strict-Transport-Security` - HTTPS強制
- `Content-Security-Policy` - コンテンツ実行制限
- `Referrer-Policy` - リファラー情報制御

### 4. Firebase API制限

以下の設定をFirebase Consoleで実施することを推奨：

#### API キー制限
1. Firebase Console → プロジェクト設定 → ウェブAPIキー
2. 「アプリケーションの制限」で以下を設定：
   - **HTTPリファラー**: `https://yourdomain.com/*`
   - **API制限**: 必要最小限のAPIのみ有効化

#### 推奨API設定
- ✅ Firebase Hosting API
- ✅ Firebase Analytics API  
- ❌ Firestore API（必要に応じて）
- ❌ Cloud Storage API（必要に応じて）
- ❌ Authentication API（現在不使用）

### 5. 定期的なセキュリティチェック

月次で以下を確認：
- [ ] Firebase Security Rulesの適切性
- [ ] API キー使用状況の監視
- [ ] 不審なアクセスログの確認
- [ ] 依存関係の脆弱性チェック

### 6. 本番環境デプロイ前チェックリスト

- [ ] `.env.local`から機密情報が削除されている
- [ ] Firebase Security Rulesがデプロイされている
- [ ] HTTPSリダイレクトが有効
- [ ] セキュリティヘッダーが適用されている
- [ ] 不要なFirebase機能が無効化されている

## 🚨 インシデント対応

### APIキー漏洩時の対応
1. **即座に実行**:
   - Firebase ConsoleでAPIキーを無効化
   - 新しいAPIキーを生成
   - 環境変数を更新

2. **調査**:
   - アクセスログの確認
   - 不正使用の有無をチェック

3. **再発防止**:
   - セキュリティ設定の見直し
   - 監視体制の強化

## 📞 緊急連絡先

セキュリティインシデント発生時：
- Firebase Support: [Firebase サポート](https://firebase.google.com/support)
- プロジェクト管理者: [連絡先を記載]
