import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

const categoryLabels: Record<string, string> = {
  "pine-script": "Pine Script",
  indicators: "インジケーター",
  methods: "手法",
  tradingview: "TradingView使い方",
};

const BASE_URL = "https://tradingview-jp.vercel.app";

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    url: `${BASE_URL}/articles/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "TradingView JP",
      url: BASE_URL,
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span>›</span>
        <Link href="/articles" className="hover:text-blue-600">記事一覧</Link>
        <span>›</span>
        <span className="text-slate-600">{article.title}</span>
      </nav>

      {/* Meta */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Link
          href={`/categories/${article.category}`}
          className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded hover:bg-blue-100"
        >
          {categoryLabels[article.category] ?? article.category}
        </Link>
        {article.tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded hover:bg-slate-200">
            {tag === "beginner" ? "入門" : tag === "intermediate" ? "初級" : tag === "advanced" ? "中級" : tag}
          </Link>
        ))}
        <span className="text-xs text-slate-400 ml-auto">{article.date}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">{article.title}</h1>
      <p className="text-slate-500 mb-8 leading-relaxed">{article.description}</p>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-xs text-amber-700 leading-relaxed">
        ⚠️ 本記事の情報は教育・情報提供を目的としており、投資助言ではありません。売買の最終判断はご自身の責任で行ってください。
      </div>

      {/* Content */}
      <article className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-code:text-sm">
        <MDXRemote source={article.content} />
      </article>
    </div>
  );
}
