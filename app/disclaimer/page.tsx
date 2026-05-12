import type { Metadata } from "next";

export const metadata: Metadata = { title: "免責事項" };

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">免責事項</h1>
      <div className="prose prose-slate max-w-none">
        <p>本サイト「TradingView JP」（以下「当サイト」）に掲載している情報は、教育・情報提供を目的としたものであり、特定の金融商品の売買を推奨・勧誘するものではありません。</p>
        <h2>投資判断について</h2>
        <p>当サイトで紹介するテクニカル分析手法・インジケーター・Pine Scriptコードは、あくまでも情報提供を目的としています。実際の投資・売買の判断はご自身の責任のもとで行ってください。当サイトの情報に基づいて生じた損失について、当サイトは一切の責任を負いません。</p>
        <h2>情報の正確性について</h2>
        <p>当サイトの情報は可能な限り正確を期しておりますが、その完全性・正確性を保証するものではありません。TradingViewの仕様変更等により情報が古くなる場合があります。</p>
        <h2>外部リンクについて</h2>
        <p>当サイトには外部サイトへのリンクが含まれる場合がありますが、リンク先の内容について当サイトは責任を負いません。</p>
      </div>
    </div>
  );
}
