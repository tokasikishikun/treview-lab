import type { Metadata } from "next";
import ArticleFilter from "@/components/ArticleFilter";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "TradingView・Pine Script・テクニカル分析に関する記事の一覧です。カテゴリーや難易度で絞り込めます。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-slate-900">記事一覧</h1>
        <p className="text-sm text-slate-500 mt-1">全 {articles.length} 記事 — カテゴリーや難易度で絞り込めます</p>
      </div>
      <ArticleFilter articles={articles} />
    </div>
  );
}
