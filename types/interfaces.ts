import { LucideIcon } from "lucide-react";

export interface SocialLinks {
  href: string;
  icon: LucideIcon;
}

export interface NavLink extends SocialLinks {
  title: string;
}

export interface Statistic {
  label: string;
  value: number;
}

export type skillCategory = "frontend" | "backend" | "tools";
export interface Skill {
  _id: string;
  title: string;
  value: number;
  category: skillCategory;
}

export interface TabItem {
  value: skillCategory;
  icon: LucideIcon;
  label: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  images: any[];
  tags: string[];
  demoLink: string;
  github: string;
  publishedAt: Date;
  isResponsive: boolean;
}
