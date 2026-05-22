import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaStripe, FaKey, FaServer, FaLock } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiTypescript,
  SiShadcnui,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";
import { SkillItem } from "./types";

// Flat list for the marquee
export const techStack: SkillItem[] = [
  { icon: FaHtml5, color: "#E34F26", label: "HTML" },
  { icon: FaCss3Alt, color: "#1572B6", label: "CSS" },
  { icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { icon: FaReact, color: "#61DAFB", label: "React" },
  { icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  { icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
  { icon: SiShadcnui, color: "#FFFFFF", label: "shadcn/ui" },
  { icon: FaNodeJs, color: "#339933", label: "Node.js" },
  { icon: SiExpress, color: "#FFFFFF", label: "Express.js" },
  { icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
  { icon: SiPrisma, color: "#5a67d8", label: "Prisma" },
  { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
  { icon: FaGitAlt, color: "#F05032", label: "Git" },
  { icon: FaGithub, color: "#FFFFFF", label: "GitHub" },
  { icon: SiVercel, color: "#FFFFFF", label: "Vercel" },
  { icon: FaStripe, color: "#635BFF", label: "Stripe" },
];

export interface SkillDetail {
  icon: IconType;
  color: string;
  label: string;
}

export const skillDetailsMap: Record<string, SkillDetail> = {
  HTML: { icon: FaHtml5, color: "#E34F26", label: "HTML" },
  CSS: { icon: FaCss3Alt, color: "#1572B6", label: "CSS" },
  JavaScript: { icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
  TypeScript: { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  "React.js": { icon: FaReact, color: "#61DAFB", label: "React.js" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
  "shadcn/ui": { icon: SiShadcnui, color: "#FFFFFF", label: "shadcn/ui" },
  "Node.js": { icon: FaNodeJs, color: "#339933", label: "Node.js" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF", label: "Express.js" },
  "REST APIs": { icon: FaServer, color: "#009688", label: "REST APIs" },
  "Firebase Auth": { icon: SiFirebase, color: "#FFCA28", label: "Firebase Auth" },
  Prisma: { icon: SiPrisma, color: "#5a67d8", label: "Prisma" },
  JWT: { icon: SiJsonwebtokens, color: "#D63AFF", label: "JWT" },
  "Better Auth": { icon: FaLock, color: "#10B981", label: "Better Auth" },
  MongoDB: { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
  Git: { icon: FaGitAlt, color: "#F05032", label: "Git" },
  GitHub: { icon: FaGithub, color: "#FFFFFF", label: "GitHub" },
  Postman: { icon: SiPostman, color: "#FF6C37", label: "Postman" },
  "VS Code": { icon: VscVscode, color: "#007ACC", label: "VS Code" },
  Netlify: { icon: SiNetlify, color: "#00C7B7", label: "Netlify" },
  Vercel: { icon: SiVercel, color: "#FFFFFF", label: "Vercel" },
  Figma: { icon: FaFigma, color: "#F24E1E", label: "Figma" },
  Stripe: { icon: FaStripe, color: "#635BFF", label: "Stripe" },
};

// Categorized for the "What I Offer" cards
export interface SkillCategory {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive, and accessible user interfaces with modern frameworks.",
    icon: FaReact,
    iconColor: "#61DAFB",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend Development",
    description: "Designing and building secure, scalable server-side APIs and authentication systems.",
    icon: FaNodeJs,
    iconColor: "#339933",
    skills: ["Node.js", "Express.js", "REST APIs", "Firebase Auth", "Prisma", "JWT", "Better Auth"],
  },
  {
    title: "Database",
    description: "Modeling, querying, and managing relational and NoSQL databases for production apps.",
    icon: SiMongodb,
    iconColor: "#47A248",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & Deployment",
    description: "Using modern dev tools, version control, and cloud platforms for seamless delivery.",
    icon: FaGitAlt,
    iconColor: "#F05032",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Netlify", "Vercel", "Figma", "Stripe"],
  },
];

