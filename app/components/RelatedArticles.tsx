import Link from 'next/link';

interface RelatedArticle {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  icon: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  currentSlug?: string;
}

export default function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  // 現在の記事を除外
  const filteredArticles = articles.filter(article => 
    !currentSlug || !article.href.includes(currentSlug)
  );

  return (
    <section className="bg-gray-50 rounded-lg p-6 mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3 text-2xl">📚</span>
        関連記事
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.slice(0, 6).map((article, index) => (
          <Link 
            key={index}
            href={article.href}
            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{article.icon}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.readTime}</span>
            </div>
            
            <h3 className="font-bold text-sm text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            
            <p className="text-xs text-gray-600 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <Link 
          href="/articles"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
        >
          すべての記事を見る
          <span className="ml-1">→</span>
        </Link>
      </div>
    </section>
  );
}