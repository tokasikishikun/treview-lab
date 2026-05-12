import type { Metadata } from "next";

export const metadata: Metadata = { title: "プライバシーポリシー" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">プライバシーポリシー</h1>
      <div className="prose prose-slate max-w-none">
        <h2>アクセス解析について</h2>
        <p>当サイトではGoogle Analytics 4を使用してアクセス解析を行っています。Google Analyticsはクッキーを使用してデータを収集しますが、個人を特定する情報は収集しません。</p>
        <h2>広告について</h2>
        <p>当サイトではGoogle AdSenseおよびアフィリエイト広告を掲載することがあります。広告配信のためにクッキーが使用される場合があります。</p>
        <h2>お問い合わせフォームについて</h2>
        <p>お問い合わせフォームに入力された情報は、お問い合わせへの対応のみに使用し、第三者に提供することはありません。</p>
        <h2>プライバシーポリシーの変更</h2>
        <p>本ポリシーは予告なく変更される場合があります。変更後は本ページに掲載します。</p>
      </div>
    </div>
  );
}
