import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | モバイルWiFi比較ナビ",
  description: "本サイトの個人情報の取り扱い、Cookie・アクセス解析、広告配信に関する方針を記載します。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
        <h2 className="text-xl font-semibold mb-2">アクセス解析ツールについて</h2>
        <p className="text-gray-700 mb-4">本サイトはアクセス解析のためにCookieを利用する場合があります。</p>
        <h2 className="text-xl font-semibold mb-2">広告配信について</h2>
        <p className="text-gray-700 mb-4">一部ページにてアフィリエイト広告を掲載しています。ユーザーの利益を最優先します。</p>
        <h2 className="text-xl font-semibold mb-2">個人情報の第三者提供</h2>
        <p className="text-gray-700 mb-4">法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。</p>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">ホームへ戻る</Link>
        </div>
      </main>
    </div>
  );
}
