import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'モバイルWi-Fi初心者向けガイド | モバイルWiFi比較ナビ',
  description: 'はじめてモバイルWi-Fiを選ぶ方向けの基本知識とおすすめサービスをわかりやすく解説します。',
};

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "モバイルWi-Fi初心者向けガイド",
            "description": "はじめてモバイルWi-Fiを選ぶ方向けの基本知識とおすすめサービスをわかりやすく解説",
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "inLanguage": "ja-JP",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mobilewifihikaku.web.app/articles/beginner-guide"
            },
            "publisher": {
              "@type": "Organization",
              "name": "モバイルWiFi比較ナビ",
              "logo": {"@type": "ImageObject", "url": "https://mobilewifihikaku.web.app/og-image.jpg"}
            }
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
              {"@type": "ListItem", "position": 3, "name": "初心者向けガイド", "item": "https://mobilewifihikaku.web.app/articles/beginner-guide"}
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
              <Link href="/#comparison" className="text-gray-600 hover:text-blue-600 transition-colors">比較表</Link>
              <Link href="/#products" className="text-gray-600 hover:text-blue-600 transition-colors">サービス一覧</Link>
              <Link href="/articles" className="text-gray-600 hover:text-blue-600 transition-colors">記事一覧</Link>
              <Link href="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors">よくある質問</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-blue-600">記事一覧</Link>
            <span>/</span>
            <span className="text-gray-800">初心者向けガイド</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              モバイルWi-Fi初心者向けガイド
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              はじめてモバイルWi-Fiを選ぶ方向けに、基本知識から選び方のポイントまでわかりやすく解説します。
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">モバイルWi-Fiとは？</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                モバイルWi-Fiは、外出先でもインターネットに接続できる小型の通信機器です。
                スマートフォンやパソコン、タブレットなど複数の端末を同時にインターネットに接続できます。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">主な特徴</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>持ち運びができる小型サイズ</li>
                <li>複数端末を同時接続可能</li>
                <li>工事不要で即日利用開始</li>
                <li>全国どこでも利用可能（エリア内）</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">選び方の基本ポイント</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">料金・契約期間</h3>
                  <p className="text-gray-600">
                    月額料金と契約期間を確認しましょう。縛りなしプランもありますが、
                    長期利用なら契約期間ありのプランがお得な場合があります。
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">データ容量</h3>
                  <p className="text-gray-600">
                    月間の利用量に応じて適切なプランを選択しましょう。
                    動画視聴が多い方は大容量プランがおすすめです。
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">通信速度</h3>
                  <p className="text-gray-600">
                    用途に応じて必要な速度を確認しましょう。
                    オンライン会議なら10-30Mbps程度が目安です。
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">通信エリア</h3>
                  <p className="text-gray-600">
                    よく使う場所での通信品質を事前に確認しましょう。
                    クラウドSIMは複数キャリアを使えて安心です。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">初心者におすすめのサービス</h2>
              <p className="text-gray-600 mb-6">
                設定が簡単で、サポートが充実している初心者向けのサービスをご紹介します。
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">詳しい比較は比較表で！</h3>
                <p className="mb-6">16種類のサービスを詳しく比較できます</p>
                <Link 
                  href="/#comparison"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  比較表を見る
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-router-line text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold">モバイルWiFi比較ナビ</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            最適なモバイルWi-Fiを見つけるための比較サイトです。
          </p>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
