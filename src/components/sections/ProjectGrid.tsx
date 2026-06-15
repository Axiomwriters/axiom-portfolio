"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.from(".project-node", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.from(".project-node", {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%",
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
      id="projects"
      className="projects-section py-32 px-6 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-sm font-mono tracking-widest text-[#50cc60] uppercase mb-2">
            {"// Project Ledger"}
          </h2>
          <p className="text-3xl font-bold tracking-tight">
            Active builds and upcoming systems
          </p>
        </div>
        <span className="text-sm font-mono text-neutral-500">
          Total Systems Managed: {projects.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
