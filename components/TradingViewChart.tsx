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
  height = 600,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = `<div class="tradingview-widget-container__widget" style="height:${height - 32}px;width:100%"></div><div class="tradingview-widget-copyright" style="font-size:11px;line-height:32px;text-align:center;color:#9db2bd"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" style="color:#9db2bd;text-decoration:none">Track all markets on TradingView</a></div>`;

    const config = {
      width: "100%",
      height,
      symbol,
      interval,
      timezone: "Asia/Tokyo",
      theme: "light",
      style: "1",
      locale: "ja",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      enable_publishing: false,
      save_image: false,
      studies,
      support_host: "https://www.tradingview.com",
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.text = JSON.stringify(config);
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
        style={{ height, width: "100%" }}
      />
    </div>
  );
}
