import Link from 'next/link';
import { Metadata } from 'next';

import { ConversionCTA } from '@/app/components/ConversionCTA';
import { LastUpdated } from '@/app/components/LastUpdated';

export const metadata: Metadata = {
	title: 'GMOとくとくBB WiMAXを店長が徹底解説 | モバイルWiFi比較ナビ',
	description:
		'GMOとくとくBB WiMAXのキャッシュバック受け取り方法、端末選び、サポート窓口の活用術を販売店店長が詳しく解説。申込時に失敗しないステップとリアルな口コミを紹介します。',
};

const publishedDate = '2025-09-27';

const planHighlights = [
	{ label: 'キャッシュバック金額', value: '最大55,000円（時期により変動）' },
	{ label: '月額料金', value: '初月1,375円 / 2か月目以降 3,872円〜' },
	{ label: '選べる端末', value: 'Galaxy 5G Mobile Wi-Fiなど最新機種' },
	{ label: '申込方法', value: 'Webのみ（店舗サポートあり）' },
];

const checklist = [
	'キャッシュバックメールの送信元ドメインと受信タイミングをスタッフが共有',
	'住所変更や口座情報の登録が必要なタイミングを申込書でメモ',
	'クレードルの在庫状況や発送日を事前に確認し、テレワークに備える',
	'解約違約金と機種代残債がかからないように更新月までのスケジュールを作成',
];

const faqs = [
	{
		question: 'キャッシュバックメールはどこに届きますか？',
		answer:
			'申込時に登録したGMOメールアドレス宛に届きます。普段使いのメールではないため、店頭ではその場でログイン方法と転送設定をお伝えしています。',
	},
		{
		question: '口座登録を忘れた場合はどうなりますか？',
		answer:
			'メール到着後、期限内に口座情報を登録しないとキャッシュバックが無効になります。スタッフがリマインドメールの設定方法もご案内しています。',
	},
	{
		question: '途中でプラン変更はできますか？',
		answer:
			'5Gプラン内でのデータ容量変更は可能ですが、再契約扱いになるケースもあります。後から縛りなしプランへ切り替える場合は事前にご相談ください。',
	},
];

