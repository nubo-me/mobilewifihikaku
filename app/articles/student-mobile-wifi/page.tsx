import Link from 'next/link';
import type { Metadata } from "next";

import { LastUpdated } from "../../components/LastUpdated";

const lastUpdated = "2025-01-25";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "大学生におすすめのモバイルWiFi【2025年】安い・縛りなしプラン厳選",
  description: "大学生向けの安くて使いやすいモバイルWiFi特集とおすすめプランを詳しく解説",
  datePublished: "2025-01-25",
  dateModified: lastUpdated,
  author: {
    "@type": "Organization",
    name: "モバイルWiFi比較ナビ",
  },
};

export const metadata: Metadata = {
  title: "大学生におすすめのモバイルWiFi【2025年】安い・縛りなしプラン厳選",
  description: "大学生・専門学生必見！学割やキャンペーンを活用して安く使えるモバイルWiFiを厳選。オンライン授業、レポート作成、動画視聴に最適なプランをご紹介。",
  keywords: "大学生,モバイルWiFi,学割,安い,オンライン授業,学生,縛りなし,キャンペーン",
  alternates: {
    canonical: "/articles/student-mobile-wifi",
  },
  openGraph: {
    title: "大学生におすすめのモバイルWiFi【2025年】安い・縛りなしプラン厳選",
    description: "大学生向けの安くて使いやすいモバイルWiFi特集！オンライン授業も動画も思う存分楽しめるプランを紹介。",
    url: "/articles/student-mobile-wifi",
  },
};

