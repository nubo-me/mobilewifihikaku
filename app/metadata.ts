import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'モバイルWiFi比較ナビ - 2025年最新おすすめランキング',
    template: '%s | モバイルWiFi比較ナビ'
  },
  description: '2025年最新のモバイルWiFi比較サイト。料金・速度・データ容量を徹底比較し、あなたにピッタリのサービスをご提案。スマホのギガ不足解決から学生・主婦・シニア向けまで幅広くカバー。',
  keywords: [
    'モバイルWiFi',
    '比較',
    'おすすめ',
    'ランキング',
    '2025年',
    '最新',
    '料金',
    '速度',
    'データ容量',
    'ギガ不足',
    'スマホ',
    '学生',
    '主婦',
    'シニア',
    '在宅ワーク',
    'SNS',
    'TikTok',
    'Instagram',
    'YouTube'
  ],
  authors: [{ name: 'モバイルWiFi比較ナビ編集部' }],
  creator: 'モバイルWiFi比較ナビ',
  publisher: 'モバイルWiFi比較ナビ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mobilewifihikaku.web.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://mobilewifihikaku.web.app',
    title: 'モバイルWiFi比較ナビ - 2025年最新おすすめランキング',
    description: '2025年最新のモバイルWiFi比較サイト。あなたにピッタリのサービスをご提案します。',
    siteName: 'モバイルWiFi比較ナビ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'モバイルWiFi比較ナビ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'モバイルWiFi比較ナビ - 2025年最新おすすめランキング',
    description: '2025年最新のモバイルWiFi比較サイト。あなたにピッタリのサービスをご提案します。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google3c022effb90b8e16',
  },
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'モバイルWiFi比較ナビ',
  url: 'https://mobilewifihikaku.web.app',
  description: '2025年最新のモバイルWiFi比較サイト。料金・速度・データ容量を徹底比較し、あなたにピッタリのサービスをご提案。',
  publisher: {
    '@type': 'Organization',
    name: 'モバイルWiFi比較ナビ',
    url: 'https://mobilewifihikaku.web.app',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mobilewifihikaku.web.app/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}