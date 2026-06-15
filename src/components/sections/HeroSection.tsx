"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({ delay: 0.3 });
        tl.from(".hero-title", {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        });
        tl.from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
        tl.from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );

        gsap.to(".hero-title", {
          scale: 0.8,
          opacity: 0.8,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.from(".hero-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        });
        gsap.from(".hero-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.4,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="hero-section h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <h1 className="hero-title text-5xl md:text-8xl font-black tracking-tighter max-w-5xl uppercase leading-none">
        We engineer high-velocity digital ecosystems.
      </h1>
      <p className="hero-subtitle text-lg md:text-xl text-neutral-400 mt-6 max-w-2xl font-mono">
        No shortcuts. Just pure, scalable code.
      </p>
      <div className="hero-cta mt-10">
        <a
          href="#projects"
          className="inline-block bg-[#50cc60] text-black font-mono font-bold uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-[#44b352] active:scale-95 transition-all"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
}
