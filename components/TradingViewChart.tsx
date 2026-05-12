"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: {
      widget: new (config: Record<string, unknown>) => void;
    };
  }
}

type Props = {
  symbol?: string;
  interval?: string;
  studies?: string[];
  height?: number;
};

export default function TradingViewChart({
  symbol = "FX:USDJPY",
  interval = "60",
  studies = [],
  height = 400,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>("");

  useEffect(() => {
    widgetId.current = `tv_${Math.random().toString(36).slice(2)}`;
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = `<div id="${widgetId.current}"></div>`;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView === "undefined") return;
      new window.TradingView.widget({
        autosize: true,
        height,
        symbol,
        interval,
        timezone: "Asia/Tokyo",
        theme: "light",
        style: "1",
        locale: "ja",
        studies,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: widgetId.current,
      });
    };
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [symbol, interval, height, studies]);

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
      <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 border-b border-slate-200 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
        ライブチャート（{symbol}・{interval === "60" ? "1時間足" : interval === "D" ? "日足" : interval + "分足"}）
      </div>
      <div ref={containerRef} style={{ height }} />
    </div>
  );
}
