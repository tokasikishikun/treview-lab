import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors">
          TradingView JP
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/articles" className="hover:text-blue-600 transition-colors">
            記事一覧
          </Link>
          <Link href="/categories/pine-script" className="hover:text-blue-600 transition-colors">
            Pine Script
          </Link>
          <Link href="/categories/indicators" className="hover:text-blue-600 transition-colors">
            インジケーター
          </Link>
          <Link href="/categories/methods" className="hover:text-blue-600 transition-colors">
            手法
          </Link>
        </nav>
      </div>
    </header>
  );
}
