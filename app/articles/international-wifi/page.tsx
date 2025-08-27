import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "海外で使えるモバイルWiFi徹底比較【2025年最新】| 料金・対応国・速度で選ぶおすすめサービス",
  description: "海外旅行や出張で使えるモバイルWiFiサービスを徹底比較。料金、対応国数、通信速度、レンタル期間など詳細情報でピッタリの海外WiFiが見つかります。",
  keywords: "海外WiFi,国際WiFi,海外旅行,モバイルWiFi,レンタルWiFi,海外出張,国際ローミング,料金比較",
  openGraph: {
    title: "海外で使えるモバイルWiFi徹底比較【2025年最新】",
    description: "海外旅行や出張で使えるモバイルWiFiサービスを徹底比較。料金、対応国数、通信速度など詳細情報でピッタリの海外WiFiが見つかります。",
    type: "article",
  },
};

export default function InternationalWiFiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "海外で使えるモバイルWiFi徹底比較【2025年最新】",
            "description": "海外旅行や出張で使えるモバイルWiFiサービスを徹底比較。料金、対応国数、通信速度など詳細",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
            "inLanguage": "ja-JP",
            "mainEntityOfPage": {"@type": "WebPage", "@id": "https://mobilewifihikaku.web.app/articles/international-wifi"},
            "publisher": {"@type": "Organization", "name": "モバイルWiFi比較ナビ", "logo": {"@type": "ImageObject", "url": "https://mobilewifihikaku.web.app/og-image.jpg"}}
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://mobilewifihikaku.web.app/"},
              {"@type": "ListItem", "position": 2, "name": "記事一覧", "item": "https://mobilewifihikaku.web.app/articles"},
              {"@type": "ListItem", "position": 3, "name": "海外で使えるモバイルWiFi", "item": "https://mobilewifihikaku.web.app/articles/international-wifi"}
            ]
          })
        }}
      />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-router-line text-white text-lg"></i>
              </div>
              <h1 className="text-xl font-bold text-gray-800">モバイルWiFi比較ナビ</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</Link>
              <Link href="/#comparison" className="text-gray-600 hover:text-blue-600 transition-colors">比較表</Link>
              <Link href="/articles" className="text-gray-600 hover:text-blue-600 transition-colors">記事一覧</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span className="mx-2">›</span>
            <Link href="/articles" className="hover:text-blue-600">記事一覧</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">海外で使えるモバイルWiFi徹底比較</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              海外で使えるモバイルWiFi徹底比較【2025年最新】
            </h1>
            <p className="text-gray-600 text-lg">
              料金・対応国・速度で選ぶおすすめサービス
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">海外WiFiの選び方ガイド</h2>
          <p className="text-gray-600 mb-4">
            海外旅行や出張で安心してインターネットを使うために、海外対応のモバイルWiFiは必需品です。
            適切なサービスを選ぶことで、高額な国際ローミング料金を避けながら快適に通信できます。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">海外WiFi選びのポイント</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>渡航先の対応国・地域を確認する</li>
              <li>滞在日数に応じた料金プランを比較する</li>
              <li>必要なデータ容量を見積もる</li>
              <li>受取・返却方法の利便性を確認する</li>
              <li>緊急時のサポート体制を確認する</li>
            </ul>
          </div>
        </section>

        {/* Service Types */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">海外WiFiサービスの種類</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">レンタルWiFi</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  <strong>短期旅行におすすめ</strong><br/>
                  必要な期間だけレンタルする従来型のサービス
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>メリット：</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>明確な料金体系</li>
                    <li>充実したサポート</li>
                    <li>豊富な対応国</li>
                  </ul>
                  <p className="mt-2"><strong>デメリット：</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>受取・返却の手間</li>
                    <li>長期利用で割高</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">クラウドSIM</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  <strong>長期・頻繁な海外利用におすすめ</strong><br/>
                  月額契約で海外でも追加料金で利用可能
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>メリット：</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>契約後すぐ利用可能</li>
                    <li>長期利用でお得</li>
                    <li>受取・返却不要</li>
                  </ul>
                  <p className="mt-2"><strong>デメリット：</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>月額基本料が発生</li>
                    <li>海外利用時の追加料金</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">おすすめ海外WiFiサービス</h2>
          
          {/* Rental WiFi */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-green-600 mb-6">レンタルWiFi部門</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">グローバルWiFi</h4>
                <p className="text-green-600 font-bold text-lg mb-3">1日970円〜</p>
                <ul className="text-sm text-gray-600 mt-2">
                  <li>• 200以上の国・地域対応</li>
                  <li>• 空港カウンターで受取可能</li>
                  <li>• 24時間365日サポート</li>
                  <li>• 早割・長期割引あり</li>
                </ul>
              </div>
              <div className="border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">イモトのWiFi</h4>
                <p className="text-green-600 font-bold text-lg mb-3">1日680円〜</p>
                <ul className="text-sm text-gray-600 mt-2">
                  <li>• CMでおなじみの知名度</li>
                  <li>• 主要空港で受取・返却可能</li>
                  <li>• 豊富な料金プラン</li>
                  <li>• 安心の国内ブランド</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cloud SIM */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-600 mb-6">クラウドSIM部門</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-purple-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">ZEUS WiFi</h4>
                <p className="text-purple-600 font-bold text-lg mb-3">海外利用：1日161円〜</p>
                <ul className="text-sm text-gray-600 mt-2">
                  <li>• 106カ国で利用可能</li>
                  <li>• 月額料金に海外利用分を追加</li>
                  <li>• 事前申込不要で海外利用</li>
                  <li>• 国内でも月額プランで利用</li>
                </ul>
              </div>
              <div className="border border-purple-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">THE WiFi</h4>
                <p className="text-purple-600 font-bold text-lg mb-3">海外利用：1日850円〜</p>
                <ul className="text-sm text-gray-600 mt-2">
                  <li>• 132カ国で利用可能</li>
                  <li>• 30日間お試し期間あり</li>
                  <li>• 海外利用は従量課金</li>
                  <li>• 国内15万ヶ所のWiFiスポット</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Country Comparison */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">主要国別料金比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">サービス</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">韓国</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">台湾</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">ハワイ</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">ヨーロッパ</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">グローバルWiFi</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">970円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">970円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1,270円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1,270円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">豊富なプラン</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">イモトのWiFi</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">680円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">680円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1,580円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1,580円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">知名度抜群</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">ZEUS WiFi</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">161円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">161円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">430円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">430円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">圧倒的安さ</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">THE WiFi</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">850円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">850円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">850円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">850円/日</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">定額料金</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">海外WiFi利用時の注意点</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-3">事前準備</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>✓ 渡航先の対応確認</strong><br/>サービスエリアの事前確認は必須</li>
                  <li><strong>✓ 受取・返却場所</strong><br/>空港カウンターの場所と営業時間</li>
                  <li><strong>✓ データ容量の目安</strong><br/>滞在期間と使用予定を考慮</li>
                  <li><strong>✓ 予備バッテリー</strong><br/>長時間の外出時は必須アイテム</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">現地での使い方</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>✓ スマホのローミング設定</strong><br/>海外WiFi使用時はOFF推奨</li>
                  <li><strong>✓ 複数端末での共有</strong><br/>家族・グループでの効率的利用</li>
                  <li><strong>✓ セキュリティ対策</strong><br/>パスワード設定と適切な管理</li>
                  <li><strong>✓ トラブル時の連絡先</strong><br/>24時間サポートの確認</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Destination Guide */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">人気渡航先別おすすめ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">🇰🇷 韓国</h4>
              <p className="text-sm text-gray-600 mb-2">高速通信・安定接続</p>
              <p className="font-bold text-gray-800">おすすめ：ZEUS WiFi</p>
              <p className="text-sm text-gray-600">1日161円で格安利用可能</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">🇹🇼 台湾</h4>
              <p className="text-sm text-gray-600 mb-2">観光地でも安定通信</p>
              <p className="font-bold text-gray-800">おすすめ：グローバルWiFi</p>
              <p className="text-sm text-gray-600">充実サポートで安心</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">🇺🇸 ハワイ</h4>
              <p className="text-sm text-gray-600 mb-2">リゾート地での必需品</p>
              <p className="font-bold text-gray-800">おすすめ：イモトのWiFi</p>
              <p className="text-sm text-gray-600">現地サポート充実</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">🇪🇺 ヨーロッパ</h4>
              <p className="text-sm text-gray-600 mb-2">多国間移動に対応</p>
              <p className="font-bold text-gray-800">おすすめ：THE WiFi</p>
              <p className="text-sm text-gray-600">定額で周遊利用</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">🇹🇭 タイ</h4>
              <p className="text-sm text-gray-600 mb-2">東南アジアの人気地</p>
              <p className="font-bold text-gray-800">おすすめ：ZEUS WiFi</p>
              <p className="text-sm text-gray-600">コスパ重視なら最適</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">🇦🇺 オーストラリア</h4>
              <p className="text-sm text-gray-600 mb-2">広大な国土をカバー</p>
              <p className="font-bold text-gray-800">おすすめ：グローバルWiFi</p>
              <p className="text-sm text-gray-600">幅広いエリア対応</p>
            </div>
          </div>
        </section>

        {/* Summary and CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">海外旅行を快適にするWiFi選び</h2>
          <p className="mb-6">
            海外でのインターネット利用は、もはや必需品です。適切な海外WiFiサービスを選んで、
            安心・快適な海外旅行や出張を実現しましょう。料金だけでなく、サポート体制や使いやすさも重要な選択基準です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#comparison"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
            >
              詳細比較表を見る
            </Link>
            <Link
              href="/articles"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              他の記事も見る
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 モバイルWiFi比較ナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
