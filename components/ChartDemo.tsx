"use client";

import { useState } from "react";
import TradingViewChart from "./TradingViewChart";

const PAIRS = [
  { symbol: "FX:USDJPY", label: "USD/JPY", sub: "ドル円" },
  { symbol: "FX:EURJPY", label: "EUR/JPY", sub: "ユーロ円" },
  { symbol: "FX:GBPJPY", label: "GBP/JPY", sub: "ポンド円" },
  { symbol: "FX:EURUSD", label: "EUR/USD", sub: "ユーロドル" },
  { symbol: "FX:AUDJPY", label: "AUD/JPY", sub: "豪ドル円" },
];

const INTERVALS = [
  { value: "5", label: "5分" },
  { value: "15", label: "15分" },
  { value: "60", label: "1時間" },
  { value: "240", label: "4時間" },
  { value: "D", label: "日足" },
];

export default function ChartDemo() {
  const [symbol, setSymbol] = useState("FX:USDJPY");
  const [interval, setInterval] = useState("60");

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {/* Pair selector */}
        <div className="flex gap-1.5 flex-wrap">
          {PAIRS.map((p) => (
            <button
              key={p.symbol}
              onClick={() => setSymbol(p.symbol)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                symbol === p.symbol
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
              }`}
            >
              <span>{p.label}</span>
              <span className="ml-1 text-slate-400 text-[10px]">{p.sub}</span>
            </button>
          ))}
        </div>

        {/* Interval selector */}
        <div className="flex gap-1 ml-auto">
          {INTERVALS.map((iv) => (
            <button
              key={iv.value}
              onClick={() => setInterval(iv.value)}
              className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                interval === iv.value
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white"
              }`}
            >
              {iv.label}
            </button>
          ))}
        </div>
      </div>

      <TradingViewChart symbol={symbol} interval={interval} height={440} theme="dark" />
    </div>
  );
}
