import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { SkillItem } from "./types";

export const techStack: SkillItem[] = [
  { icon: FaHtml5, color: "#E34F26", label: "HTML" },
  { icon: FaCss3Alt, color: "#1572B6", label: "CSS" },
  { icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { icon: FaReact, color: "#61DAFB", label: "React" },
  { icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  { icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
  { icon: SiReactrouter, color: "#CA4245", label: "Router" },
  { icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
  { icon: FaNodeJs, color: "#339933", label: "Node.js" },
  { icon: SiExpress, color: "#FFFFFF", label: "Express.js" },
  { icon: SiPrisma, color: "#2D3748", label: "Prisma" },
  { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
];
