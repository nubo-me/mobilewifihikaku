import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
	title: 'ZEUS WiFiを店長が選ぶ理由 | モバイルWiFi比較ナビ',
	description:
		'ZEUS WiFiの料金プラン、海外利用、解約金の有無を店舗スタッフが解説。短期利用から長期契約まで、相談現場で多い質問と回答をまとめました。',
};

const publishedDate = '2025-09-27';

const planHighlights = [
	{ label: '月額料金', value: '980円〜（20GB） / 100GBでも2,980円〜' },
	{ label: '契約期間', value: '縛りあり/なしから選択可能（最短1か月）' },
	{ label: '海外利用', value: '106カ国対応・アプリで即チャージ' },
	{ label: '端末', value: 'クラウドSIM端末（チャージプランは自動補充対応）' },
];

const useCases = [
	{
		icon: '🧳',
		title: '出張が多いビジネスユーザー',
		detail: '海外ローミングより安く、必要な日数だけチャージできるので経費精算が楽になります。',
	},
	{
		icon: '🎓',
		title: '留学前後の短期利用',
		detail: '帰国後の一時的な利用や、住居が決まるまでの仮回線としても活躍。端末返却が簡単です。',
	},
	{
		icon: '🏡',
		title: '引っ越し直後の仮回線',
		detail: '光回線が開通するまでのつなぎとして1〜2か月だけ契約するケースが増えています。',
	},
];

const faqs = [
	{
		question: '海外で利用する際の手続きは必要ですか？',
		answer:
			'専用アプリから行き先の国を選び、必要なデータ容量をチャージするだけです。店頭では出発前に端末のローミング設定とチャージ手順を一緒に確認しています。',
	},
	{
		question: '短期プランでも端末補償は付けられますか？',
		answer:
			'月額プラン・チャージプランともに端末補償オプションが用意されています。海外での故障も対象なので出張用途でも安心です。',
	},
	{
		question: '解約時の違約金は発生しますか？',
		answer:
			'縛りなしプランの場合は解約金0円、縛りありプランは契約残月によって上限料が決まっています。契約前にどちらが総額で安いかシミュレーションを行います。',
	},
];

