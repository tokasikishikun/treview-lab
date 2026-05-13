"use client";

import { useState, useMemo } from "react";
import ArticleCard from "./ArticleCard";
import type { ArticleMeta } from "@/lib/articles";

const CATEGORIES = [
  { value: "all", label: "すべて" },
  { value: "pine-script", label: "Pine Script" },
  { value: "indicators", label: "インジケーター" },
  { value: "methods", label: "手法" },
  { value: "tradingview", label: "TradingView使い方" },
];

const LEVELS = [
  { value: "all", label: "全レベル" },
  { value: "beginner", label: "入門" },
  { value: "intermediate", label: "初級" },
  { value: "advanced", label: "中級" },
];

type Props = {
  articles: ArticleMeta[];
  initialCategory?: string;
};

export default function ArticleFilter({ articles, initialCategory = "all" }: Props) {
  const [category, setCategory] = useState(initialCategory);
  const [level, setLevel] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (level !== "all" && !a.tags.includes(level)) return false;
      if (query) {
        const q = query.toLowerCase();
        if (!a.title.toLowerCase().includes(q) && !a.description.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [articles, category, level, query]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="記事を検索..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                category === c.value
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {c.label}
            </button>
          ))}
          <span className="w-px bg-slate-200 mx-1" />
          {LEVELS.map((l) => (
            <button
              key={l.value}
              onClick={() => setLevel(l.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                level === l.value
                  ? "bg-slate-800 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-400"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm text-slate-500 mb-4">
        {filtered.length} 件の記事
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-400">
          <p className="text-base mb-2">該当する記事が見つかりませんでした</p>
          <button
            onClick={() => { setCategory("all"); setLevel("all"); setQuery(""); }}
            className="text-sm text-blue-600 hover:underline"
          >
            フィルターをリセット
          </button>
        </div>
      )}
    </div>
  );
}
