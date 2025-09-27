import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
  title: '出張・旅行向けモバイルWiFi | 店長が選ぶ身軽な3プラン',
  description:
    '出張が多いビジネスパーソンや海外旅行・帰省で使いたい方向けに、店長が現場視点で選んだモバイルWiFiプランを解説します。',
};

const publishedDate = '2025-09-27';

const travelUseCases = [
  {
    icon: '💼',
    title: '月3回以上の国内出張',
    description: 'レンタルだと費用がかさむため、定額のサブスクリプション型を選びたい方に。受け取り方法の柔軟さも重要です。',
  },
  {
    icon: '🌏',
    title: '海外出張・旅行が年2回以上',
    description: '海外チャージに対応したプランなら、日本の端末をそのまま持ち出して現地ですぐ開通できます。',
  },
  {
    icon: '🏠',
    title: '帰省や単身赴任の一時利用',
    description: '帰省先のネット環境が整っていない場合や短期赴任での利用に。解約金や端末返却のルールを事前に確認しましょう。',
  },
];

const recommendedPlans = [
  {
    name: 'ZEUS WiFi フリープラン',
    price: '月額2,980円〜 / 100GB',
    reason: '最短当日発送で空港受取も可能。海外108カ国に対応。',
    link: '/articles/providers/zeus-wifi',
  },
  {
    name: 'Mugen WiFi FLEXプラン',
    price: '月額3,718円 / 100GB',
    reason: '30日間お試し制度あり。帰国後の解約も違約金ゼロ。',
    link: '/articles/providers/mugen-wifi',
  },
  {
    name: 'Broad WiMAX 5Gレンタル',
    price: '月額3,883円〜 / 無制限',
    reason: '長期出張で高トラフィックを使う場合におすすめ。店舗で即日受け渡し可。',
    link: '/articles/providers/broad-wimax',
  },
];

const faqs = [
  {
    question: '空港カウンターで受け取れますか？',
    answer:
      'ZEUS WiFiは主要空港の端末受け渡しに対応しています。その他のプランでも、ホテルやコワーキングスペースへの配送手配が可能です。',
  },
  {
    question: '海外利用時の料金は？',
    answer:
      '国ごとに1日あたり900円〜1,500円前後でチャージできます。渡航先と滞在日数を事前に共有いただければ最安パターンをご案内します。',
  },
  {
    question: '短期利用で早期解約しても問題ない？',
    answer:
      'FLEXプランなど解約金がかからないタイプを選べば安心です。解約時の端末返送だけ忘れないようご注意ください。',
  },
];

