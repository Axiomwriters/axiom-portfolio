"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");
        if (cards.length < 2) return;

        gsap.set(cards.slice(1), { yPercent: 100 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".services-container",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cards[1], { yPercent: 0, ease: "power2.out" }, 0);
        if (cards[2]) {
          tl.to(cards[2], { yPercent: 0, ease: "power2.out" }, 0.5);
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="services-container px-6 py-20 max-w-5xl mx-auto relative"
    >
      <h2 className="text-sm font-mono tracking-widest text-[#50cc60] uppercase mb-12">
        {"The Remedy // Service Suite"}
      </h2>

      <div
        className="services-deck space-y-24 md:grid md:grid-cols-1 md:gap-0 md:space-y-0 md:overflow-hidden"
        style={{ gridTemplateAreas: '"s"' }}
      >
        {services.map((service) => (
          <div
            key={service.index}
            className="service-card"
            style={{ gridArea: "s" }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
