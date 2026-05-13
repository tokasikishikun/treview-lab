import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "トレビュー研究所 - Pine Script・テクニカル分析を日本語で",
    template: "%s | トレビュー研究所",
  },
  description:
    "Pine Script・インジケーター・テクニカル手法を日本語で体系的に解説。初心者から中級者まで、為替トレードに役立つ情報を提供します。",
  keywords: ["Pine Script", "TradingView", "テクニカル分析", "インジケーター", "為替", "FX"],
  verification: {
    google: "YelDP0xXq2hJTwaPkHdPXmjPf5WZM7w3th-FU2n35OA",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "トレビュー研究所",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
