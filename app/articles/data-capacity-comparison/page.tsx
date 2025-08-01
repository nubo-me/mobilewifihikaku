import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "データ容量別おすすめモバイルWiFi【2025年最新】| 10GB・20GB・50GB・無制限プラン徹底比較",
  description: "データ容量別におすすめのモバイルWiFiサービスを徹底比較。10GB、20GB、50GB、無制限プランの料金相場、使用量目安、最適なサービス選びを詳しく解説します。",
  keywords: "モバイルWiFi,データ容量,10GB,20GB,50GB,無制限,料金比較,おすすめ,プラン",
  openGraph: {
    title: "データ容量別おすすめモバイルWiFi【2025年最新】",
    description: "データ容量別におすすめのモバイルWiFiサービスを徹底比較。使用量に応じた最適プランが見つかります。",
    type: "article",
  },
};

export default function DataCapacityComparisonPage() {
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
            <span className="text-gray-800">データ容量別おすすめモバイルWiFi</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                比較・ランキング
              </span>
              <span className="text-gray-500 text-sm">9分</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                2025年最新
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              データ容量別おすすめモバイルWiFi<br />
              <span className="text-purple-600">【2025年最新版】</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              10GB、20GB、50GB、無制限など、データ容量別におすすめのモバイルWiFiサービスを徹底比較。
              あなたの使用量に最適なプランを見つけましょう。
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">

              {/* データ使用量チェック */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-purple-600 pl-4">
                  まずは自分の使用量をチェック！
                </h2>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">📱 現在のスマホ使用量を確認する方法</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-700 mb-4 flex items-center">
                        <i className="ri-apple-line mr-2"></i>iPhone の場合
                      </h4>
                      <ol className="text-sm text-gray-700 space-y-2">
                        <li>1. 設定アプリを開く</li>
                        <li>2. 「モバイル通信」をタップ</li>
                        <li>3. 現在までの合計使用量を確認</li>
                        <li>4. 統計をリセットした日からの使用量</li>
                      </ol>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-green-700 mb-4 flex items-center">
                        <i className="ri-android-line mr-2"></i>Android の場合
                      </h4>
                      <ol className="text-sm text-gray-700 space-y-2">
                        <li>1. 設定アプリを開く</li>
                        <li>2. 「ネットワークとインターネット」</li>
                        <li>3. 「モバイルネットワーク」</li>
                        <li>4. 「データ使用量」で確認</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>💡 ポイント：</strong> 
                      Wi-Fi環境での使用量は含まれていません。モバイルWiFi利用時はこの数値の2-3倍になることを考慮しましょう。
                    </p>
                  </div>
                </div>
              </div>

              {/* 使用量別シミュレーション */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-purple-600 pl-4">
                  用途別データ使用量シミュレーション
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">📧</div>
                      <h3 className="font-semibold text-green-800">ライトユーザー</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>メール・LINE</span>
                        <span className="font-semibold">1GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Webブラウジング</span>
                        <span className="font-semibold">2GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>地図アプリ</span>
                        <span className="font-semibold">1GB/月</span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-bold text-green-700">
                          <span>合計目安</span>
                          <span>5-10GB/月</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">📱</div>
                      <h3 className="font-semibold text-blue-800">標準ユーザー</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>SNS（写真投稿）</span>
                        <span className="font-semibold">3GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>動画視聴（1時間/日）</span>
                        <span className="font-semibold">10GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>音楽ストリーミング</span>
                        <span className="font-semibold">3GB/月</span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-bold text-blue-700">
                          <span>合計目安</span>
                          <span>20-30GB/月</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">🎮</div>
                      <h3 className="font-semibold text-orange-800">アクティブユーザー</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>動画視聴（3時間/日）</span>
                        <span className="font-semibold">30GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>オンラインゲーム</span>
                        <span className="font-semibold">10GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>テレワーク・会議</span>
                        <span className="font-semibold">15GB/月</span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-bold text-orange-700">
                          <span>合計目安</span>
                          <span>50-80GB/月</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">💻</div>
                      <h3 className="font-semibold text-red-800">ヘビーユーザー</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>4K動画視聴</span>
                        <span className="font-semibold">100GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>大容量ファイル転送</span>
                        <span className="font-semibold">50GB/月</span>
                      </div>
                      <div className="flex justify-between">
                        <span>クラウドバックアップ</span>
                        <span className="font-semibold">30GB/月</span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-bold text-red-700">
                          <span>合計目安</span>
                          <span>無制限必須</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 10-20GBプラン */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-green-600 pl-4">
                  10-20GBプラン：ライトユーザー向け
                </h2>
                
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">こんな方におすすめ</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• メール・LINEが中心の方</li>
                    <li>• 動画視聴は週末のみの方</li>
                    <li>• サブ回線として利用したい方</li>
                    <li>• 月額料金を抑えたい方</li>
                  </ul>
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">サービス名</th>
                        <th className="px-6 py-4 text-center">データ容量</th>
                        <th className="px-6 py-4 text-center">月額料金</th>
                        <th className="px-6 py-4 text-center">契約期間</th>
                        <th className="px-6 py-4 text-center">特徴</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-green-50">
                        <td className="px-6 py-4 font-semibold">ZEUS WiFi</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">20GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">980円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-sm">海外利用可能</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4 font-semibold">それがだいじWi-Fi</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">20GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">1,738円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-sm">安定性重視</td>
                      </tr>
                      <tr className="border-b bg-green-50">
                        <td className="px-6 py-4 font-semibold">WiFi東京プリペイド</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">10GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">1,480円</td>
                        <td className="px-6 py-4 text-center">縛りなし</td>
                        <td className="px-6 py-4 text-sm">プリペイド式</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">💰 料金のポイント</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• 10-20GBプランは月額1,000-2,000円が相場</li>
                    <li>• 2年契約で申し込むと初年度大幅割引あり</li>
                    <li>• プリペイド式なら解約金リスクなし</li>
                    <li>• 海外利用予定があるならクラウドSIM推奨</li>
                  </ul>
                </div>
              </div>

              {/* 50GBプラン */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">
                  30-50GBプラン：標準ユーザー向け
                </h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">こんな方におすすめ</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• 毎日1-2時間動画を視聴する方</li>
                    <li>• SNSで写真・動画投稿をよくする方</li>
                    <li>• 在宅ワークでビデオ会議がある方</li>
                    <li>• バランス重視で選びたい方</li>
                  </ul>
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">サービス名</th>
                        <th className="px-6 py-4 text-center">データ容量</th>
                        <th className="px-6 py-4 text-center">月額料金</th>
                        <th className="px-6 py-4 text-center">契約期間</th>
                        <th className="px-6 py-4 text-center">特徴</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-blue-50">
                        <td className="px-6 py-4 font-semibold">ZEUS WiFi</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">40GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">2,361円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-sm">3ヶ月割引</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4 font-semibold">MONSTER MOBILE</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">50GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">2,530円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-sm">大容量特化</td>
                      </tr>
                      <tr className="border-b bg-blue-50">
                        <td className="px-6 py-4 font-semibold">クラウドWiFi</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">50GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">2,980円</td>
                        <td className="px-6 py-4 text-center">縛りなし</td>
                        <td className="px-6 py-4 text-sm">いつでも解約OK</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">📊 50GBでできること（月間）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• YouTube標準画質：約167時間</li>
                        <li>• Netflix：約71時間</li>
                        <li>• Zoom会議：約83時間</li>
                        <li>• 音楽ストリーミング：約833時間</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Instagram写真投稿：約5,000枚</li>
                        <li>• LINE通話：約2,500時間</li>
                        <li>• Webページ閲覧：約170,000ページ</li>
                        <li>• メール送受信：約100,000通</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 100GB+プラン */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-orange-600 pl-4">
                  100GB+プラン：アクティブユーザー向け
                </h2>
                
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">こんな方におすすめ</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li>• 毎日3時間以上動画を視聴する方</li>
                    <li>• オンラインゲームをよくプレイする方</li>
                    <li>• リモートワークがメインの方</li>
                    <li>• 家族でシェアして利用したい方</li>
                  </ul>
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">サービス名</th>
                        <th className="px-6 py-4 text-center">データ容量</th>
                        <th className="px-6 py-4 text-center">月額料金</th>
                        <th className="px-6 py-4 text-center">契約期間</th>
                        <th className="px-6 py-4 text-center">速度制限</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-orange-50">
                        <td className="px-6 py-4 font-semibold">ZEUS WiFi</td>
                        <td className="px-6 py-4 text-center font-bold text-orange-600">100GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">3,212円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-center text-sm">月末まで128kbps</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4 font-semibold">MONSTER MOBILE</td>
                        <td className="px-6 py-4 text-center font-bold text-orange-600">100GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">2,948円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-center text-sm">月末まで256kbps</td>
                      </tr>
                      <tr className="border-b bg-orange-50">
                        <td className="px-6 py-4 font-semibold">それがだいじWi-Fi</td>
                        <td className="px-6 py-4 text-center font-bold text-orange-600">100GB</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">3,267円</td>
                        <td className="px-6 py-4 text-center">2年</td>
                        <td className="px-6 py-4 text-center text-sm">月末まで128kbps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-orange-100 border border-orange-300 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">⚠️ 100GBプランの注意点</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• 月間100GB到達後は大幅な速度制限</li>
                    <li>• 追加データ購入は割高（550円/GB程度）</li>
                    <li>• 使い切る可能性が高い場合は無制限プラン推奨</li>
                  </ul>
                </div>
              </div>

              {/* 無制限プラン */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-red-600 pl-4">
                  無制限プラン：ヘビーユーザー向け
                </h2>
                
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">こんな方におすすめ</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• 4K動画やライブ配信をよく視聴する方</li>
                    <li>• 大容量ファイルを頻繁にやり取りする方</li>
                    <li>• 固定回線の代替として利用したい方</li>
                    <li>• データ残量を気にせず使いたい方</li>
                  </ul>
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-red-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">サービス名</th>
                        <th className="px-6 py-4 text-center">データ容量</th>
                        <th className="px-6 py-4 text-center">月額料金</th>
                        <th className="px-6 py-4 text-center">制限内容</th>
                        <th className="px-6 py-4 text-center">回線タイプ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-red-50">
                        <td className="px-6 py-4 font-semibold">RakuRakuExpress Wi-Fi</td>
                        <td className="px-6 py-4 text-center font-bold text-red-600">無制限</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">4,642円</td>
                        <td className="px-6 py-4 text-center text-sm">3日15GB制限</td>
                        <td className="px-6 py-4 text-center">クラウドSIM</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4 font-semibold">FreeMax+5G</td>
                        <td className="px-6 py-4 text-center font-bold text-red-600">無制限</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">4,800円</td>
                        <td className="px-6 py-4 text-center text-sm">完全無制限</td>
                        <td className="px-6 py-4 text-center">物理SIM(5G)</td>
                      </tr>
                      <tr className="border-b bg-red-50">
                        <td className="px-6 py-4 font-semibold">Free-Style Wi-Fi</td>
                        <td className="px-6 py-4 text-center font-bold text-red-600">無制限</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">3,980円</td>
                        <td className="px-6 py-4 text-center text-sm">1日10GB制限</td>
                        <td className="px-6 py-4 text-center">クラウドSIM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-red-100 border border-red-300 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-4">🚨 「無制限」の注意点</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-red-700">完全無制限は少数</h5>
                      <p className="text-sm text-red-600">多くのサービスは「1日○GB」「3日○GB」の制限あり</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-700">公正利用ポリシー</h5>
                      <p className="text-sm text-red-600">異常な大容量利用時は速度制限の可能性</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-700">料金は高め</h5>
                      <p className="text-sm text-red-600">月額4,000-5,000円が相場</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 選び方のまとめ */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-gray-600 pl-4">
                  データ容量選びの最終チェックポイント
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">✅ 選び方のステップ</h3>
                    <ol className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3 mt-0.5">1</span>
                        <span>現在のスマホ使用量を確認</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3 mt-0.5">2</span>
                        <span>Wi-Fi環境での追加利用分を想定</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3 mt-0.5">3</span>
                        <span>余裕を持って1.5-2倍で計算</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3 mt-0.5">4</span>
                        <span>契約期間とのバランスを考慮</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-3 mt-0.5">5</span>
                        <span>初回は少し多めのプランで様子見</span>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 プロのアドバイス</h3>
                    <div className="space-y-4 text-sm text-gray-700">
                      <div>
                        <h4 className="font-medium text-blue-700">初心者の方</h4>
                        <p>20-50GBプランから始めて、使用量を把握してから最適化</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700">節約重視の方</h4>
                        <p>10-20GBプランで、必要時のみ追加購入</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-700">安心重視の方</h4>
                        <p>使用量の2倍程度のプランで余裕を持った利用</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700">ヘビーユーザー</h4>
                        <p>無制限プランで制限内容を必ず確認</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">最適なデータ容量プランを見つけよう</h2>
          <p className="text-purple-100 mb-6">
            16種類のサービスを詳しく比較して、あなたの使用量に最適なプランを選びましょう
          </p>
          <Link 
            href="/"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            詳細比較表を見る
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 モバイルWiFi比較ナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
