import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
  title: 'オンラインゲーム向けモバイルWiFi | 店長が教える低遅延プラン',
  description:
    'オンラインゲームに強いモバイルWiFiを店長が徹底解説。低遅延で遊ぶための環境づくりや、おすすめプランを紹介します。',
};

const publishedDate = '2025-09-27';

const latencyTips = [
  {
    title: '端末はWiFi 6 / 4x4 MIMO対応を選ぶ',
    content: '最新チップセットのWiFi端末ほど干渉に強く、Ping値が安定します。店頭では発送前に最新ファームウェアへの更新を行っています。',
  },
  {
    title: '有線LANアダプターを併用する',
    content: 'SwitchやPS5はUSB-LANアダプターを使うと応答速度が平均5〜10ms改善するケースがあります。',
  },
  {
    title: '夜間帯の混雑を回避する設定',
    content: 'ギガ放題プランでも夜間は混雑しがち。自動アップデートを日中に回すだけで夜の帯域が空き、遅延が安定します。',
  },
];

const planCards = [
  {
    name: 'Broad WiMAX ギガ放題プラス',
    latency: '平均Ping 35ms台（当店実測）',
    highlight: '無制限でFPS/TPSを遊びたい方に人気。ホームルーター乗換キャンペーンも併用可能。',
    link: '/articles/providers/broad-wimax',
  },
  {
    name: 'GMOとくとくBB WiMAX ゲーマーズ特典',
    latency: '平均Ping 40ms台（当店実測）',
    highlight: 'キャッシュバックで高性能ルーターを実質無料に。混雑時補償も選べます。',
    link: '/articles/providers/gmo-wimax',
  },
  {
    name: 'ZEUS WiFi 100GB 短期プラン',
    latency: '平均Ping 55ms台（当店実測）',
    highlight: 'イベント遠征や短期滞在でのサブ回線に。海外チャージで現地でもプレイ可。',
    link: '/articles/providers/zeus-wifi',
  },
];

const faqs = [
  {
    question: 'モバイルWiFiでFPSは不利になりませんか？',
    answer:
      '確かに光回線ほどの安定性はありませんが、Ping 40ms前後であればカジュアルマッチは十分楽しめています。大会出場レベルであれば光回線を推奨しています。',
  },
  {
    question: '通信制限は気にする必要がありますか？',
    answer:
      'オンラインゲームはデータ消費が比較的少ないですが、ライブ配信やダウンロードが多い場合は無制限タイプを選びましょう。',
  },
  {
    question: 'ゲーム機と同時にPCやスマホを接続しても大丈夫？',
    answer:
      'WiFi 6対応端末なら複数台同時接続でも速度が落ちにくいですが、夜間帯は優先順位をつけて接続するのがコツです。',
  },
];

