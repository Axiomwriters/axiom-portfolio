"use client";

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-node bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-colors will-change-transform">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span
            className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
              project.status === "completed"
                ? "bg-emerald-950/50 text-emerald-400 border border-emerald-800/50"
                : "bg-amber-950/50 text-amber-400 border border-amber-800/50"
            }`}
          >
            {project.status === "completed" ? "\u25CF Deployed Live" : "\u2699 In Pipeline"}
          </span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-neutral-900 text-[11px] text-neutral-400 border border-neutral-800 px-2.5 py-1 rounded font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-mono text-white hover:text-[#50cc60] transition-colors group"
        >
          Examine Architecture
          <span className="transform translate-x-1 group-hover:translate-x-2 transition-transform ml-1">
            \u2192
          </span>
        </a>
      </div>
    </div>
  );
}
