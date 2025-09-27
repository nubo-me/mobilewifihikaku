import type { Metadata } from "next";
import Link from "next/link";

import { ConversionCTA } from "@/app/components/ConversionCTA";

export const metadata: Metadata = {
  title: "当サイトについて | モバイルWiFi比較ナビ",
  description:
    "モバイルWiFi比較ナビの運営方針、編集フロー、情報ソース、収益化ポリシーをご紹介します。公式情報をもとに中立的な比較を目指す編集体制についてのページです。",
  alternates: { canonical: "/about" },
};

const commitments = [
  {
    title: "公式情報に基づく比較",
    description:
      "通信事業者の公式サイトや提供条件、ニュースリリースを確認し、公開情報をもとに比較表や記事を作成しています。",
    icon: "ri-file-search-line",
  },
  {
    title: "料金・キャンペーンの定期チェック",
    description:
      "料金改定やキャンペーン変更を追跡し、確認が取れた内容のみ記事へ反映します。更新日を明記し、古い情報との差分を分かりやすくする方針です。",
    icon: "ri-bar-chart-line",
  },
  {
    title: "読者目線の検証",
    description:
      "お問い合わせフォームやSNSで寄せられた質問・体験談を参考に、選び方のポイントや注意事項を改善しています。",
    icon: "ri-chat-check-line",
  },
];

const informationSources = [
  "各プロバイダの公式サイト・料金表・提供条件資料",
  "総務省や行政機関が公開する統計・届出情報",
  "販売代理店やカスタマーサポート窓口への取材で確認できた事実",
  "独自に整理した料金シミュレーション用スプレッドシート",
];

const editorialPolicy = [
  "料金・キャンペーン情報は公式サイトと販売代理店の資料をクロスチェックし、更新日を明記します。",
  "提携先からの掲載依頼でも、速度・サポートの実績が不十分なサービスは掲載を見送ります。",
  "アフィリエイトリンクには rel=&quot;sponsored nofollow&quot; を付与し、広告表記を明確にします。",
  "誤りを発見した場合は読者からの連絡を基に確認し、速やかな修正に努めます。",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <i className="ri-information-line" />
                モバイルWiFi比較ナビについて
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                中立的な比較情報でモバイルWiFi選びをサポートします
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed">
                モバイルWiFi比較ナビは、国内で提供されているモバイルWi-Fi・ホームルーターの最新情報を整理し、読者が自分に合ったサービスを選べるようにサポートする情報サイトです。公式情報を確認したうえで、料金・データ容量・サポート条件などをわかりやすくまとめることを目指しています。
              </p>
            </div>
            <div className="w-full max-w-sm bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-4">サイト基本情報</h2>
              <p className="text-2xl font-bold mb-1">モバイルWiFi比較ナビ 編集部</p>
              <p className="text-sm text-blue-100 mb-4">運営形態：オンラインで公開している情報サイト</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <i className="ri-focus-3-line text-xl" />
                  <span>取り扱い範囲：ポケット型Wi-Fi、ホームルーター、SIMプランなど国内向けサービス</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-refresh-line text-xl" />
                  <span>更新体制：公開情報を定期的に確認し、条件が変わった場合は記事を見直します。</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-customer-service-2-line text-xl" />
                  <span>お問い合わせ：ご質問や訂正のご依頼はお問い合わせフォームよりお気軽にお知らせください。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">大切にしていること</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                  <i className={item.icon} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">情報ソースと確認方法</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              {informationSources.map((source) => (
                <li key={source} className="flex items-start gap-3">
                  <i className="ri-check-line text-blue-500 text-xl" />
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">編集・検証フロー</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <ol className="list-decimal list-inside space-y-4 text-sm text-slate-700 leading-relaxed">
              <li>公式発表・代理店資料・行政データベースなど複数の一次情報を確認し、掲載可否を判断します。</li>
              <li>編集部が料金試算や比較表を作成し、データの根拠と引用元を整理します。</li>
              <li>公開前に内容を複数名でチェックし、誤解を招く表現や更新漏れがないかを確認します。</li>
              <li>公開後はお問い合わせやアクセス解析をもとに改善点を洗い出し、可能な限り速やかに修正・追記します。</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">収益化ポリシー</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>一部の記事ではアフィリエイトプログラムを利用し、成果に応じて報酬を受け取る場合があります。</p>
            <p>
              リンクには <code className="bg-slate-100 text-slate-700 px-1 py-0.5 rounded">rel=&quot;sponsored nofollow&quot;</code> を付与し、広告主から編集内容への指示は受け付けていません。
            </p>
            <p>記事内で紹介するプランは、速度・料金・サポート体制など複数の評価軸で選定しています。条件を満たさないサービスは提携を見合わせる方針です。</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">免責事項</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-sm text-slate-700 leading-relaxed space-y-3">
            <p>掲載内容の正確性には最大限努めていますが、料金・キャンペーンなどは日々変動します。最新情報は必ず公式サイトでご確認ください。</p>
            <p>当サイトの情報をもとに行った行動によって生じた損害については責任を負いかねますので、あらかじめご了承ください。</p>
            <p>誤りを発見された場合は、お手数ですが各サービスの公式窓口にて最新情報をご確認ください。</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">編集方針チェックリスト</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              {editorialPolicy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-blue-500 text-xl" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ConversionCTA
          title="最新情報の調べ方をまとめてチェック"
          description="料金改定やキャンペーンの確認手順をガイド記事に整理しています。セルフチェックにご活用ください。"
          primary={{ label: "比較表を確認する", href: "/#comparison" }}
          secondary={{ label: "記事一覧を見る", href: "/articles" }}
          badges={[
            { icon: "📊", label: "主要プランの料金早見表" },
            { icon: "🕒", label: "更新日を明記して掲載" },
          ]}
          variant="orange"
        />

        <div className="text-center text-sm text-slate-500">
          <Link href="/" className="text-blue-600 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
