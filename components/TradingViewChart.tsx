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

const intervalLabel = (interval: string) => {
  if (interval === "D") return "日足";
  if (interval === "W") return "週足";
  if (interval === "60") return "1時間足";
  if (interval === "240") return "4時間足";
  if (interval === "15") return "15分足";
  return `${interval}分足`;
};

export default function TradingViewChart({
  symbol = "FX:USDJPY",
  interval = "60",
  studies = [],
  height = 550,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>("");

  useEffect(() => {
    widgetId.current = `tv_${Math.random().toString(36).slice(2)}`;
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = `<div id="${widgetId.current}" style="height:${height}px"></div>`;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView === "undefined") return;
      new window.TradingView.widget({
        width: "100%",
        height,
        symbol,
        interval,
        timezone: "Asia/Tokyo",
        theme: "light",
        style: "1",
        locale: "ja",
        studies: studies.map((s) => ({ id: s })),
        hide_side_toolbar: true,
        allow_symbol_change: true,
        save_image: false,
        container_id: widgetId.current,
      });
    };
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [symbol, interval, height, studies]);

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-sm not-prose">
      <div className="bg-slate-800 px-4 py-2.5 text-xs text-slate-300 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
        <span>ライブチャート</span>
        <span className="text-slate-500">—</span>
        <span>{symbol}</span>
        <span className="text-slate-500">·</span>
        <span>{intervalLabel(interval)}</span>
        {studies.length > 0 && (
          <>
            <span className="text-slate-500">·</span>
            <span className="text-blue-400">{studies.map(s => s.split("@")[0]).join(" / ")}</span>
          </>
        )}
      </div>
      <div ref={containerRef} style={{ height }} />
    </div>
  );
}
