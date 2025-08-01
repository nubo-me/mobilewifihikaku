import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "モバイルWiFi比較ナビ | 16サービス徹底比較・料金・速度・契約期間で選ぶ",
  description: "モバイルWi-Fiサービス16種類を徹底比較！料金・契約期間・通信速度・データ容量など詳細情報でピッタリのWi-Fiが見つかります。ZEUS WiFi、クラウドWiFi、縛りなしWiFiなど人気サービス掲載。無料で比較検討できます。",
  keywords: "モバイルWiFi,ポケットWiFi,比較,料金,契約期間,通信速度,クラウドSIM,物理SIM,データ容量,無制限,縛りなし,ZEUS WiFi,クラウドWiFi",
  authors: [{ name: "モバイルWiFi比較ナビ" }],
  creator: "モバイルWiFi比較ナビ",
  publisher: "モバイルWiFi比較ナビ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mobilewifihikaku.web.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "モバイルWiFi比較ナビ | 16サービス徹底比較・料金・速度・契約期間で選ぶ",
    description: "モバイルWi-Fiサービス16種類を徹底比較！料金・契約期間・通信速度・データ容量など詳細情報でピッタリのWi-Fiが見つかります。ZEUS WiFi、クラウドWiFi、縛りなしWiFiなど人気サービス掲載。",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mobilewifihikaku.web.app",
    siteName: "モバイルWiFi比較ナビ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "モバイルWiFi比較ナビ - 16サービス徹底比較",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "モバイルWiFi比較ナビ | 16サービス徹底比較",
    description: "モバイルWi-Fiサービス16種類を徹底比較！料金・契約期間・通信速度・データ容量など詳細情報でピッタリのWi-Fiが見つかります。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    other: {
      "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    }
  })
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "モバイルWiFi比較ナビ",
              "url": "https://mobilewifihikaku.web.app",
              "description": "モバイルWi-Fiサービス16種類を徹底比較！料金・契約期間・通信速度など詳細情報でピッタリのWi-Fiが見つかります。",
              "publisher": {
                "@type": "Organization",
                "name": "モバイルWiFi比較ナビ"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mobilewifihikaku.web.app/#comparison",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "モバイルWiFi比較ナビ | 16サービス徹底比較",
              "description": "モバイルWi-Fiサービス16種類を徹底比較！料金・契約期間・通信速度など詳細情報でピッタリのWi-Fiが見つかります。",
              "url": "https://mobilewifihikaku.web.app",
              "mainEntity": {
                "@type": "ItemList",
                "name": "モバイルWiFiサービス比較",
                "description": "人気のモバイルWiFiサービス16種類の詳細比較",
                "numberOfItems": 16
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ホーム",
                    "item": "https://mobilewifihikaku.web.app"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
