export type ArticleMeta = {
  id: number;
  title: string;
  description: string;
  lastUpdated: string;
  readTime: string;
  category: string;
  slug: string;
  tags: string[];
  image: string;
  featured: boolean;
};

export const articlesMetadata: ArticleMeta[] = [
  {
    id: 1,
    title: "スマホのギガ不足を解決！データ節約術とモバイルWiFi活用法",
    description:
      "スマホのデータ使いすぎで月末に速度制限に悩んでいませんか？ギガ不足の原因と対策、モバイルWiFiを使った根本的解決法を詳しく解説します。",
    lastUpdated: "2025-01-20",
    readTime: "10分",
    category: "スマホ対策",
    slug: "smartphone-data-saving",
    tags: ["ギガ不足", "データ節約", "スマホ", "速度制限"],
    image: "📱",
    featured: true,
  },
  {
    id: 2,
    title: "TikTok・Instagram好き必見！SNS特化モバイルWiFi選び方",
    description:
      "TikTokやInstagramで動画を見すぎて通信制限になっていませんか？SNSヘビーユーザー向けのモバイルWiFi選びとデータ管理術をご紹介。",
    lastUpdated: "2025-01-22",
    readTime: "8分",
    category: "SNS・動画",
    slug: "sns-mobile-wifi",
    tags: ["TikTok", "Instagram", "SNS", "動画視聴"],
    image: "📸",
    featured: true,
  },
  {
    id: 3,
    title: "大学生におすすめのモバイルWiFi【2025年】安い・縛りなしプラン厳選",
    description:
      "大学生・専門学生必見！学割やキャンペーンを活用して安く使えるモバイルWiFiを厳選。オンライン授業、レポート作成、動画視聴に最適なプランをご紹介。",
    lastUpdated: "2025-01-25",
    readTime: "12分",
    category: "学生向け",
    slug: "student-mobile-wifi",
    tags: ["大学生", "学割", "オンライン授業", "安い"],
    image: "🎓",
    featured: true,
  },
  {
    id: 4,
    title: "在宅ワーク・主婦におすすめのモバイルWiFi【2025年】家庭用プラン比較",
    description:
      "在宅ワークや家事の合間に使いやすいモバイルWiFiを厳選。工事不要で即日開始、家計にやさしい料金プランをご紹介。子育て中の方にも安心です。",
    lastUpdated: "2025-01-25",
    readTime: "15分",
    category: "在宅ワーク",
    slug: "housewife-mobile-wifi",
    tags: ["在宅ワーク", "主婦", "テレワーク", "家計"],
    image: "🏡",
    featured: true,
  },
  {
    id: 5,
    title: "シニア・60代におすすめのモバイルWiFi【2025年】簡単・安心プラン",
    description:
      "60代・シニア世代でも安心して使えるモバイルWiFiを厳選。操作が簡単で、サポートが充実したプランをご紹介。孫との動画通話やネットショッピングも快適に。",
    lastUpdated: "2025-01-25",
    readTime: "10分",
    category: "シニア向け",
    slug: "senior-mobile-wifi",
    tags: ["シニア", "60代", "簡単操作", "サポート"],
    image: "👴",
    featured: true,
  },
  {
    id: 6,
    title: "【2025年最新】モバイルWiFiおすすめランキング",
    description:
      "料金・速度・契約期間・データ容量を総合的に比較し、2025年におすすめのモバイルWiFiサービスをランキング形式で紹介します。",
    lastUpdated: "2025-08-17",
    readTime: "15分",
    category: "比較・ランキング",
    slug: "2025-ranking",
    tags: ["ランキング", "おすすめ", "比較", "2025年"],
    image: "🏆",
    featured: true,
  },
  {
    id: 7,
    title: "モバイルWiFi初心者向け完全ガイド",
    description:
      "はじめてモバイルWiFiを選ぶ方向けの基本知識と選び方のポイントを分かりやすく解説。料金相場、データ容量の目安、契約時の注意点まで網羅した決定版ガイドです。",
    lastUpdated: "2025-01-15",
    readTime: "8分",
    category: "初心者向け",
    slug: "beginner-guide",
    tags: ["初心者", "選び方", "基本知識", "料金"],
    image: "🔰",
    featured: false,
  },
  {
    id: 8,
    title: "クラウドSIMと物理SIMの違いを徹底解説",
    description:
      "モバイルWiFiの2つの主要なSIMタイプについて、技術的な仕組みから実測データまで詳しく比較。あなたの用途に最適なSIMタイプが分かります。",
    lastUpdated: "2025-01-12",
    readTime: "7分",
    category: "技術解説",
    slug: "cloudsim-vs-physicalsim",
    tags: ["クラウドSIM", "物理SIM", "技術解説", "比較"],
    image: "⚡",
    featured: false,
  },
  {
    id: 9,
    title: "データ容量別おすすめモバイルWiFi【2025年最新】",
    description:
      "10GB、20GB、50GB、無制限など、データ容量別におすすめのモバイルWiFiサービスをご紹介。使用量の目安と最適プランの選び方も解説します。",
    lastUpdated: "2025-01-10",
    readTime: "6分",
    category: "比較・ランキング",
    slug: "data-capacity-comparison",
    tags: ["データ容量", "おすすめ", "ランキング", "プラン"],
    image: "📊",
    featured: false,
  },
  {
    id: 10,
    title: "モバイルWiFiの通信速度を向上させる方法",
    description:
      "モバイルWiFiの通信速度が遅い時の対処法と、より快適に使うためのコツを詳しく解説。設置場所の最適化から端末設定まで実践的なテクニックをご紹介。",
    lastUpdated: "2025-01-08",
    readTime: "5分",
    category: "使い方・Tips",
    slug: "speed-improvement-tips",
    tags: ["速度向上", "設定", "Tips", "トラブル解決"],
    image: "🚀",
    featured: false,
  },
  {
    id: 11,
    title: "契約期間縛りなしモバイルWiFi徹底比較",
    description:
      "解約金なしでいつでも解約できる縛りなしモバイルWiFiを徹底比較。短期利用や初回利用におすすめのサービスを詳しくご紹介します。",
    lastUpdated: "2025-01-05",
    readTime: "6分",
    category: "比較・ランキング",
    slug: "no-contract-wifi",
    tags: ["縛りなし", "短期利用", "解約金なし", "比較"],
    image: "🔓",
    featured: false,
  },
  {
    id: 12,
    title: "海外で使えるモバイルWiFi完全ガイド",
    description:
      "海外旅行や出張で使えるモバイルWiFiの選び方と注意点を解説。国別の料金相場、データ容量の目安、現地での設定方法まで詳しくご紹介。",
    lastUpdated: "2025-01-03",
    readTime: "9分",
    category: "海外利用",
    slug: "international-wifi",
    tags: ["海外利用", "旅行", "出張", "国際ローミング"],
    image: "🌍",
    featured: false,
  },
  {
    id: 13,
    title: "Broad WiMAXを販売店長が徹底レビュー",
    description:
      "実店舗で寄せられる質問とサポート体制をもとに、Broad WiMAXの料金・端末・オプションを詳しく解説。",
    lastUpdated: "2025-09-27",
    readTime: "13分",
    category: "プロバイダレビュー",
    slug: "providers/broad-wimax",
    tags: ["Broad WiMAX", "料金", "サポート", "店長レビュー"],
    image: "🏬",
    featured: true,
  },
  {
    id: 14,
    title: "GMOとくとくBB WiMAXの契約を迷う方へ 店長アドバイス",
    description:
      "キャッシュバック受け取りのコツやサポート窓口の実態など、店舗で伝えている注意点をまとめました。",
    lastUpdated: "2025-09-27",
    readTime: "12分",
    category: "プロバイダレビュー",
    slug: "providers/gmo-wimax",
    tags: ["GMO", "WiMAX", "キャッシュバック", "申込手順"],
    image: "💼",
    featured: false,
  },
  {
    id: 15,
    title: "ZEUS WiFiはこんな人におすすめ 店舗相談から見えた強み",
    description:
      "海外対応や短期契約を希望する方に人気の理由を、店舗でのヒアリング内容から分析しました。",
    lastUpdated: "2025-09-27",
    readTime: "11分",
    category: "プロバイダレビュー",
    slug: "providers/zeus-wifi",
    tags: ["ZEUS WiFi", "海外利用", "短期契約", "料金プラン"],
    image: "⚡",
    featured: false,
  },
  {
    id: 16,
    title: "Mugen WiFiを長期利用して分かったこと",
    description:
      "端末トラブル時の対応や長期割引の実態など、リピーターの声を交えてMugen WiFiのメリット・デメリットを紹介。",
    lastUpdated: "2025-09-27",
    readTime: "12分",
    category: "プロバイダレビュー",
    slug: "providers/mugen-wifi",
    tags: ["Mugen WiFi", "長期利用", "端末補償", "口コミ"],
    image: "🔁",
    featured: false,
  },
  {
    id: 17,
    title: "一人暮らし向けモバイルWiFiの選び方 店長おすすめ3選",
    description:
      "ワンルームでの電波状況やコスト重視の方に、店舗で実際に提案しているプランを厳選しました。",
    lastUpdated: "2025-09-27",
    readTime: "10分",
    category: "利用目的別",
    slug: "purpose/hitorigurashi",
    tags: ["一人暮らし", "コスパ", "簡単設置", "店長おすすめ"],
    image: "🏠",
    featured: true,
  },
  {
    id: 18,
    title: "オンラインゲームが快適になるモバイルWiFi選び",
    description:
      "ラグ対策や速度チェックのポイントを、ゲーム好きなお客様へ案内している内容そのままに解説。",
    lastUpdated: "2025-09-27",
    readTime: "9分",
    category: "利用目的別",
    slug: "purpose/game",
    tags: ["ゲーム", "低遅延", "通信速度", "おすすめ端末"],
    image: "🎮",
    featured: false,
  },
  {
    id: 19,
    title: "出張・旅行で失敗しないモバイルWiFi活用術",
    description:
      "空港受け取りから海外レンタルまで、出張族に多い質問と店舗での回答をまとめました。",
    lastUpdated: "2025-09-27",
    readTime: "9分",
    category: "利用目的別",
    slug: "purpose/business-trip",
    tags: ["出張", "旅行", "短期利用", "海外対応"],
    image: "🧳",
    featured: false,
  },
];

export const articlesBySlug = Object.fromEntries(
  articlesMetadata.map((article) => [article.slug, article])
) as Record<string, ArticleMeta>;