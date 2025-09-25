import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "シニア・60代におすすめのモバイルWiFi【2025年】簡単・安心プラン",
  description: "60代・シニア世代でも安心して使えるモバイルWiFiを厳選。操作が簡単で、サポートが充実したプランをご紹介。孫との動画通話やネットショッピングも快適に。",
  keywords: "シニア,60代,モバイルWiFi,簡単,安心,高齢者,操作簡単,サポート充実",
  alternates: {
    canonical: "/articles/senior-mobile-wifi",
  },
  openGraph: {
    title: "シニア・60代におすすめのモバイルWiFi【2025年】簡単・安心プラン",
    description: "シニア世代にやさしい！操作が簡単で安心して使えるモバイルWiFiプランをご紹介。",
    url: "/articles/senior-mobile-wifi",
  },
};

export default function SeniorMobileWifiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "シニア・60代におすすめのモバイルWiFi【2025年】簡単・安心プラン",
            "description": "シニア世代向けの操作が簡単で安心して使えるモバイルWiFiプランの紹介",
            "datePublished": "2025-01-25",
            "dateModified": "2025-01-25",
            "author": {
              "@type": "Organization",
              "name": "モバイルWiFi比較ナビ"
            }
          })
        }}
      />

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-blue-600">
              📱 モバイルWiFi比較ナビ
            </Link>
            <nav className="hidden md:flex space-x-4 text-sm">
              <Link href="/" className="text-gray-700 hover:text-blue-600">ホーム</Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-600">記事</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full inline-block text-sm font-bold mb-4">
              👴👵 シニア向け特集
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              シニア・60代におすすめの<br className="md:hidden" />
              <span className="text-orange-600">モバイルWiFi</span>
              <br />
              簡単・安心プラン
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              操作が簡単で、サポートも充実！<br className="md:hidden" />
              シニア世代にやさしいプランをご紹介
            </p>
          </div>

          {/* シニアの悩み */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">😅</span>
              シニア世代のネット環境お悩み
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-bold text-red-800 mb-2 text-base">🤔 操作が複雑でわからない</h3>
                <p className="text-sm text-red-700">「設定が難しそう」「ボタンが多くて迷う」「説明書が読みにくい」</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h3 className="font-bold text-orange-800 mb-2 text-base">📞 困った時に相談できない</h3>
                <p className="text-sm text-orange-700">「サポートに電話がつながらない」「若い人に聞きにくい」</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <h3 className="font-bold text-yellow-800 mb-2 text-base">💰 料金体系がよくわからない</h3>
                <p className="text-sm text-yellow-700">「いつの間にか高額請求」「契約内容が複雑」</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-800 mb-2 text-base">👪 孫とのやり取りがしたい</h3>
                <p className="text-sm text-blue-700">「LINEで孫と話したい」「写真を送受信したい」</p>
              </div>
            </div>
          </section>

          {/* シニアにモバイルWiFiが最適な理由 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">✨</span>
              シニア世代にモバイルWiFiがおすすめな理由
            </h2>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">👴👵 シニア世代にやさしい6つのポイント</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-2 mt-0.5 text-xl">📱</span>
                    <div>
                      <h4 className="font-bold text-sm">操作がとても簡単</h4>
                      <p className="text-xs opacity-90">電源ボタンを押すだけで使える</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-2 mt-0.5 text-xl">☎️</span>
                    <div>
                      <h4 className="font-bold text-sm">サポートが手厚い</h4>
                      <p className="text-xs opacity-90">電話でていねいに教えてもらえる</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-2 mt-0.5 text-xl">💰</span>
                    <div>
                      <h4 className="font-bold text-sm">料金がわかりやすい</h4>
                      <p className="text-xs opacity-90">月額固定で安心、追加料金なし</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-2 mt-0.5 text-xl">🏠</span>
                    <div>
                      <h4 className="font-bold text-sm">工事不要ですぐ使える</h4>
                      <p className="text-xs opacity-90">届いたその日から利用開始</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-2 mt-0.5 text-xl">👨‍👩‍👧‍👦</span>
                    <div>
                      <h4 className="font-bold text-sm">家族と繋がれる</h4>
                      <p className="text-xs opacity-90">LINEや動画通話でコミュニケーション</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-2 mt-0.5 text-xl">🚫</span>
                    <div>
                      <h4 className="font-bold text-sm">契約の縛りがない</h4>
                      <p className="text-xs opacity-90">いつでも解約できて安心</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* シニア利用シーン別プラン */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">📱</span>
              利用目的別おすすめプラン
            </h2>

            <div className="space-y-6">
              {/* 軽い利用 */}
              <div className="border-2 border-green-300 bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📧</span>
                  <h3 className="font-bold text-green-800 text-lg">メール・LINE中心</h3>
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-bold">初心者向け</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-base text-green-700 mb-3 font-semibold">使い方：</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• メールの送受信</li>
                      <li>• LINEでのやり取り</li>
                      <li>• 天気予報の確認</li>
                      <li>• ニュースサイト閲覧</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-green-800 text-lg">THE WiFi FiT</p>
                    <p className="text-2xl font-bold text-green-600">月額1,298円〜</p>
                    <p className="text-sm text-green-700">使った分だけお支払い</p>
                  </div>
                  <div className="text-sm text-green-700">
                    <p className="font-semibold mb-2">おすすめ理由：</p>
                    <p>• 使わない月は安い</p>
                    <p>• 複雑な設定不要</p>
                    <p>• 電話サポートあり</p>
                  </div>
                </div>
              </div>

              {/* 動画通話 */}
              <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📹</span>
                  <h3 className="font-bold text-blue-800 text-lg">孫との動画通話</h3>
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">人気</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-base text-blue-700 mb-3 font-semibold">使い方：</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• LINEビデオ通話</li>
                      <li>• 写真の送受信</li>
                      <li>• YouTubeで孫と同じ動画</li>
                      <li>• オンライン診療</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800 text-lg">ZEUS WiFi</p>
                    <p className="text-2xl font-bold text-blue-600">月額1,980円</p>
                    <p className="text-sm text-blue-700">月20GB</p>
                  </div>
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold mb-2">おすすめ理由：</p>
                    <p>• 動画通話も途切れない</p>
                    <p>• 料金が一定で安心</p>
                    <p>• 24時間サポート</p>
                  </div>
                </div>
              </div>

              {/* エンタメ重視 */}
              <div className="border-2 border-purple-300 bg-purple-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎬</span>
                  <h3 className="font-bold text-purple-800 text-lg">動画・娯楽メイン</h3>
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">たっぷり</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-base text-purple-700 mb-3 font-semibold">使い方：</p>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• YouTube・Netflix視聴</li>
                      <li>• 昔の映画・ドラマ鑑賞</li>
                      <li>• 趣味の動画学習</li>
                      <li>• オンラインショッピング</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-purple-800 text-lg">ZEUS WiFi</p>
                    <p className="text-2xl font-bold text-purple-600">月額3,106円</p>
                    <p className="text-sm text-purple-700">月50GB</p>
                  </div>
                  <div className="text-sm text-purple-700">
                    <p className="font-semibold mb-2">おすすめ理由：</p>
                    <p>• 大容量で動画見放題</p>
                    <p>• 高画質で楽しめる</p>
                    <p>• 速度制限の心配なし</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 操作方法 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">📖</span>
              かんたん操作ガイド
            </h2>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-6 text-center">
                🔌 3ステップで始められます！
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-2">📦 箱から取り出す</h4>
                    <p className="text-sm text-gray-700">届いた箱を開けて、本体を取り出します。充電器も一緒に入っています。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-2">🔘 電源ボタンを押す</h4>
                    <p className="text-sm text-gray-700">本体の電源ボタンを3秒間長押しします。ランプが点灯したら準備完了です。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-2">📱 スマホ・タブレットに接続</h4>
                    <p className="text-sm text-gray-700">スマホの設定画面でWiFiを選び、本体に書かれた名前とパスワードを入力。これで完了です！</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">💡</span>
                わからない時は
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 専用サポートダイヤル：0120-XXX-XXX（フリーダイヤル）</li>
                <li>• 受付時間：9:00〜18:00（年中無休）</li>
                <li>• シニア専用サポートで丁寧に対応</li>
                <li>• 遠隔サポートで画面を見ながら説明可能</li>
              </ul>
            </div>
          </section>

          {/* シニア向け活用法 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">🌟</span>
              シニア世代の活用アイデア
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 text-base mb-4 flex items-center">
                  <span className="mr-2 text-xl">👨‍👩‍👧‍👦</span>
                  家族とのコミュニケーション
                </h3>
                <div className="space-y-3">
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                    <h4 className="font-semibold text-pink-800 text-sm mb-1">📹 孫とのビデオ通話</h4>
                    <p className="text-xs text-pink-700">LINEで顔を見ながらお話。成長を間近で感じられます</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">📷 写真の共有</h4>
                    <p className="text-xs text-blue-700">旅行の写真や日常の様子を家族グループで共有</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">🎂 記念日の参加</h4>
                    <p className="text-xs text-green-700">離れていても誕生日会や行事にオンライン参加</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 text-base mb-4 flex items-center">
                  <span className="mr-2 text-xl">🎯</span>
                  日常生活の便利活用
                </h3>
                <div className="space-y-3">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <h4 className="font-semibold text-yellow-800 text-sm mb-1">🛒 ネットショッピング</h4>
                    <p className="text-xs text-yellow-700">重い物も家まで配達。Amazonや楽天で便利にお買い物</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">🏥 オンライン診療</h4>
                    <p className="text-xs text-purple-700">病院に行かずに自宅で医師と相談できます</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <h4 className="font-semibold text-orange-800 text-sm mb-1">📚 趣味の学習</h4>
                    <p className="text-xs text-orange-700">YouTubeで手芸・料理・園芸などの動画を参考に</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 安心ポイント */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">🛡️</span>
              シニア世代が安心できるポイント
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <h3 className="font-bold text-green-800 text-base mb-3 flex items-center">
                  <span className="mr-2 text-xl">💰</span>
                  料金の安心ポイント
                </h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>✅ 月額料金が一定で追加請求なし</li>
                  <li>✅ 契約期間の縛りなしで安心</li>
                  <li>✅ 初期費用も明確で分かりやすい</li>
                  <li>✅ 請求書を郵送で確認できる</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 text-base mb-3 flex items-center">
                  <span className="mr-2 text-xl">📞</span>
                  サポートの充実
                </h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>✅ 年中無休のフリーダイヤル</li>
                  <li>✅ シニア専用サポート窓口</li>
                  <li>✅ 遠隔操作でわかりやすく説明</li>
                  <li>✅ 訪問サポートも利用可能</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                <h3 className="font-bold text-purple-800 text-base mb-3 flex items-center">
                  <span className="mr-2 text-xl">🔒</span>
                  セキュリティも安心
                </h3>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>✅ 不正アクセスを自動でブロック</li>
                  <li>✅ ウイルス対策ソフト付属</li>
                  <li>✅ 怪しいサイトへのアクセス警告</li>
                  <li>✅ 個人情報保護も徹底</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
                <h3 className="font-bold text-orange-800 text-base mb-3 flex items-center">
                  <span className="mr-2 text-xl">🎁</span>
                  特典・サービス
                </h3>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li>✅ シニア限定割引あり</li>
                  <li>✅ 端末保証で故障時も安心</li>
                  <li>✅ 使い方ガイドブックプレゼント</li>
                  <li>✅ 家族割引でさらにお得</li>
                </ul>
              </div>
            </div>
          </section>

          {/* よくある質問（シニア特化） */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3 text-2xl">❓</span>
              シニア世代のよくある質問
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 text-base mb-2">Q. 機械が苦手でも本当に使えますか？</h3>
                <p className="text-sm text-gray-700">A. はい、大丈夫です。電源ボタンを押すだけで使えます。設定も電話サポートで一緒に行いますので、安心してご利用いただけます。</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 text-base mb-2">Q. 毎月の料金以外にお金はかかりませんか？</h3>
                <p className="text-sm text-gray-700">A. 月額料金以外の追加料金は一切ありません。使いすぎによる高額請求もありませんので、安心してお使いください。</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 text-base mb-2">Q. 孫とのビデオ通話は本当にできますか？</h3>
                <p className="text-sm text-gray-700">A. もちろんです。LINEやSkypeなどのアプリを使って、お孫さんと顔を見ながらお話できます。設定方法もサポートがお手伝いします。</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 text-base mb-2">Q. 壊れてしまったらどうすればいいですか？</h3>
                <p className="text-sm text-gray-700">A. 端末保証に加入いただければ、故障時は無料で交換いたします。また、専用サポートが対応方法をご案内しますので、お気軽にお電話ください。</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-xl p-6 text-center">
            <h2 className="text-lg font-bold mb-3">
              👴👵 シニア世代の豊かなネットライフを始めませんか？
            </h2>
            <p className="mb-4 text-orange-100 text-sm">
              操作簡単・サポート充実・料金明確で安心してご利用いただけます
            </p>
            <Link 
              href="/"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition-colors inline-block text-sm"
            >
              🎯 シニア向けプランを探す
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}