export default function StudentMobileWifiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleLd),
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
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full inline-block text-sm font-bold mb-4">
              🎓 学生特集
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              大学生におすすめの<br className="md:hidden" />
              <span className="text-blue-600">モバイルWiFi</span>
              <br />
              安い・縛りなしプラン厳選
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              オンライン授業も動画も思う存分！<br className="md:hidden" />
              学生にやさしいプランをご紹介
            </p>
            <LastUpdated date={lastUpdated} className="mt-4 justify-center" />
          </div>

          {/* 学生の悩み */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">😰</span>
              大学生のネット事情あるある
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-bold text-red-800 mb-2">💸 スマホ代が高すぎる</h3>
                <p className="text-sm text-red-700">「親に払ってもらってるけど申し訳ない...」「バイト代の半分がスマホ代」</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h3 className="font-bold text-orange-800 mb-2">📚 オンライン授業で消費しすぎ</h3>
                <p className="text-sm text-orange-700">「Zoom授業で速度制限に...」「月末はまともに授業受けられない」</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <h3 className="font-bold text-yellow-800 mb-2">🏠 学生寮・アパートのWiFiが遅い</h3>
                <p className="text-sm text-yellow-700">「みんなで使うから夜は激重」「光回線の工事ができない」</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-800 mb-2">🎮 娯楽も我慢</h3>
                <p className="text-sm text-blue-700">「Netflix見たいけど我慢」「ゲームのアップデートができない」</p>
              </div>
            </div>
          </section>

          {/* 学生がモバイルWiFiを使うメリット */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">✨</span>
              学生にモバイルWiFiが最適な理由
            </h2>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">🎓 学生ライフを充実させる6つのメリット</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-1 mt-0.5">💰</span>
                    <div>
                      <h4 className="font-bold text-sm">通信費を大幅削減</h4>
                      <p className="text-xs opacity-90">スマホプランを最小にして月2〜3,000円節約</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-1 mt-0.5">📖</span>
                    <div>
                      <h4 className="font-bold text-sm">オンライン授業快適</h4>
                      <p className="text-xs opacity-90">Zoom、Teams、動画教材もサクサク</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-1 mt-0.5">🏫</span>
                    <div>
                      <h4 className="font-bold text-sm">キャンパスでも使える</h4>
                      <p className="text-xs opacity-90">学校のWiFiが弱くても安心</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-1 mt-0.5">🚫</span>
                    <div>
                      <h4 className="font-bold text-sm">縛りなしで安心</h4>
                      <p className="text-xs opacity-90">卒業・就職で生活変化があっても大丈夫</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-1 mt-0.5">👥</span>
                    <div>
                      <h4 className="font-bold text-sm">友達と一緒に使える</h4>
                      <p className="text-xs opacity-90">カフェや図書館でシェア可能</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-white bg-opacity-20 rounded-full p-1 mt-0.5">🎬</span>
                    <div>
                      <h4 className="font-bold text-sm">娯楽も思う存分</h4>
                      <p className="text-xs opacity-90">動画、ゲーム、SNSを制限なしで</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 学生の使用シーン別プラン */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">📚</span>
              学生の使い方別おすすめプラン
            </h2>

            <div className="space-y-6">
              {/* 節約重視学生 */}
              <div className="border border-green-300 bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-bold text-green-800">節約重視学生</h3>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">最安</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-green-700 mb-2"><strong>使い方：</strong></p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• オンライン授業メイン</li>
                      <li>• SNS軽め</li>
                      <li>• 動画はたまに</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-green-800">THE WiFi FiT</p>
                    <p className="text-lg font-bold text-green-600">月額1,298円〜</p>
                    <p className="text-sm text-green-700">使った分だけ課金</p>
                  </div>
                  <div className="text-sm text-green-700">
                    <p><strong>メリット：</strong></p>
                    <p>• 使わない月は超安い</p>
                    <p>• 縛りなし</p>
                    <p>• テスト期間の調整OK</p>
                  </div>
                </div>
              </div>

              {/* 標準学生 */}
              <div className="border border-blue-300 bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📱</span>
                  <h3 className="font-bold text-blue-800">標準的学生</h3>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">人気</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-blue-700 mb-2"><strong>使い方：</strong></p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• オンライン授業</li>
                      <li>• SNS・動画視聴</li>
                      <li>• レポート作成</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">ZEUS WiFi</p>
                    <p className="text-lg font-bold text-blue-600">月額1,980円</p>
                    <p className="text-sm text-blue-700">20GB/月</p>
                  </div>
                  <div className="text-sm text-blue-700">
                    <p><strong>メリット：</strong></p>
                    <p>• 業界最安級</p>
                    <p>• 縛りなし</p>
                    <p>• 海外研修でも使用可能</p>
                  </div>
                </div>
              </div>

              {/* 動画好き学生 */}
              <div className="border border-purple-300 bg-purple-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎬</span>
                  <h3 className="font-bold text-purple-800">動画・ゲーム好き学生</h3>
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">大容量</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-purple-700 mb-2"><strong>使い方：</strong></p>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Netflix・YouTube大量</li>
                      <li>• オンラインゲーム</li>
                      <li>• 動画配信・投稿</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-purple-800">ZEUS WiFi</p>
                    <p className="text-lg font-bold text-purple-600">月額3,106円</p>
                    <p className="text-sm text-purple-700">50GB/月</p>
                  </div>
                  <div className="text-sm text-purple-700">
                    <p><strong>メリット：</strong></p>
                    <p>• 大容量でも安い</p>
                    <p>• 速度制限の心配なし</p>
                    <p>• 友達とシェア可能</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 学生の年間スケジュール別活用法 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">📅</span>
              大学生活カレンダー別活用法
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-3">📚 学期中（4-7月、9-1月）</h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>✅ オンライン授業でデータ大量消費</li>
                  <li>✅ レポート・課題で調べ物多め</li>
                  <li>✅ テスト期間は動画学習</li>
                  <li>💡 <strong>必要容量：月20-30GB</strong></li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-3">🌴 長期休暇（8月、2-3月）</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>✅ Netflix・YouTube三昧</li>
                  <li>✅ 帰省先でのネット環境確保</li>
                  <li>✅ 旅行・合宿で持ち運び</li>
                  <li>💡 <strong>必要容量：月50GB以上</strong></li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-bold text-orange-800 mb-3">🎓 就活期間（3-4年生）</h3>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li>✅ Web面接で高速通信必須</li>
                  <li>✅ 移動中の情報収集</li>
                  <li>✅ ES提出・企業研究</li>
                  <li>💡 <strong>安定性重視プラン</strong></li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-bold text-purple-800 mb-3">🎉 新生活準備期</h3>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>✅ 引っ越し先のネット環境代替</li>
                  <li>✅ 一人暮らし準備の情報収集</li>
                  <li>✅ 光回線工事までのつなぎ</li>
                  <li>💡 <strong>短期利用OK縛りなし</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* 学生特典・キャンペーン */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">🎁</span>
              学生がお得になる裏技
            </h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg p-4">
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">💰</span>
                  スマホプランの見直しで大幅節約
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Before（大容量プラン）</p>
                    <p>• docomo 無制限：月7,315円</p>
                    <p>• au 使い放題：月7,238円</p>
                    <p>• SoftBank 無制限：月7,238円</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">After（最小プラン＋WiFi）</p>
                    <p>• 格安SIM 3GB：月1,500円</p>
                    <p>• モバイルWiFi：月2,000円</p>
                    <p className="font-bold text-yellow-200">合計3,500円（約4,000円節約！）</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-3">📱 学生におすすめ格安SIM組み合わせ</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-blue-800 mb-1">楽天モバイル</p>
                    <p className="text-blue-700">• 3GBまで1,078円</p>
                    <p className="text-blue-700">• 通話し放題付き</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800 mb-1">ahamo</p>
                    <p className="text-blue-700">• 20GB 2,970円</p>
                    <p className="text-blue-700">• 5分通話無料</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800 mb-1">UQモバイル</p>
                    <p className="text-blue-700">• 3GB 1,628円</p>
                    <p className="text-blue-700">• 学割で更に安く</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-3">🎯 キャンペーン活用術</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>✅ 新生活シーズン（3-4月）の特典を狙う</li>
                  <li>✅ 学生証提示で事務手数料無料になることも</li>
                  <li>✅ 友達紹介キャンペーンでキャッシュバック</li>
                  <li>✅ 初月無料キャンペーンのタイミングで申込み</li>
                </ul>
              </div>
            </div>
          </section>

          {/* おすすめランキング */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">🏆</span>
              大学生人気ランキング
            </h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg p-4 border-2 border-yellow-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-yellow-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                  <h3 className="font-bold text-lg">ZEUS WiFi 20GB</h3>
                  <span className="bg-red-500 text-xs px-2 py-1 rounded-full">学生人気No.1</span>
                </div>
                <p className="text-sm opacity-90 mb-2">月額1,980円 • 縛りなし • 業界最安級</p>
                <p className="text-xs opacity-75">理由：安い×大容量×卒業時も安心の縛りなし</p>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                  <h3 className="font-bold text-lg">THE WiFi FiT</h3>
                  <span className="bg-green-500 text-xs px-2 py-1 rounded-full">節約派</span>
                </div>
                <p className="text-sm opacity-90 mb-2">月額1,298円〜 • 従量制 • 使わない月は超安</p>
                <p className="text-xs opacity-75">理由：テスト期間など使用量変動に柔軟対応</p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                  <h3 className="font-bold text-lg">クラウドWiFi</h3>
                  <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">安定重視</span>
                </div>
                <p className="text-sm opacity-90 mb-2">月額2,580円 • 20GB • 端末補償あり</p>
                <p className="text-xs opacity-75">理由：就活Web面接など重要な場面でも安心</p>
              </div>
            </div>
          </section>

          {/* 学生生活での注意点 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">⚠️</span>
              学生が気をつけるべきポイント
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <h3 className="font-bold text-yellow-800 mb-2">💰 支払い関連</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• クレジットカード必須のサービスが多い</li>
                  <li>• 口座振替対応サービスを確認</li>
                  <li>• 家族カードでの支払いも検討</li>
                  <li>• 延滞には要注意</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-bold text-red-800 mb-2">📅 契約期間</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 卒業・就職で生活環境変化</li>
                  <li>• 縛りありプランは避ける</li>
                  <li>• 解約金の確認必須</li>
                  <li>• 端末返却条件もチェック</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-800 mb-2">🏫 学校での利用</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 電波の入りにくい教室がある</li>
                  <li>• バッテリー持ちを確認</li>
                  <li>• 共用時の通信量管理</li>
                  <li>• 学校WiFiとの使い分け</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">👥 シェア利用</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 友達と使うとデータ消費が増加</li>
                  <li>• 同時接続台数の制限</li>
                  <li>• セキュリティ設定の重要性</li>
                  <li>• 使用ルールの事前決定</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-6 text-center">
            <h2 className="text-lg font-bold mb-3">
              🎓 充実した学生ライフを始めよう！
            </h2>
            <p className="mb-4 text-blue-100 text-sm">
              オンライン授業も動画も思う存分。学生にやさしいプランで賢く節約
            </p>
            <Link 
              href="/"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition-colors inline-block text-sm"
            >
              📊 学生向けプランを探す
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}