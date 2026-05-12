import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByTag } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

const tagLabels: Record<string, string> = {
  beginner: "入門",
  intermediate: "初級",
  advanced: "中級",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = tagLabels[slug] ?? slug;
  return { title: `難易度: ${label}`, description: `難易度「${label}」の記事一覧。` };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const articles = getArticlesByTag(slug);
  const label = tagLabels[slug] ?? slug;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">難易度: {label}</h1>
      {articles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p>記事を準備中です</p>
        </div>
      )}
    </div>
  );
}
