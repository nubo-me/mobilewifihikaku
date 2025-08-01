import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "モバイルWiFi記事一覧 | モバイルWiFi比較ナビ",
  description: "モバイルWiFiに関する役立つ記事をまとめました。選び方、料金比較、使い方のコツなど詳しく解説します。",
  keywords: "モバイルWiFi,記事,選び方,料金比較,使い方,ガイド",
};

const articles = [
  {
    id: 1,
    title: "モバイルWiFi初心者向け完全ガイド",
    description: "はじめてモバイルWiFiを選ぶ方向けの基本知識と選び方のポイントを分かりやすく解説。料金相場、データ容量の目安、契約時の注意点まで網羅した決定版ガイドです。",
    date: "2025-01-15",
    readTime: "8分",
    category: "初心者向け",
    slug: "beginner-guide",
    tags: ["初心者", "選び方", "基本知識", "料金"],
    image: "🔰",
    featured: true
  },
  {
    id: 2,
    title: "クラウドSIMと物理SIMの違いを徹底解説",
    description: "モバイルWiFiの2つの主要なSIMタイプについて、技術的な仕組みから実測データまで詳しく比較。あなたの用途に最適なSIMタイプが分かります。",
    date: "2025-01-12",
    readTime: "7分",
    category: "技術解説",
    slug: "cloudsim-vs-physicalsim",
    tags: ["クラウドSIM", "物理SIM", "技術解説", "比較"],
    image: "⚡",
    featured: true
  },
  {
    id: 3,
    title: "データ容量別おすすめモバイルWiFi【2025年最新】",
    description: "10GB、20GB、50GB、無制限など、データ容量別におすすめのモバイルWiFiサービスをご紹介。使用量の目安と最適プランの選び方も解説します。",
    date: "2025-01-10",
    readTime: "6分",
    category: "比較・ランキング",
    slug: "data-capacity-comparison",
    tags: ["データ容量", "おすすめ", "ランキング", "プラン"],
    image: "📊",
    featured: false
  },
  {
    id: 4,
    title: "モバイルWiFiの通信速度を向上させる方法",
    description: "モバイルWiFiの通信速度が遅い時の対処法と、より快適に使うためのコツを詳しく解説。設置場所の最適化から端末設定まで実践的なテクニックをご紹介。",
    date: "2025-01-08",
    readTime: "5分",
    category: "使い方・Tips",
    slug: "speed-improvement-tips",
    tags: ["速度向上", "設定", "Tips", "トラブル解決"],
    image: "🚀",
    featured: false
  },
  {
    id: 5,
    title: "契約期間縛りなしモバイルWiFi徹底比較",
    description: "解約金なしでいつでも解約できる縛りなしモバイルWiFiを徹底比較。短期利用や初回利用におすすめのサービスを詳しくご紹介します。",
    date: "2025-01-05",
    readTime: "6分",
    category: "比較・ランキング",
    slug: "no-contract-wifi",
    tags: ["縛りなし", "短期利用", "解約金なし", "比較"],
    image: "🔓",
    featured: false
  },
  {
    id: 6,
    title: "海外で使えるモバイルWiFi完全ガイド",
    description: "海外旅行や出張で使えるモバイルWiFiの選び方と注意点を解説。国別の料金相場、データ容量の目安、現地での設定方法まで詳しくご紹介。",
    date: "2025-01-03",
    readTime: "9分",
    category: "海外利用",
    slug: "international-wifi",
    tags: ["海外利用", "旅行", "出張", "国際ローミング"],
    image: "🌍",
    featured: false
  }
];

const categories = [
  { name: "すべて", slug: "all", count: 6 },
  { name: "初心者向け", slug: "beginner", count: 1 },
  { name: "技術解説", slug: "technical", count: 1 },
  { name: "比較・ランキング", slug: "comparison", count: 2 },
  { name: "使い方・Tips", slug: "tips", count: 1 },
  { name: "海外利用", slug: "international", count: 1 }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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
              <Link href="/articles" className="text-blue-600 font-semibold">記事一覧</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              モバイルWiFi<br />
              <span className="text-blue-200">お役立ち記事</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              選び方から使い方まで、モバイルWiFiに関する情報をわかりやすく解説
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">カテゴリー別記事</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">おすすめ記事</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {articles.filter(article => article.featured).map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{article.image}</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <Link 
                        href={`/articles/${article.slug}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        続きを読む
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">全記事一覧</h2>
            <div className="space-y-6">
              {articles.map((article) => (
                <article key={article.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{article.image}</span>
                      <div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="ml-3 text-gray-500 text-sm">{article.readTime}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                    >
                      続きを読む <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">最新記事をお見逃しなく</h2>
          <p className="text-xl mb-8 text-green-100">
            モバイルWiFiに関する最新情報や役立つTipsを定期的に更新しています
          </p>
          <Link 
            href="/"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            サービス比較を見る
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 モバイルWiFi比較ナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
