import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'クラウドSIM vs 物理SIM 徹底比較 | モバイルWiFi比較ナビ',
  description: 'クラウドSIMと物理SIMの違いを詳しく解説。それぞれのメリット・デメリットと選び方のポイントをご紹介します。',
};

export default function CloudSimVsPhysicalSimPage() {
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
            <span className="text-gray-800">クラウドSIM vs 物理SIM</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              クラウドSIM vs 物理SIM 徹底比較
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              クラウドSIMと物理SIMの違いを詳しく解説。それぞれのメリット・デメリットと選び方のポイントをご紹介します。
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">クラウドSIMとは？</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                クラウドSIMは、物理的なSIMカードを使わずに、クラウド上でSIM情報を管理する技術です。
                複数の通信事業者の回線を自動で選択し、最適な通信環境を提供します。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">クラウドSIMの特徴</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>複数キャリアの回線を自動選択</li>
                <li>SIMカードの交換が不要</li>
                <li>海外でも利用可能（対応国による）</li>
                <li>通信エリアが広い</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">物理SIMとは？</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                物理SIMは、従来からある小さなICチップです。
                特定の通信事業者の回線を使用し、安定した通信を提供します。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">物理SIMの特徴</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>特定キャリアの回線を使用</li>
                <li>通信速度が安定</li>
                <li>実績のある技術で信頼性が高い</li>
                <li>5G対応プランが豊富</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">比較表</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">項目</th>
                      <th className="px-4 py-3 text-center">クラウドSIM</th>
                      <th className="px-4 py-3 text-center">物理SIM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">通信エリア</td>
                      <td className="px-4 py-3 text-center text-green-600">◎ 広い</td>
                      <td className="px-4 py-3 text-center text-blue-600">○ 標準</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">通信速度</td>
                      <td className="px-4 py-3 text-center text-blue-600">○ 標準</td>
                      <td className="px-4 py-3 text-center text-green-600">◎ 高速</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">海外利用</td>
                      <td className="px-4 py-3 text-center text-green-600">◎ 対応</td>
                      <td className="px-4 py-3 text-center text-red-600">× 不可</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">5G対応</td>
                      <td className="px-4 py-3 text-center text-red-600">△ 限定的</td>
                      <td className="px-4 py-3 text-center text-green-600">◎ 豊富</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">料金</td>
                      <td className="px-4 py-3 text-center text-green-600">◎ 安い</td>
                      <td className="px-4 py-3 text-center text-blue-600">○ 標準</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">どちらを選ぶべき？</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">クラウドSIMがおすすめの人</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 通信エリアを重視する</li>
                    <li>• 海外でも利用したい</li>
                    <li>• コストを抑えたい</li>
                    <li>• 複数キャリアの安心感が欲しい</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">物理SIMがおすすめの人</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 通信速度を重視する</li>
                    <li>• 5Gを利用したい</li>
                    <li>• 安定性を重視する</li>
                    <li>• オンライン会議が多い</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">サービス比較をチェック！</h3>
                <p className="mb-6">クラウドSIMと物理SIMの両方のサービスを比較できます</p>
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