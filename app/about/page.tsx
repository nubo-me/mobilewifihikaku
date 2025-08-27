import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "当サイトについて | モバイルWiFi比較ナビ",
  description: "モバイルWiFi比較ナビの運営方針、情報の取り扱い、収益化ポリシーについてご説明します。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">当サイトについて</h1>
        <p className="text-gray-700 mb-4">
          モバイルWiFi比較ナビは、主要なモバイルWi-Fiサービスの料金・速度・契約期間などを中立的に比較し、最適な選択を支援する情報サイトです。
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">収益化ポリシー</h2>
        <p className="text-gray-700 mb-4">
          本サイトは一部の記事やリンクでアフィリエイトプログラムを利用しています。リンクには rel=&quot;sponsored nofollow&quot; を付与し、編集方針は広告主に影響されません。
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">免責事項</h2>
        <p className="text-gray-700 mb-4">
          掲載情報の正確性には努めていますが、最新の料金・条件は各公式サイトをご確認ください。ご利用によって生じた損害等については責任を負いかねます。
        </p>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">ホームへ戻る</Link>
        </div>
      </main>
    </div>
  );
}