export default function ZeusWifiPage() {
	const articleLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: 'ZEUS WiFi 店長レビュー',
		description: 'ZEUS WiFiの海外利用や短期契約の使い勝手を店舗スタッフが詳しく解説。',
		datePublished: publishedDate,
		dateModified: publishedDate,
		inLanguage: 'ja-JP',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://mobilewifihikaku.web.app/articles/providers/zeus-wifi',
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
				name: 'ZEUS WiFi 店長レビュー',
				item: 'https://mobilewifihikaku.web.app/articles/providers/zeus-wifi',
			},
		],
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
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
						<span className="text-gray-800">ZEUS WiFi 店長レビュー</span>
					</nav>
				</div>
			</div>

			<main className="container mx-auto px-4 py-12">
				<article className="max-w-4xl mx-auto">
					<header className="mb-10">
						<div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
							<i className="ri-flight-takeoff-line" />
							海外渡航・短期利用の定番
						</div>
						<h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
							ZEUS WiFiはこんな人にフィットします<br className="hidden md:block" />店長が伝えている活用術
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							在庫状況やチャージ金額の質問が多いZEUS WiFi。店舗で案内している最適な契約パターンと、
							よくある誤解を整理しました。
						</p>
						<LastUpdated date={publishedDate} className="mt-6" />
					</header>

					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{planHighlights.map((item) => (
							<div key={item.label} className="bg-white border border-indigo-100 rounded-xl p-6 shadow-sm">
								<p className="text-sm font-semibold text-indigo-500 mb-2">{item.label}</p>
								<p className="text-gray-800 text-lg font-bold leading-relaxed">{item.value}</p>
							</div>
						))}
					</div>

					<ConversionCTA
						title="渡航予定と利用期間をもとにプランをセルフ診断"
						description="渡航先・滞在日数・必要データ量を整理しながら、チャージプランと定額プランのどちらが合うか比較表で確認できます。"
						primary={{ label: 'プラン比較表を見る', href: '/articles/providers/zeus-wifi#plan-comparison' }}
						secondary={{ label: '短期利用向けプラン一覧を見る', href: '/articles/purpose/business-trip' }}
						badges={[
							{ icon: '🌐', label: '海外106カ国対応' },
							{ icon: '💳', label: '法人請求書払い相談可' },
						]}
						variant="orange"
						className="mb-12"
					/>

					<section className="grid md:grid-cols-3 gap-6 mb-12">
						{useCases.map((useCase) => (
							<div key={useCase.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
								<div className="flex items-center gap-3 mb-4">
									<span className="text-3xl">{useCase.icon}</span>
									<h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
								</div>
								<p className="text-gray-700 leading-relaxed">{useCase.detail}</p>
							</div>
						))}
					</section>

					<section id="plan-comparison" className="prose prose-lg max-w-none mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">ZEUS WiFiの3つの契約パターンを比較</h2>
						<table className="w-full border border-gray-200 text-sm">
							<thead>
								<tr className="bg-indigo-600 text-white">
									<th className="p-3 text-left">項目</th>
									<th className="p-3 text-left">縛りなしプラン</th>
									<th className="p-3 text-left">縛りありプラン</th>
									<th className="p-3 text-left">チャージプラン</th>
								</tr>
							</thead>
							<tbody className="text-gray-700">
								<tr className="border-t">
									<th className="p-3 text-left bg-gray-50">初期費用</th>
									<td className="p-3">事務手数料3,300円</td>
									<td className="p-3">事務手数料3,300円</td>
									<td className="p-3">端末代金0円（チャージ残高必要）</td>
								</tr>
								<tr className="border-t">
									<th className="p-3 text-left bg-gray-50">月額料金</th>
									<td className="p-3">20GB：1,980円〜 / 100GB：3,480円〜</td>
									<td className="p-3">20GB：980円〜 / 100GB：2,958円〜</td>
									<td className="p-3">1GBあたり250円〜（国により変動）</td>
								</tr>
								<tr className="border-t">
									<th className="p-3 text-left bg-gray-50">最低利用期間</th>
									<td className="p-3">なし</td>
									<td className="p-3">2年</td>
									<td className="p-3">なし</td>
								</tr>
								<tr className="border-t">
									<th className="p-3 text-left bg-gray-50">おすすめ用途</th>
									<td className="p-3">引っ越しまでの仮回線、短期集中利用</td>
									<td className="p-3">動画視聴が多い長期利用、家族共有</td>
									<td className="p-3">海外渡航、季節限定のプロジェクト</td>
								</tr>
							</tbody>
						</table>
					</section>

					<ConversionCTA
						title="海外チャージを自分でシミュレーション"
						description="チャージの計算例や領収書発行の手順をまとめた解説で、出発前に必要な金額を把握できます。"
						primary={{ label: 'チャージ計算例を見る', href: '/articles/providers/zeus-wifi#faq' }}
						secondary={{ label: '短期レンタルの実例を見る', href: '/articles/purpose/business-trip' }}
						badges={[
							{ icon: '🧮', label: 'データ量別の費用目安' },
							{ icon: '�', label: '経費精算に使えるフォーマット' },
						]}
						variant="blue"
						className="mb-12"
					/>

					<section id="faq" className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問（店頭の実例）</h2>
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
						<h2 className="text-xl font-bold text-gray-900 mb-4">他の記事もチェック</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<Link href="/articles/providers/mugen-wifi" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">Mugen WiFi 長期利用レビュー</h3>
								<p className="text-sm text-gray-600">クラウドSIMで月額コストを抑えたい方はMugen WiFiも選択肢に。</p>
							</Link>
							<Link href="/articles/purpose/hitorigurashi" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">一人暮らし向けの通信費節約術</h3>
								<p className="text-sm text-gray-600">固定回線とポケットWiFiの使い分け方を詳しく紹介しています。</p>
							</Link>
						</div>
					</section>

					<ConversionCTA
						title="ZEUS WiFiの在庫・発送スケジュールを確認"
						description="端末カラーや追加バッテリーの在庫については、公式オンラインストアの入荷予定とFAQを参考にすることで最新情報を把握できます。"
						primary={{ label: '公式FAQをチェック', href: 'https://zeus-wifi.jp/support/faq/' }}
						secondary={{ label: '短期利用の記事を読む', href: '/articles/purpose/business-trip' }}
						badges={[
							{ icon: '�️', label: '発送目安の確認ポイント' },
						]}
						variant="slate"
						note="※在庫状況は日々変動します。公式サイトで最新の案内をご確認ください。"
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
					<p className="text-gray-400 text-sm mb-4">海外利用や短期利用のご相談もお気軽にどうぞ。</p>
					<Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">
						ホームに戻る
					</Link>
				</div>
			</footer>
		</div>
	);
}
