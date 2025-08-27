import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | モバイルWiFi比較ナビ",
  description: "本サイトへのご連絡・ご要望はメールにて受け付けています。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
        <p className="text-gray-700 mb-4">
          お問い合わせはメールにて承ります。お手数ですが件名に「モバイルWiFi比較ナビお問い合わせ」とご記載ください。
        </p>
        <p className="text-blue-700 font-medium">contact@example.com</p>
        <p className="text-sm text-gray-500 mt-2">※ 実運用ではフォームまたは実メールアドレスへ置き換えてください。</p>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">ホームへ戻る</Link>
        </div>
      </main>
    </div>
  );
}
