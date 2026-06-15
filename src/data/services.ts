import type { ServiceCardData } from "@/types";

export const services: ServiceCardData[] = [
  {
    index: "01",
    label: "Capability",
    title: "Custom Software & Engineering",
    description:
      "High-end, enterprise-scale web applications. Engineered using Next.js, Laravel, Node.js, and Python. Complete with hardened infrastructure deployments, Docker containerization, and safe database isolation layers.",
    techStack: [
      "Next.js",
      "Laravel",
      "Node.js",
      "Supabase",
      "Docker",
      "M-Pesa Daraja Integration",
    ],
  },
  {
    index: "02",
    label: "Interaction",
    title: "Automation & AI Agents",
    description:
      "Eliminate administrative overhead. We deploy verified Meta Business WhatsApp Chatbots and build complex background workflow automations via tools like n8n, directly piping customer touchpoints straight into secure CRM databases.",
    techStack: [
      "Meta Graph API",
      "WhatsApp Business",
      "n8n Engineering",
      "CRM Syncing",
      "AI Workflows",
    ],
  },
  {
    index: "03",
    label: "Conversion",
    title: "Growth, Visibility & CMS",
    description:
      "Engineered visibility. From technical structural SEO audits to rapid deployments using custom-tuned WordPress and Wix nodes. Backed by end-to-end data pipelines streaming into Google BigQuery dashboards for ultimate business transparency.",
    techStack: [
      "Technical SEO",
      "WordPress Custom themes",
      "Google BigQuery",
      "UX Design System",
      "Wix Dev",
    ],
  },
];
