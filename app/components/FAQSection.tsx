interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "よくある質問" }: FAQSectionProps) {
  // FAQ構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
        }}
      />
      
      {/* FAQセクション */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-3 text-2xl">❓</span>
          {title}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-50 border border-gray-200 rounded-lg">
              <summary className="font-bold text-gray-800 p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                {faq.question}
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}