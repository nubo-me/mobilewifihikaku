import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
	title: 'Mugen WiFi長期利用レビュー | モバイルWiFi比較ナビ',
	description:
		'Mugen WiFiを3年以上取り扱ってきた店長が、料金プラン・端末補償・長期割引の実態を解説。リピーターが多い理由と注意点をまとめました。',
};

const publishedDate = '2025-09-27';

const planHighlights = [
	{ label: '月額料金', value: '縛りなし：3,718円 / 2年契約：3,268円' },
	{ label: 'データ容量', value: '月間100GB（直近3日間の制限なし）' },
	{ label: '端末補償', value: 'あんしん補償プランで最大3回まで交換可' },
	{ label: '特典', value: '30日お試し全額返金保証（手数料除く）' },
];

const retentionReasons = [
	{
		title: '端末が軽くバッテリー持ちが良い',
		detail:
			'UGREEN製やU3端末は連続通信時間が約13時間。リモートワーク中も電源に縛られず利用できると好評です。',
	},
	{
		title: 'クラウドSIMでエリアを自動最適化',
		detail:
			'ドコモ・au・ソフトバンク回線を自動で選択。地方出張でも圏外になりにくく、宅配員や営業職の方に人気です。',
	},
	{
		title: 'カスタマーサポートのレスポンスが早い',
		detail:
			'チャットサポートからの問い合わせが24時間以内に返ってくるケースが多く、端末交換手続きもスムーズです。',
	},
];

const faqs = [
	{
		question: '30日お試し保証の条件は？',
		answer:
			'端末到着から30日以内に申請すれば全額返金（事務手数料・返送料除く）が可能です。店舗では申請フォームの入力方法と返却時の梱包をチェックリストにしています。',
	},
	{
		question: '速度制限はどのくらいでかかりますか？',
		answer:
			'月間100GBを超えると速度制限（概ね128kbps）が発生します。直近3日間の制限はないため、短期的な大容量通信でも安心です。',
	},
	{
		question: '端末交換の費用は？',
		answer:
			'あんしん補償プランに加入していれば故障時0円で交換できます。未加入の場合は端末代金17,600円が必要になるため、加入しておくと安心です。',
	},
];

export default function MugenWifiPage() {
	const articleLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: 'Mugen WiFi 長期利用レビュー',
		description: 'Mugen WiFiの長期利用メリットと注意点を店舗スタッフが詳しく解説。',
		datePublished: publishedDate,
		dateModified: publishedDate,
		inLanguage: 'ja-JP',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://mobilewifihikaku.web.app/articles/providers/mugen-wifi',
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
				name: 'Mugen WiFi 店長レビュー',
				item: 'https://mobilewifihikaku.web.app/articles/providers/mugen-wifi',
			},
		],
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
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
						<span className="text-gray-800">Mugen WiFi 店長レビュー</span>
					</nav>
				</div>
			</div>

			<main className="container mx-auto px-4 py-12">
				<article className="max-w-4xl mx-auto">
					<header className="mb-10">
						<div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
							<i className="ri-infinity-line" />
							長期利用リピーター多数
						</div>
						<h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
							Mugen WiFiを3年使った店長の本音レビューと<br className="hidden md:block" />長期利用を成功させるコツ
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							「クラウドSIMでどこでも繋がる」「端末が軽い」という声から人気が定着したMugen WiFi。
							再契約いただくお客様が多い理由と、実際に気をつけるべきポイントをお伝えします。
						</p>
						<LastUpdated date={publishedDate} className="mt-6" />
					</header>

					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{planHighlights.map((item) => (
							<div key={item.label} className="bg-white border border-rose-100 rounded-xl p-6 shadow-sm">
								<p className="text-sm font-semibold text-rose-500 mb-2">{item.label}</p>
								<p className="text-gray-800 text-lg font-bold leading-relaxed">{item.value}</p>
							</div>
						))}
					</div>

					<ConversionCTA
						title="30日お試し期間で確認したいポイント"
						description="電波状況や速度測定の方法をチェックリストに沿って確認し、継続可否を自分で判断しましょう。"
						primary={{ label: 'チェックリストを確認', href: '/articles/providers/mugen-wifi#operation-rules' }}
						secondary={{ label: 'Broad WiMAXも比較する', href: '/articles/providers/broad-wimax' }}
						badges={[
							{ icon: '🛡️', label: '返金保証の条件を整理' },
							{ icon: '📦', label: '端末返送の梱包チェックリスト' },
						]}
						variant="orange"
						className="mb-12"
					/>

					<section id="key-points" className="grid md:grid-cols-3 gap-6 mb-12">
						{retentionReasons.map((reason) => (
							<div key={reason.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
								<p className="text-gray-700 leading-relaxed">{reason.detail}</p>
							</div>
						))}
					</section>

					<section id="operation-rules" className="prose prose-lg max-w-none mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">長期利用で損しないための運用ルール</h2>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>速度が落ちたら端末再起動とSIMリフレッシュを試す（手順書を店頭でお渡し）。</li>
							<li>引っ越し予定がある場合は住所変更申請を10日前までに行う。</li>
							<li>端末のバッテリー寿命を延ばすため、在宅時はUSB給電で運用する。</li>
							<li>100GBを超えそうな月は早めに追加SIMをレンタルする（店頭で申込可能）。</li>
						</ul>
					</section>

					<ConversionCTA
						title="端末補償の加入有無をセルフチェック"
						description="持ち歩き頻度や利用シーンに応じた判断ポイントを一覧化。補償プランの必要性を自分で整理できます。"
						primary={{ label: '判断ポイントを見る', href: '/articles/providers/mugen-wifi#key-points' }}
						secondary={{ label: 'クラウドSIMの比較記事を見る', href: '/articles/cloudsim-vs-physicalsim' }}
						badges={[
							{ icon: '🧳', label: '外出先での落下対策' },
							{ icon: '🔋', label: 'バッテリー交換の目安' },
						]}
						variant="blue"
						className="mb-12"
					/>

					<section id="faq" className="mb-12">
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
						<h2 className="text-xl font-bold text-gray-900 mb-4">他のクラウドSIMとも比較</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<Link href="/articles/providers/zeus-wifi" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-rose-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600">ZEUS WiFiの短期利用レビュー</h3>
								<p className="text-sm text-gray-600">海外出張や短期集中利用ならこちらも候補になります。</p>
							</Link>
							<Link href="/articles/purpose/game" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-rose-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600">ゲーム用の低遅延回線を選ぶ</h3>
								<p className="text-sm text-gray-600">対戦ゲーム重視の場合は5Gホームルーターが向いているケースもあります。</p>
							</Link>
						</div>
					</section>

					<ConversionCTA
						title="Mugen WiFiの長期利用コストを試算する"
						description="契約期間や途中解約時の費用を、料金比較記事のシミュレーターを使って確認しましょう。"
						primary={{ label: 'コストシミュレーターを見る', href: '/articles/data-capacity-comparison' }}
						secondary={{ label: '長期利用の注意点を読む', href: '/articles/providers/mugen-wifi#faq' }}
						badges={[
							{ icon: '📊', label: '月額コスト比較表付き' },
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
					<p className="text-gray-400 text-sm mb-4">長期利用で失敗しないポイントをこれからも発信していきます。</p>
					<Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">
						ホームに戻る
					</Link>
				</div>
			</footer>
		</div>
	);
}
