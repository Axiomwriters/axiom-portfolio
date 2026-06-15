"use client";

import type { ServiceCardData } from "@/types";

interface ServiceCardProps {
  service: ServiceCardData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl min-h-[500px] flex flex-col justify-between shadow-2xl will-change-transform">
      <div>
        <span className="font-mono text-neutral-500 text-sm">
          {service.index} / {service.label}
        </span>
        <h3 className="text-4xl font-bold mt-4 tracking-tight">
          {service.title}
        </h3>
        <p className="text-neutral-400 mt-4 max-w-xl text-lg">
          {service.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-8">
        {service.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-neutral-800 text-xs text-neutral-300 px-3 py-1 rounded-full font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