export default function GmoWimaxPage() {
	const articleLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: 'GMOとくとくBB WiMAX 店長レビュー',
		description:
			'GMOとくとくBB WiMAXのキャッシュバック活用術と申込手順を店舗スタッフの視点で詳細に解説。',
		datePublished: publishedDate,
		dateModified: publishedDate,
		inLanguage: 'ja-JP',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://mobilewifihikaku.web.app/articles/providers/gmo-wimax',
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
				name: 'GMOとくとくBB WiMAX 店長レビュー',
				item: 'https://mobilewifihikaku.web.app/articles/providers/gmo-wimax',
			},
		],
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
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
						<span className="text-gray-800">GMOとくとくBB WiMAX 店長レビュー</span>
					</nav>
				</div>
			</div>

			<main className="container mx-auto px-4 py-12">
				<article className="max-w-4xl mx-auto">
					<header className="mb-10">
						<div className="flex flex-wrap gap-2 mb-4">
							<span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
								<i className="ri-piggy-bank-line" />
								高額キャッシュバック狙いの定番
							</span>
							<span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
								<i className="ri-timer-line" />
								申請期限要注意
							</span>
						</div>
						<h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
							GMOとくとくBB WiMAXのキャッシュバックを<br className="hidden md:block" />取りこぼさないための店長チェックリスト
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							GMOとくとくBB WiMAXは業界トップクラスのキャッシュバックが魅力ですが、
							申請タイミングを逃すと受取ができません。店舗で実際に案内している手順と注意点をまとめました。
						</p>
						<LastUpdated date={publishedDate} className="mt-6" />
					</header>

					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{planHighlights.map((item) => (
							<div key={item.label} className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
								<p className="text-sm font-semibold text-amber-500 mb-2">{item.label}</p>
								<p className="text-gray-800 text-lg font-bold leading-relaxed">{item.value}</p>
							</div>
						))}
					</div>

					<ConversionCTA
						title="キャッシュバック申請スケジュールを自分で組み立てる"
						description="メール到着予定日や申請期限を時系列で整理するテンプレートを活用し、受取忘れを防ぎましょう。"
						primary={{ label: '手続きの流れを見る', href: '/articles/providers/gmo-wimax#timeline' }}
						secondary={{ label: 'Broad WiMAXとも比較する', href: '/articles/providers/broad-wimax' }}
						badges={[
							{ icon: '📨', label: '申請メールをその場で確認' },
							{ icon: '⏳', label: '期限リマインダー設定' },
						]}
						variant="orange"
						className="mb-12"
						note="※申請期限や特典内容は予告なく変更される場合があります。必ず公式発表をご確認ください。"
					/>

					<section id="timeline" className="prose prose-lg max-w-none mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">申し込みから受取までの流れ（店頭サポート付）</h2>
						<ol className="list-decimal list-inside text-gray-700 space-y-3">
							<li>お客様のメールアドレス（GMO ID用）と受信設定を店頭で確認します。</li>
							<li>申込フォームの「特典受取口座」を仮で入力し、後から変更する場合の手順を説明します。</li>
							<li>端末発送予定日と到着予定日を共有し、在宅ワークなど利用開始日を調整します。</li>
							<li>月額料金の請求開始タイミング、解約違約金の発生条件を一覧表でお渡しします。</li>
						</ol>
					</section>

					<section id="pitfalls" className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">店長がチェックするキャッシュバックの落とし穴</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{checklist.map((item, index) => (
								<div key={item} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
											{index + 1}
										</div>
										<p className="text-gray-700 leading-relaxed">{item}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<ConversionCTA
						title="キャッシュバック受取で失敗しないためのチェックリスト"
						description="よくある取りこぼしパターンと対策を一覧で確認し、必要な書類やスケジュールをセルフチェックできます。"
						primary={{ label: 'チェックリストを確認', href: '/articles/providers/gmo-wimax#pitfalls' }}
						secondary={{ label: '料金比較一覧を見る', href: '/articles' }}
						badges={[
							{ icon: '�️', label: '必要書類チェックシート付き' },
							{ icon: '✅', label: '期限ごとのタスク整理' },
						]}
						variant="blue"
						className="mb-12"
					/>

					<section className="prose prose-lg max-w-none mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">GMOとくとくBB WiMAXが向いている人・向いていない人</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
								<h3 className="text-lg font-semibold text-emerald-700 mb-3">こんな方におすすめ</h3>
								<ul className="list-disc list-inside text-gray-700 space-y-2">
									<li>高額キャッシュバックを活用して実質費用を抑えたい</li>
									<li>メール管理やスケジュール管理が得意で、手続きを忘れない自信がある</li>
									<li>最新5G端末を選びたい、動画視聴が多い</li>
								</ul>
							</div>
							<div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
								<h3 className="text-lg font-semibold text-rose-700 mb-3">注意したいケース</h3>
								<ul className="list-disc list-inside text-gray-700 space-y-2">
									<li>キャンペーンメールの管理が苦手、または頻繁にメールを確認しない</li>
									<li>キャッシュバックよりも月額料金の安定を重視したい</li>
									<li>縛りなしプランや短期利用を想定している</li>
								</ul>
							</div>
						</div>
					</section>

					<section id="faq" className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問（店舗内ヒアリング）</h2>
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
						<h2 className="text-xl font-bold text-gray-900 mb-4">他のWiMAX系プロバイダも比較する</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<Link href="/articles/providers/mugen-wifi" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600">Mugen WiFiの長期利用レビュー</h3>
								<p className="text-sm text-gray-600">契約期間を柔軟にしたい方はクラウドSIMも検討材料になります。</p>
							</Link>
							<Link href="/articles/purpose/game" className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all">
								<h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600">ゲーム用途に強い回線選び</h3>
								<p className="text-sm text-gray-600">低遅延を最優先したいなら別プランの方が良い場合もあります。</p>
							</Link>
						</div>
					</section>

					<ConversionCTA
						title="GMOとくとくBB WiMAXの申し込み前に最終チェック"
						description="申込内容・端末選択・キャッシュバック条件を最終確認するためのチェックポイントをまとめています。"
						primary={{ label: '最終チェック項目を見る', href: '/articles/providers/gmo-wimax#faq' }}
						secondary={{ label: '16社比較表を見る', href: '/#comparison' }}
						badges={[
							{ icon: '🧾', label: '確認事項のテンプレート付き' },
						]}
						variant="slate"
					/>
				</article>
			</main>

			<footer className="bg-slate-900 text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<div className="flex items-center justify-center space-x-2 mb-4">
						<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
							<i className="ri-router-line text-white text-lg" />
						</div>
						<h3 className="text-xl font-bold">モバイルWiFi比較ナビ</h3>
					</div>
					<p className="text-gray-400 text-sm mb-4">キャッシュバックの取りこぼしを防ぐノウハウを日々更新しています。</p>
					<Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">
						ホームに戻る
					</Link>
				</div>
			</footer>
		</div>
	);
}
