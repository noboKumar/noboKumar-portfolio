import { JSX } from "react";

export interface TechItem {
  name: string;
  icon: JSX.Element;
}

export interface ProjectLink {
  live: string;
  githubRepo?: string;
  githubServer?: string;
}

export interface Project {
  title: string;
  photo: string;
  description: string;
  techStack: TechItem[];
  links: ProjectLink[];
  features: string[];
}

export interface EducationItem {
  institute: string;
  degree: string;
  years: string;
}

export interface SkillItem {
  icon: React.ElementType;
  color?: string;
  label: string;
}