export default function GamePage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'オンラインゲーム向けモバイルWiFi徹底ガイド',
    description: '低遅延で遊べるモバイルWiFi選びを店舗スタッフが解説。',
    datePublished: publishedDate,
    dateModified: publishedDate,
    inLanguage: 'ja-JP',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://mobilewifihikaku.web.app/articles/purpose/game',
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
        name: 'オンラインゲーム向け',
        item: 'https://mobilewifihikaku.web.app/articles/purpose/game',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="bg-slate-950/70 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
                <i className="ri-gamepad-line text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-white">モバイルWiFi比較ナビ</span>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/#comparison" className="text-slate-200 hover:text-indigo-300 transition-colors">
                比較表
              </Link>
              <Link href="/#products" className="text-slate-200 hover:text-indigo-300 transition-colors">
                サービス一覧
              </Link>
              <Link href="/articles" className="text-slate-200 hover:text-indigo-300 transition-colors">
                記事一覧
              </Link>
              <Link href="/#faq" className="text-slate-200 hover:text-indigo-300 transition-colors">
                よくある質問
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-slate-950/50 border-b border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex space-x-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-indigo-300">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-indigo-300">
              記事一覧
            </Link>
            <span>/</span>
            <span className="text-white">オンラインゲーム向け</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-5xl mx-auto">
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <i className="ri-speed-up-line" />
              平均Ping40ms以下を目指す
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-4">
              店長が教えるオンラインゲーム向けモバイルWiFiの選び方
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed">
              FPSやMMOを快適に遊びたい方向けに、端末選びから夜間帯の設定まで、店舗で実際にご案内しているノウハウをまとめました。
            </p>
            <div className="flex justify-center mt-6">
              <LastUpdated date={publishedDate} />
            </div>
          </header>

          <ConversionCTA
           title="ゲーム用途のヒアリング項目をセルフチェック"
           description="よく遊ぶタイトルや回線構成を整理しながら、下記のプラン比較と低遅延のコツを参考に最適な設定を選びましょう。"
           primary={{ label: '低遅延のコツを見る', href: '/articles/purpose/game#latency-tips' }}
           secondary={{ label: '光回線の比較記事を見る', href: '/articles/cloudsim-vs-physicalsim' }}
            badges={[
              { icon: '🎮', label: 'タイトル別推奨設定付き' },
              { icon: '📶', label: '測定アプリの使い方講座' },
            ]}
            variant="blue"
            className="mb-12"
          />

          <section id="plan-cards" className="mb-12 grid gap-6 md:grid-cols-3">
            {planCards.map((plan) => (
              <div key={plan.name} className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 backdrop-blur">
                <h2 className="text-lg font-semibold text-white mb-2">{plan.name}</h2>
                <p className="text-sm text-emerald-300 font-semibold mb-2">{plan.latency}</p>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">{plan.highlight}</p>
                <Link
                  href={plan.link}
                  className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                >
                  詳細を見る
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            ))}
          </section>

          <section id="latency-tips" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">低遅延のために押さえておきたい3つのポイント</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {latencyTips.map((tip) => (
                <div key={tip.title} className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">{tip.content}</p>
                </div>
              ))}
            </div>
          </section>

          <ConversionCTA
           title="夜間帯の通信混雑をセルフでチェック"
           description="混雑が発生しやすい時間帯の測定方法や、速度が落ちた際の切り替え手順をガイド記事にまとめています。"
           primary={{ label: '混雑度チェック手順を見る', href: '/articles/speed-improvement-tips' }}
           secondary={{ label: 'よくある質問を見る', href: '/articles/purpose/game#faq' }}
            badges={[
              { icon: '🛰️', label: '最新基地局の稼働状況' },
            ]}
            variant="orange"
            className="mb-12"
          />

          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">プレイスタイル別の推奨構成</h2>
            <div className="grid gap-6">
              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Switchやスマホでのカジュアル対戦</h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-3">
                  Ping 50ms以下であれば十分楽しめるため、モバイルWiFi単体でも問題ありません。WiFi 6対応端末＋5GHz帯で接続するのがポイントです。
                </p>
                <p className="text-sm text-slate-200">
                  プラン例：<Link href="/articles/providers/zeus-wifi" className="text-indigo-300 underline underline-offset-2">ZEUS WiFi 100GB</Link>＋スマホのデータシェアで安定。
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">PCでのFPS / TPSランクマッチ</h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-3">
                  できるだけPing 30〜40ms台を維持したいので、WiMAX回線＋有線LANアダプターの組み合わせを推奨しています。
                </p>
                <p className="text-sm text-slate-200">
                  プラン例：<Link href="/articles/providers/broad-wimax" className="text-indigo-300 underline underline-offset-2">Broad WiMAX</Link>＋USB-LANアダプター。
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">配信・動画投稿も行うクリエイター</h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-3">
                  上り通信量が増えるため、モバイルWiFiはサブ回線として位置づけ、光回線との併用を想定しましょう。遠征時のバックアップ回線として持っておくと安心です。
                </p>
                <p className="text-sm text-slate-200">
                  プラン例：<Link href="/articles/providers/gmo-wimax" className="text-indigo-300 underline underline-offset-2">GMOとくとくBB WiMAX</Link>＋光回線のデュアル構成。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between">
                    {faq.question}
                    <i className="ri-arrow-down-s-line text-xl text-slate-400" />
                  </summary>
                  <p className="text-sm text-slate-200 leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">関連リンク</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/articles/providers/mugen-wifi" className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-indigo-400 transition-all">
                <h3 className="font-semibold text-white mb-2 group-hover:text-indigo-300">Mugen WiFiでクラウドゲームは遊べる？</h3>
                <p className="text-slate-300">端末スペックとPing実測を紹介しています。</p>
              </Link>
              <Link href="/articles/purpose/hitorigurashi" className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-indigo-400 transition-all">
                <h3 className="font-semibold text-white mb-2 group-hover:text-indigo-300">一人暮らし向けの通信費節約術</h3>
                <p className="text-slate-300">モバイルWiFiと光回線の併用術を解説。</p>
              </Link>
            </div>
          </section>

          <ConversionCTA
           title="ゲーム環境をセルフでチューニング"
           description="ルーター設定手順や優先度の高いチェック項目をまとめたガイドを参考に、ご自身で環境を整えましょう。"
           primary={{ label: 'チューニングガイドを読む', href: '/articles/speed-improvement-tips' }}
           secondary={{ label: '人気プランランキングを見る', href: '/articles/2025-ranking' }}
           badges={[
             { icon: '⚙️', label: '設定マニュアル付き' },
             { icon: '📊', label: '実測レポート添付' },
           ]}
            variant="slate"
            note="※深夜帯の測定希望は翌営業日のご案内となります。"
          />
        </article>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <i className="ri-gamepad-line text-white text-lg" />
            </div>
            <h3 className="text-xl font-bold text-white">モバイルWiFi比較ナビ</h3>
          </div>
          <p className="text-xs text-slate-400">eスポーツチーム『NAVI KANSAI』の回線相談も担当しています。</p>
          <Link href="/" className="text-indigo-300 hover:text-indigo-200 transition-colors text-sm">
            ホームに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
