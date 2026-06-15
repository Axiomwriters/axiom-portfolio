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

        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;

          ScrollTrigger.create({
            trigger: card,
            start: "top 10%",
            pin: true,
            pinSpacing: false,
            endTrigger: ".services-container",
            end: "bottom bottom",
            invalidateOnRefresh: true,
          });
        });

        cards.forEach((card) => {
          gsap.from(card, {
            yPercent: 20,
            opacity: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="services-container px-6 py-20 max-w-5xl mx-auto relative space-y-24"
    >
      <h2 className="text-sm font-mono tracking-widest text-[#50cc60] uppercase mb-12">
        The Remedy // Service Suite
      </h2>

      {services.map((service) => (
        <ServiceCard key={service.index} service={service} />
      ))}
    </section>
  );
}
