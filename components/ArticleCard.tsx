import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
};

const categoryLabels: Record<string, string> = {
  "pine-script": "Pine Script",
  indicators: "インジケーター",
  methods: "手法",
  tradingview: "TradingView使い方",
};

const tagColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-yellow-100 text-yellow-700",
  advanced: "bg-red-100 text-red-700",
};

export default function ArticleCard({ slug, title, description, category, tags, date }: Props) {
  return (
    <Link href={`/articles/${slug}`} className="block group">
      <article className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all bg-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            {categoryLabels[category] ?? category}
          </span>
          {tags.map((tag) => (
            <span key={tag} className={`text-xs font-medium px-2 py-0.5 rounded ${tagColors[tag] ?? "bg-slate-100 text-slate-600"}`}>
              {tag === "beginner" ? "入門" : tag === "intermediate" ? "初級" : tag === "advanced" ? "中級" : tag}
            </span>
          ))}
        </div>
        <h2 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h2>
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{description}</p>
        <p className="text-xs text-slate-400 mt-3">{date}</p>
      </article>
    </Link>
  );
}
