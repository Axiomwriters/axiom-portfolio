import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Savanah Dwelling",
    description:
      "An AI-driven real estate ecosystem with predictive property valuation modules and verified stakeholder dashboards.",
    status: "completed",
    tags: ["Next.js", "Supabase", "Tailwind", "Python AI Engine"],
    link: "https://savanahdwelling.co.ke",
  },
  {
    title: "Happy Faces Platform",
    description:
      "Full-stack educational interface containing custom role-based administrative workspaces and automated verification pipelines.",
    status: "completed",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://www.happyfacesempowermentnetwork.org",
  },
  {
    title: "Omnichannel Revenue Hub",
    description:
      "Automated business tracking infrastructure that bridges live WhatsApp customer interactions directly to central inventory ledgers.",
    status: "pipeline",
    tags: ["Meta Graph API", "n8n", "Laravel", "Redis"],
    link: "#",
  },
];
