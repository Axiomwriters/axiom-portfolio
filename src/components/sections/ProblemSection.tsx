"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  "Your business is losing velocity because your systems don't talk to each other.",
  "WhatsApp chats get dropped. Invoices sit in spreadsheets. M-Pesa payments require manual verification.",
];

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        phrases.forEach((_, i) => {
          const selector = `.problem-phrase-${i}`;
          gsap.fromTo(
            selector,
            { opacity: 0, filter: "blur(10px)" },
            {
              opacity: 1,
              filter: "blur(0px)",
              scrollTrigger: {
                trigger: selector,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );
        });
      });

      mm.add("(max-width: 768px)", () => {
        phrases.forEach((_, i) => {
          gsap.fromTo(
            `.problem-phrase-${i}`,
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: `.problem-phrase-${i}`,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-32 max-w-4xl mx-auto px-6 flex flex-col justify-center space-y-16"
    >
      {phrases.map((phrase, i) => (
        <p
          key={i}
          className={`problem-phrase-${i} text-3xl md:text-5xl font-medium tracking-tight text-neutral-400`}
        >
          {phrase}
        </p>
      ))}
    </section>
  );
}
