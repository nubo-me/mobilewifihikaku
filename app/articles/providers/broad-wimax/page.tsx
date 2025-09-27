import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
	title: 'Broad WiMAXを販売店店長が徹底レビュー | モバイルWiFi比較ナビ',
	description:
		'Broad WiMAXの料金プラン、キャンペーン、店舗サポート体制を店長目線で解説。キャッシュバックの受け取り方や端末選びのコツ、乗り換え時の注意点もまとめています。',
};

const publishedDate = '2025-09-27';

const planHighlights = [
	{ label: '月額料金', value: '3,883円〜（初月割引あり）' },
	{ label: 'キャンペーン', value: '最大49,000円キャッシュバック / 他社違約金負担あり' },
	{ label: '対応端末', value: '5G対応ルーター5機種から選択可能' },
	{ label: '契約期間', value: 'WiMAX +5G 2年プラン / 縛りなしプランも選択可' },
];

const supportChecklist = [
	'店頭即日受け渡し：在庫があればその場で開通までサポート',
	'初期設定代行：電波チェックと端末初期化までスタッフが対応',
	'乗り換え相談：ドコモ光や他社ポケットWiFiからの乗り換え手順',
	'キャンペーン申請サポート：キャッシュバックのメール手続きをその場で確認',
];

const faqs = [
	{
		question: 'キャッシュバックはいつ受け取れますか？',
		answer:
			'Broad WiMAXのキャッシュバックは利用開始月を含む11か月目に指定口座へ振り込まれます。申請メールが届いたら7日以内に回答が必要なため、その場で店頭スタッフと一緒に操作するのがおすすめです。',
	},
	{
		question: '解約違約金負担はどの範囲まで対応していますか？',
		answer:
			'他社ポケットWiFi・ホームルーターからの乗り換えで最大20,000円まで還元されます。光回線の解約金は対象外なので注意が必要です。',
	},
	{
		question: '5G端末はエリア外でも使えますか？',
		answer:
			'5Gのエリア外でも4G/4G LTEに自動で切り替わるため利用可能です。店頭では普段利用するエリアのピンポイントエリア判定をお手伝いしています。',
	},
];

