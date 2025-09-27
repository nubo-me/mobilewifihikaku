import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
  title: '一人暮らしにおすすめのモバイルWiFi | 店長が選ぶ3プラン',
  description:
    '一人暮らしの通信費を抑えたい方向けに、店長が実際の相談データから選んだモバイルWiFiプランを紹介。光回線との使い分けや節約術も掲載しています。',
};

const publishedDate = '2025-09-27';

const recommendedPlans = [
  {
    name: 'Mugen WiFi（縛りなしプラン）',
    price: '月額3,718円 / 100GB',
    reason: '工事不要で即日発送。引っ越し予定があっても違約金ゼロ。',
    link: '/articles/providers/mugen-wifi',
  },
  {
    name: 'Broad WiMAX（5G 2年プラン）',
    price: '月額3,883円〜 / 無制限',
    reason: '動画視聴が多い方に人気。キャッシュバックで実質コストを下げやすい。',
    link: '/articles/providers/broad-wimax',
  },
  {
    name: 'ZEUS WiFi（縛りなし100GB）',
    price: '月額2,980円〜 / 100GB',
    reason: '単身赴任や短期滞在のサブ回線に。海外チャージも可能。',
    link: '/articles/providers/zeus-wifi',
  },
];

const monthlyBudgetTips = [
  'スマホのギガと合算して月間データ量を把握。動画はモバイルWiFiに集約してスマホプランを下げる。',
  '光回線を契約する前に、モバイルWiFiで在宅ワークに十分な速度が出るかテストする。',
  '電気・ガスとのセット割を一度はシミュレーションしておく。固定回線のほうが安くなるケースもある。',
  'モバイルWiFiを解約する際は端末返却が必要か事前確認。返送費用も予算に入れておく。',
];

const faqs = [
  {
    question: '在宅ワークに100GBで足りますか？',
    answer:
      'Web会議中心であれば月間80GB前後で収まるケースが多いですが、動画編集や大容量ファイル共有がある場合は無制限タイプを推奨しています。',
  },
  {
    question: '一人暮らしで光回線とモバイルWiFiはどちらが良い？',
    answer:
      'オンラインゲームや大型ダウンロードが多い場合は光回線、引っ越し頻度が高い・設置工事が難しい場合はモバイルWiFiが向いています。店頭では料金と用途のバランスをヒアリングして提案しています。',
  },
  {
    question: '電波が入りにくい部屋での対策は？',
    answer:
      '窓際やベランダ付近で受信感度を改善できるほか、WiMAXならホームルーターとモバイルルーターを使い分ける方法もあります。無料レンタルでテストすることも可能です。',
  },
];

export default function HitorigurashiPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '一人暮らし向けモバイルWiFiおすすめ3選',
    description: '一人暮らしの通信費を抑えるモバイルWiFiの選び方を店舗スタッフが解説。',
    datePublished: publishedDate,
    dateModified: publishedDate,
    inLanguage: 'ja-JP',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://mobilewifihikaku.web.app/articles/purpose/hitorigurashi',
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
        name: '一人暮らしにおすすめ',
        item: 'https://mobilewifihikaku.web.app/articles/purpose/hitorigurashi',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-router-line text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-gray-800">モバイルWiFi比較ナビ</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
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

      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-blue-600">
              記事一覧
            </Link>
            <span>/</span>
            <span className="text-gray-800">一人暮らしにおすすめ</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <i className="ri-home-smile-line" />
              一人暮らしの通信費を月4,000円以内に
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              店頭相談で人気の一人暮らし向けモバイルWiFi3選
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              毎月の通信費を抑えたい、工事ができない物件でネットを使いたい。
              そんな一人暮らしの方に向けて、店舗で実際に紹介しているプランを予算別にまとめました。
            </p>
            <LastUpdated date={publishedDate} className="mt-6" />
          </header>

          <ConversionCTA
           title="生活スタイル別のセルフ診断シート"
           description="動画視聴時間や在宅勤務の有無を整理できるチェックリストで、最適なプランを自分で選びやすくなります。"
           primary={{ label: '診断ガイドを読む', href: '/articles/beginner-guide' }}
           secondary={{ label: '16社比較表で予算チェック', href: '/#comparison' }}
            badges={[
              { icon: '🧾', label: '通信費の見える化シート進呈' },
              { icon: '📦', label: '即日受取在庫もご案内' },
            ]}
            variant="orange"
            className="mb-12"
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">店長おすすめプラン比較表</h2>
            <div className="space-y-4">
              {recommendedPlans.map((plan) => (
                <div key={plan.name} className="bg-white border border-emerald-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-emerald-600 font-semibold">{plan.price}</p>
                    <p className="text-gray-700 mt-2">{plan.reason}</p>
                  </div>
                  <Link
                    href={plan.link}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                  >
                    詳細を見る
                    <i className="ri-arrow-right-up-line" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">一人暮らしの通信費を最適化する4ステップ</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>スマホのデータ使用量を確認し、モバイルWiFi側でどこまで肩代わりできるか計算する。</li>
              <li>賃貸契約前なら工事可否を管理会社に確認。工事不可ならモバイルWiFi一択になるため早めに在庫を確保する。</li>
              <li>週末だけ動画視聴が多いなら、スマホプランとモバイルWiFiのデータ枠を使い分ける。</li>
              <li>契約更新月と引っ越し予定の時期を並べて、違約金が発生しないタイミングで見直す。</li>
            </ol>
          </section>

          <ConversionCTA
           title="引っ越し予定のある方向けセルフチェック"
           description="現住所と新居の通信環境を確認する手順をまとめ、つながりやすいプランを自分でピックアップできるようにしました。"
           primary={{ label: '引っ越し準備のコツを見る', href: '/articles/purpose/business-trip' }}
           secondary={{ label: '短期利用プランを見る', href: '/articles/providers/zeus-wifi' }}
            badges={[
              { icon: '🚚', label: '解約金シミュレーション付き' },
            ]}
            variant="blue"
            className="mb-12"
          />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">毎月の通信費を抑える小ワザ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {monthlyBudgetTips.map((tip, index) => (
                <div key={tip} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    {faq.question}
                    <i className="ri-arrow-down-s-line text-xl text-gray-400" />
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gray-100 border border-gray-200 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">ライフスタイル別の関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/articles/purpose/game" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600">ゲーム中心の生活なら？</h3>
                <p className="text-sm text-gray-600">低遅延を重視する場合の選び方をまとめています。</p>
              </Link>
              <Link href="/articles/purpose/business-trip" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600">出張・旅行が多い方へ</h3>
                <p className="text-sm text-gray-600">短期利用や海外での使い方を知りたい方はこちら。</p>
              </Link>
            </div>
          </section>

          <ConversionCTA
           title="一人暮らしの通信費をセルフで最適化"
           description="スマホ料金とモバイルWiFiの組み合わせを見直すシミュレーション手順を公開しています。"
           primary={{ label: '節約シミュレーターを使う', href: '/articles/data-capacity-comparison' }}
           secondary={{ label: '節約のコツを読む', href: '/articles/beginner-guide' }}
            badges={[
              { icon: '💡', label: '節約シミュレーション付き' },
            ]}
            variant="slate"
            note="※営業時間内に順次ご返信いたします。"
          />
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-router-line text-white text-lg" />
            </div>
            <h3 className="text-xl font-bold">モバイルWiFi比較ナビ</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">一人暮らしの通信費相談は年間1,200件以上対応しています。</p>
          <Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
