import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import ChartDemo from "@/components/ChartDemo";
import { getAllArticles } from "@/lib/articles";

const categories = [
  {
    slug: "pine-script",
    label: "Pine Script",
    desc: "インジケーター・ストラテジー自作",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    slug: "indicators",
    label: "インジケーター",
    desc: "RSI・MACD・BB等を解説",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    slug: "methods",
    label: "手法",
    desc: "実践的なエントリー条件",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: "tradingview",
    label: "TradingView",
    desc: "操作・アラート設定",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function Home() {
  const articles = getAllArticles();
  const latestArticles = articles.slice(0, 6);
  const totalArticles = articles.length;

  return (
    <div>
      {/* Hero — dark */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Pine Script・テクニカル分析の日本語ナレッジベース
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            TradingViewで勝てる<br />
            <span className="text-blue-400">トレーダーのための</span>学習サイト
          </h1>
          <p className="text-slate-400 text-base mb-7 leading-relaxed max-w-xl">
            Pine Script・インジケーター・テクニカル手法を日本語で体系的に解説。
            初心者から中級者まで、実践的な知識を無料で。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm"
            >
              記事一覧を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/categories/pine-script"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-5 py-2.5 rounded-lg font-medium transition-colors text-sm"
            >
              Pine Script入門
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-5 mt-8 text-sm text-slate-500">
            <span>
              <span className="text-white font-bold">{totalArticles}</span> 記事
            </span>
            <span className="text-slate-700">|</span>
            <span>
              <span className="text-white font-bold">4</span> カテゴリ
            </span>
            <span className="text-slate-700">|</span>
            <span>完全無料・日本語</span>
          </div>
        </div>
      </section>

      {/* Live Chart — dark */}
      <section className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <h2 className="text-base font-bold text-white">ライブチャート</h2>
            <span className="text-xs text-slate-500 ml-1">— 通貨ペアと時間足を切り替えて表示</span>
          </div>
          <ChartDemo />
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-lg font-bold text-slate-900 mb-5">カテゴリから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} className="group">
                <div className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all bg-white">
                  <div className="text-blue-500 mb-3 group-hover:text-blue-600 transition-colors">
                    {cat.icon}
                  </div>
                  <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 mb-1 transition-colors">
                    {cat.label}
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed">{cat.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-10 pb-16">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-900">新着記事</h2>
            <Link href="/articles" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              すべて見る
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          {latestArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {latestArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400">
              <p className="text-base mb-2">記事を準備中です</p>
              <p className="text-sm">もうしばらくお待ちください</p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-t border-amber-200">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <p className="text-xs text-amber-700 text-center leading-relaxed">
            ⚠️ 本サイトの情報は教育・情報提供を目的としており、投資助言ではありません。
            売買の最終判断はご自身の責任で行ってください。
          </p>
        </div>
      </section>
    </div>
  );
}