export default function BroadWimaxPage() {
	const articleLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: 'Broad WiMAXを販売店店長が徹底レビュー',
		description:
			'Broad WiMAXの料金プラン、キャンペーン、サポート体制を販売店店長の視点で詳しく解説。',
		datePublished: publishedDate,
		dateModified: publishedDate,
		inLanguage: 'ja-JP',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://mobilewifihikaku.web.app/articles/providers/broad-wimax',
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
				name: 'Broad WiMAX 店長レビュー',
				item: 'https://mobilewifihikaku.web.app/articles/providers/broad-wimax',
			},
		],
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

			<header className="bg-white shadow-sm">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<i className="ri-router-line text-white text-lg" />
							</div>
							<h1 className="text-xl font-bold text-gray-800">モバイルWiFi比較ナビ</h1>
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
						<span className="text-gray-800">Broad WiMAX 店長レビュー</span>
					</nav>
				</div>
			</div>

			<main className="container mx-auto px-4 py-12">
				<article className="max-w-4xl mx-auto">
					<header className="mb-8">
						<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
							<i className="ri-award-line" />
							店舗相談件数トップ3の人気プラン
						</div>
						<h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
							Broad WiMAXを店長が選ぶ理由と<br className="hidden md:block" />契約前に確認してほしいポイント
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							「5Gの速度を実感したい」「キャッシュバックを取りこぼしたくない」という声に応えるため、
							店頭で実際に案内している確認ポイントと、お客様から多かった質問をまとめました。
						</p>
						<LastUpdated date={publishedDate} className="mt-6" />
					</header>

					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{planHighlights.map((item) => (
							<div key={item.label} className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
								<p className="text-sm font-semibold text-blue-500 mb-2">{item.label}</p>
								<p className="text-gray-800 text-lg font-bold leading-relaxed">{item.value}</p>
							</div>
						))}
					</div>

					<ConversionCTA
						title="最新キャンペーンのセルフチェックリスト"
						description="キャッシュバックの申請タイミングや必要書類をチェックリスト化。ご自身で見落としがないか確認しながら申し込み準備ができます。"
						primary={{ label: '申請手順を確認する', href: '/articles/beginner-guide' }}
						secondary={{ label: '16社比較表で他社も検討する', href: '/#comparison' }}
						badges={[
							{ icon: '📅', label: '最短当日受け渡し可' },
							{ icon: '💸', label: 'キャッシュバック申請代行' },
						]}
						note="※最新の適用条件は公式サイトで必ずご確認ください。"
						className="mb-12"
					/>

					<section className="prose prose-lg max-w-none mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">Broad WiMAXをおすすめする3つの理由</h2>
						<ol className="list-decimal list-inside text-gray-700 space-y-3">
							<li>
								<strong>通信速度とエリアのバランスが高水準。</strong> 5G対応端末での実測でも下り150Mbps前後を記録するケースが多く、
								地方エリアでも4G LTEに自動切り替えされるため、出張の多いお客様にも安心してご案内できます。
							</li>
							<li>
								<strong>キャンペーン申請がシンプル。</strong> 申請メールが届くタイミングが決まっているため、スタッフと一緒にカレンダー登録しておけば取りこぼしがありません。
							</li>
							<li>
								<strong>サポートオプションが柔軟。</strong> 端末補償だけでなく、乗り換え時の違約金負担も対象になるので、他サービスからの切り替え相談がしやすいです。
							</li>
						</ol>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">店頭で実施しているサポート内容</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{supportChecklist.map((item, index) => (
								<div key={item} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
											{index + 1}
										</div>
										<p className="text-gray-700 leading-relaxed">{item}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<ConversionCTA
						title="Broad WiMAXが向いているか30秒でセルフ診断"
						description="現在の利用環境（在宅ワーク・外出・動画視聴）を自己診断チャートに沿って整理すれば、Broad WiMAXが最適かどうかを自分で判断できます。"
						primary={{ label: 'セルフ診断シートを使う', href: '/articles/beginner-guide' }}
						secondary={{ label: '他社WiMAXプランも比較する', href: '/articles/providers/gmo-wimax' }}
						badges={[
							{ icon: '📝', label: 'ヒアリングシート無料' },
							{ icon: '⏱️', label: '最短10分で診断完了' },
						]}
						variant="blue"
						note="※他社の方が合う場合はその場で正直にお伝えします。無理な勧誘は行いません。"
						className="mb-12"
					/>

					<section className="prose prose-lg max-w-none mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">乗り換えを検討する際の注意点</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							他社からBroad WiMAXに乗り換える場合、<strong>前契約の解約日</strong>と<strong>Broad WiMAXの利用開始日</strong>をできるだけ近づけることが重要です。
							料金の二重支払い期間を短縮できるほか、キャッシュバックの対象月もズレにくくなります。
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>現在利用中のプロバイダに解約違約金が発生する日付を確認する。</li>
							<li>Broad WiMAXの開通日が決まり次第、端末受け渡し日の予約を入れる。</li>
							<li>キャッシュバックの申請メールは迷惑メールフォルダに振り分けられないようドメイン受信設定を行う。</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問（店舗での実例）</h2>
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
						<h2 className="text-xl font-bold text-gray-900 mb-4">関連記事で他社の選択肢もチェック</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<Link href="/articles/providers/zeus-wifi" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">ZEUS WiFiは短期利用に強い？</h3>
								<p className="text-sm text-gray-600">海外利用や縛りなしプランを重視する方はこちらを比較候補に。</p>
							</Link>
							<Link href="/articles/purpose/hitorigurashi" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">一人暮らしの通信費を抑えるコツ</h3>
								<p className="text-sm text-gray-600">月額コスト優先の場合は他のクラウドSIMも候補に入ります。</p>
							</Link>
						</div>
					</section>

					<ConversionCTA
						title="Broad WiMAXの最新キャンペーンを確認して申し込む"
						description="キャンペーン在庫や端末カラーの取り置き条件をまとめた最新記事をチェックし、ご自身のスケジュールに合わせて申し込みましょう。"
						primary={{ label: '最新記事を読む', href: '/articles/2025-ranking' }}
						secondary={{ label: '関連記事をもっと見る', href: '/articles' }}
						badges={[
							{ icon: '☎️', label: '電話・ビデオ通話どちらも対応' },
						]}
						variant="slate"
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
					<p className="text-gray-400 text-sm mb-4">現役店舗スタッフが本音でおすすめするモバイルWi-Fi比較サイトです。</p>
					<Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">
						ホームに戻る
					</Link>
				</div>
			</footer>
		</div>
	);
}
