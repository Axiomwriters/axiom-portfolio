"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MetricTile from "@/components/ui/MetricTile";
import { metrics } from "@/data/metrics";

gsap.registerPlugin(ScrollTrigger);

export default function MetricsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".counter-val").forEach((counter) => {
        const targetVal = parseInt(
          counter.getAttribute("data-target") || "0",
          10
        );
        gsap.to(counter, {
          innerText: targetVal,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-32 flex flex-col justify-center items-center px-6 bg-neutral-950 border-t border-b border-neutral-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl w-full">
        {metrics.map((metric, i) => (
          <MetricTile key={i} metric={metric} />
        ))}
      </div>
    </section>
  );
}
