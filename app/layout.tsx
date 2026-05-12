import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TradingView JP - Pine Script・テクニカル分析を日本語で",
    template: "%s | TradingView JP",
  },
  description:
    "TradingViewのPine Script・インジケーター・テクニカル手法を日本語で体系的に解説。初心者から中級者まで、為替トレードに役立つ情報を提供します。",
  keywords: ["TradingView", "Pine Script", "テクニカル分析", "インジケーター", "為替", "FX"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "TradingView JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
