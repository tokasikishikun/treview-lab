"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = `<div class="tradingview-widget-container__widget" style="height:${height}px;width:100%"></div>`;

    const config = {
      autosize: true,
      symbol,
      interval,
      timezone: "Asia/Tokyo",
      theme: "light",
      style: "1",
      locale: "ja",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_side_toolbar: true,
      save_image: false,
      studies,
      support_host: "https://www.tradingview.com",
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify(config);
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
            <span className="text-blue-400">
              {studies.map((s) => s.split("@")[0]).join(" / ")}
            </span>
          </>
        )}
      </div>
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height }}
      />
    </div>
  );
}
