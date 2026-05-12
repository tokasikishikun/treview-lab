import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-sm">カテゴリ</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/categories/pine-script" className="hover:text-blue-600">Pine Script</Link></li>
              <li><Link href="/categories/indicators" className="hover:text-blue-600">インジケーター</Link></li>
              <li><Link href="/categories/methods" className="hover:text-blue-600">手法</Link></li>
              <li><Link href="/categories/tradingview" className="hover:text-blue-600">TradingView使い方</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-sm">難易度</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/tags/beginner" className="hover:text-blue-600">入門</Link></li>
              <li><Link href="/tags/intermediate" className="hover:text-blue-600">初級</Link></li>
              <li><Link href="/tags/advanced" className="hover:text-blue-600">中級</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-sm">サイト情報</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-blue-600">このサイトについて</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-600">免責事項</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p className="mb-2">
            本サイトの情報は教育・情報提供を目的としており、投資助言ではありません。売買の最終判断はご自身の責任で行ってください。
          </p>
          <p>© 2025 TradingView JP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
