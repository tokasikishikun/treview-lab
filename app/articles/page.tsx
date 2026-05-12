import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "TradingView・Pine Script・テクニカル分析に関する記事の一覧です。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">記事一覧</h1>
      {articles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg mb-2">記事を準備中です</p>
          <p className="text-sm">もうしばらくお待ちください</p>
        </div>
      )}
    </div>
  );
}
