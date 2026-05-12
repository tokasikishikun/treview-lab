import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

const categoryLabels: Record<string, string> = {
  "pine-script": "Pine Script",
  indicators: "インジケーター",
  methods: "手法",
  tradingview: "TradingView使い方",
};

const categoryDescs: Record<string, string> = {
  "pine-script": "Pine Scriptの基本構文からインジケーター自作まで、実践的なコード解説。",
  indicators: "RSI・MACD・ボリンジャーバンドなど主要インジケーターの使い方と設定。",
  methods: "テクニカル分析を活用した実践的なトレード手法の解説。",
  tradingview: "TradingViewの画面操作・アラート設定・便利な使い方。",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = categoryLabels[slug] ?? slug;
  return {
    title: label,
    description: categoryDescs[slug] ?? `${label}に関する記事一覧。`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const articles = getArticlesByCategory(slug);
  const label = categoryLabels[slug] ?? slug;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{label}</h1>
        <p className="text-slate-500">{categoryDescs[slug]}</p>
      </div>
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
