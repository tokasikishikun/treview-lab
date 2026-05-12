import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

const categories = [
  { slug: "pine-script", label: "Pine Script", desc: "自動売買・インジケーター自作の基本", icon: "💻" },
  { slug: "indicators", label: "インジケーター", desc: "RSI・MACD・BBなど主要指標を解説", icon: "📊" },
  { slug: "methods", label: "手法", desc: "実践的なトレード手法と条件", icon: "🎯" },
  { slug: "tradingview", label: "TradingView使い方", desc: "画面操作・アラート設定など", icon: "🖥️" },
];

export default function Home() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            TradingViewを使いこなすための<br className="hidden md:block" />
            日本語情報サイト
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Pine Script・インジケーター・テクニカル手法を体系的に解説。<br />
            初心者から中級者まで、実践的な知識を日本語で。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/articles"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              記事一覧を見る
            </Link>
            <Link
              href="/categories/pine-script"
              className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Pine Script入門
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">カテゴリから探す</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="group">
              <div className="bg-white border border-slate-200 rounded-xl p-5 text-center hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 mb-1">{cat.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{cat.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">新着記事</h2>
          <Link href="/articles" className="text-sm text-blue-600 hover:underline">
            すべて見る →
          </Link>
        </div>
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg mb-2">記事を準備中です</p>
            <p className="text-sm">もうしばらくお待ちください</p>
          </div>
        )}
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-t border-amber-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-xs text-amber-700 text-center leading-relaxed">
            ⚠️ 本サイトの情報は教育・情報提供を目的としており、投資助言ではありません。
            売買の最終判断はご自身の責任で行ってください。
          </p>
        </div>
      </section>
    </div>
  );
}
