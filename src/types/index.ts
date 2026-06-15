export interface Project {
  title: string;
  description: string;
  status: "completed" | "pipeline";
  tags: string[];
  link: string;
}

export interface ServiceCardData {
  index: string;
  label: string;
  title: string;
  description: string;
  techStack: string[];
}

export interface Metric {
  target: number;
  suffix: string;
  label: string;
}

export interface SiteConfig {
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
}