export default function BusinessTripPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '出張・旅行向けモバイルWiFiおすすめ3選',
    description: '出張・旅行で使いやすいモバイルWiFiプランを店舗スタッフが解説。',
    datePublished: publishedDate,
    dateModified: publishedDate,
    inLanguage: 'ja-JP',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://mobilewifihikaku.web.app/articles/purpose/business-trip',
    },
    author: {
      '@type': 'Person',
      name: 'モバイルWiFi比較ナビ 店長 佐藤',
    },
    publisher: {
      '@type': 'Organization',
      name: 'モバイルWiFi比較ナビ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mobilewifihikaku.web.app/og-image.jpg',
      },
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://mobilewifihikaku.web.app/' },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: 'https://mobilewifihikaku.web.app/articles' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '出張・旅行向け',
        item: 'https://mobilewifihikaku.web.app/articles/purpose/business-trip',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-flight-takeoff-line text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-gray-800">モバイルWiFi比較ナビ</span>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/#comparison" className="text-gray-600 hover:text-blue-600 transition-colors">
                比較表
              </Link>
              <Link href="/#products" className="text-gray-600 hover:text-blue-600 transition-colors">
                サービス一覧
              </Link>
              <Link href="/articles" className="text-gray-600 hover:text-blue-600 transition-colors">
                記事一覧
              </Link>
              <Link href="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                よくある質問
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex space-x-2 text-sm text-blue-600/80">
            <Link href="/" className="hover:text-blue-700">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-blue-700">
              記事一覧
            </Link>
            <span>/</span>
            <span className="text-blue-900">出張・旅行向け</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <i className="ri-suitcase-3-line" />
              身軽に移動してWiFi迷子ゼロへ
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              店長が出張・旅行向けに推すモバイルWiFi3選
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              「移動が多くて毎回レンタルするのが面倒」「海外でも同じ端末を使いたい」。そんな声に応えるため、受け取りや返却の手間が少なく、現場で使いやすいプランを厳選しました。
            </p>
            <LastUpdated date={publishedDate} className="mt-6" />
          </header>

          <ConversionCTA
           title="行き先と日程を入力してプラン候補を絞り込む"
           description="出張先・滞在日数・必要データ量を整理しながら、下のプラン一覧で最適なサービスを比較できます。"
           primary={{ label: 'プラン一覧を確認', href: '/articles/purpose/business-trip#plan-list' }}
           secondary={{ label: '海外対応プランを見る', href: '/articles/providers/zeus-wifi' }}
            badges={[
              { icon: '📦', label: '空港受け取り手配可' },
              { icon: '🛂', label: '海外料金シミュレーション付き' },
            ]}
            variant="blue"
            className="mb-12"
          />

          <section id="plan-list" className="mb-12 grid gap-6 md:grid-cols-3">
            {recommendedPlans.map((plan) => (
              <div key={plan.name} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h2>
                <p className="text-sm text-blue-600 font-semibold mb-2">{plan.price}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{plan.reason}</p>
                <Link
                  href={plan.link}
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                >
                  詳細を見る
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            ))}
          </section>

          <section id="use-cases" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">こんな用途で選ばれています</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {travelUseCases.map((useCase) => (
                <div key={useCase.title} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-2">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          <ConversionCTA
           title="スーツケース一つで移動する方向けセルフ手配ガイド"
           description="受け渡し場所・返却方法・リマインド設定など、移動が多い方向けの段取りをチェックリスト化しました。"
           primary={{ label: '手配の段取りを確認', href: '/articles/purpose/business-trip#use-cases' }}
           secondary={{ label: '代理受け取りのコツを見る', href: '/articles/international-wifi' }}
            badges={[
              { icon: '⏱️', label: '配送状況のリアルタイム共有' },
            ]}
            variant="orange"
            className="mb-12"
          />

          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">渡航先ごとの注意ポイント</h2>
            <div className="space-y-6">
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">アジア（韓国・台湾・シンガポールなど）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  現地キャリアとのローミングが強く、追加チャージでも速度が安定しやすい地域です。念のためeSIMとの併用も検討しましょう。
                </p>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">北米・ヨーロッパ</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  電波の仕様が異なるため、該当地域向けの周波数に対応した端末か確認が必要です。店頭では出発前テストを実施できます。
                </p>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">国内の山間部・地方都市</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  電波が弱いエリアではホームルーター型を持ち込むケースも。出張先の住所を教えていただければピンポイントで通信状況を共有します。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    {faq.question}
                    <i className="ri-arrow-down-s-line text-xl text-blue-300" />
                  </summary>
                  <p className="text-sm text-gray-700 leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">関連リンク</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/articles/purpose/hitorigurashi" className="group bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">一人暮らしで使うなら？</h3>
                <p className="text-gray-600">固定費を抑えるコツと併用術をチェック。</p>
              </Link>
              <Link href="/articles/providers/gmo-wimax" className="group bg-white rounded-xl p-5 border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">キャッシュバック活用で安く使う</h3>
                <p className="text-gray-600">長期出張後に光回線へ切り替えるケースも紹介しています。</p>
              </Link>
            </div>
          </section>

          <ConversionCTA
           title="渡航スケジュールに合わせたWiFi手配をセルフで計画"
           description="渡航日程と必要な端末を一覧にまとめるテンプレートを使えば、社内稟議や見積依頼の準備がスムーズになります。"
           primary={{ label: '計画テンプレートを見る', href: '/articles/no-contract-wifi' }}
           secondary={{ label: 'スケジュール調整のFAQを見る', href: '/articles/purpose/business-trip#faq' }}
           badges={[
             { icon: '🧾', label: '稟議書テンプレート進呈' },
           ]}
            variant="slate"
            note="※法人契約の相談も受け付けています。"
          />
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <i className="ri-flight-takeoff-line text-white text-lg" />
            </div>
            <h3 className="text-xl font-bold">モバイルWiFi比較ナビ</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">出張・旅行の通信手配は年間800件以上サポートしています。</p>
          <Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
