"use client";

import type { Metric } from "@/types";

interface MetricTileProps {
  metric: Metric;
}

export default function MetricTile({ metric }: MetricTileProps) {
  return (
    <div>
      <div className="text-5xl md:text-7xl font-black text-[#50cc60] font-mono">
        <span className="counter-val" data-target={metric.target}>
          0
        </span>
        {metric.suffix}
      </div>
      <p className="text-neutral-400 mt-2 tracking-wide font-mono text-sm uppercase">
        {metric.label}
      </p>
    </div>
  );
}
