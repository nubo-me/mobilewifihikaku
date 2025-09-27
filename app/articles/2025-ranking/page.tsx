import type { Metadata } from "next";
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
  title: "【2025年最新】モバイルWiFiおすすめランキング | 料金・速度・契約期間で徹底比較",
  description: "2025年最新のモバイルWiFiサービスをランキング形式で紹介。料金、通信速度、契約期間、データ容量を総合的に評価し、あなたにぴったりのWiFiサービスを見つけられます。",
  keywords: "モバイルWiFi,ランキング,2025年,おすすめ,比較,料金,速度,契約期間",
  openGraph: {
    title: "【2025年最新】モバイルWiFiおすすめランキング",
    description: "2025年最新のモバイルWiFiサービスをランキング形式で紹介。料金、通信速度、契約期間、データ容量を総合的に評価。",
    type: "article",
    url: "https://mobilewifihikaku.web.app/articles/2025-ranking",
  },
  alternates: {
    canonical: "/articles/2025-ranking",
  },
};

const lastUpdated = '2025-08-17';

const rankingData = [
  {
    rank: 1,
    name: "ZEUS WiFi",
    price: "月額980円～",
    contractPeriod: "2年契約",
    score: 95,
    reasons: ["業界最安級の料金", "大容量データプラン", "海外106カ国対応"],
    pros: ["料金が非常に安い", "大容量プランが豊富", "海外でも利用可能"],
    cons: ["契約期間の縛りあり", "速度制限時は遅い"]
  },
  {
    rank: 2,
    name: "クラウドWiFi",
    price: "月額2,580円～",
    contractPeriod: "縛りなし",
    score: 92,
    reasons: ["契約期間の縛りなし", "世界対応", "管理しやすい"],
    pros: ["いつでも解約可能", "海外対応", "クラウド管理"],
    cons: ["料金がやや高め", "速度は標準的"]
  },
  {
    rank: 3,
    name: "MONSTER MOBILE",
    price: "月額1,650円～",
    contractPeriod: "2年契約",
    score: 90,
    reasons: ["大容量特化", "安定した通信", "コスパ良好"],
    pros: ["大容量データプラン", "安定した通信品質", "料金とのバランス良い"],
    cons: ["契約期間あり", "解約金が発生"]
  }
];

export default function Ranking2025Page() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2025年最新】モバイルWiFiおすすめランキング",
    description:
      "2025年最新のモバイルWiFiサービスを料金、通信速度、契約期間、データ容量で総合的に評価しランキング形式で紹介",
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    inLanguage: "ja-JP",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mobilewifihikaku.web.app/articles/2025-ranking",
    },
    publisher: {
      "@type": "Organization",
      name: "モバイルWiFi比較ナビ",
      logo: {
        "@type": "ImageObject",
        url: "https://mobilewifihikaku.web.app/og-image.jpg",
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mobilewifihikaku.web.app/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://mobilewifihikaku.web.app/articles" },
      { "@type": "ListItem", position: 3, name: "2025年ランキング", item: "https://mobilewifihikaku.web.app/articles/2025-ranking" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb 
          items={[
            { label: 'ホーム', href: '/' },
            { label: '記事一覧', href: '/articles' },
            { label: '2025年ランキング' }
          ]} 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleLd)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbLd)
          }}
        />
        
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              【2025年最新】モバイルWiFiおすすめランキング
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              2025年最新のモバイルWiFiサービスを料金、通信速度、契約期間、データ容量で総合的に評価しランキング形式でご紹介します。
            </p>
            <LastUpdated date={lastUpdated} />
          </header>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">ランキング評価基準</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>料金</strong>: 月額料金の安さと初期費用</li>
                <li>• <strong>通信品質</strong>: 速度と安定性</li>
                <li>• <strong>契約期間</strong>: 解約の自由度</li>
                <li>• <strong>データ容量</strong>: プランの豊富さ</li>
                <li>• <strong>サポート</strong>: カスタマーサポートの質</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {rankingData.map((item) => (
              <div key={item.rank} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 text-white font-bold text-xl rounded-full flex items-center justify-center">
                      {item.rank}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-blue-600 font-medium">{item.price}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">{item.score}点</div>
                    <div className="text-sm text-gray-500">総合評価</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">選出理由</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.reasons.map((reason, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-500"></i>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">メリット</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">注意点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.cons.map((con, index) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">まとめ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              2025年のモバイルWiFi市場では、料金の安さと契約の自由度が重要なポイントとなっています。
              特に「ZEUS WiFi」は業界最安級の料金設定で、コストパフォーマンスを重視する方に最適です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              契約期間の縛りを避けたい方には「クラウドWiFi」がおすすめです。
              やや料金は高めですが、いつでも解約できる自由度が魅力です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              大容量データを安定して利用したい方は「MONSTER MOBILE」を検討してみてください。
              料金と通信品質のバランスが優れています。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/articles"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              他の記事も見る
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}