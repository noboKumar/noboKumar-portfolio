import SpotlightCard from "./SpotlightCard";
import Marquee from "react-fast-marquee";
import { techStack } from "../../data/skills";

const techStackMultiple = [...techStack, ...techStack, ...techStack, ...techStack];

interface TechGridProps {
  theme?: string;
}

export default function TechGrid({ theme }: TechGridProps) {
  return (
    <Marquee speed={110}>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {techStackMultiple.map((tech, i) => {
          const Icon = tech.icon;
          // Swap pure-white icons to black in light mode
          const resolvedColor =
            tech.color === "#FFFFFF" && theme === "light"
              ? "#000000"
              : tech.color;
          return (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(133, 133, 133, 0.562)"
              className="group flex h-[110px] w-[100px] md:h-[140px] md:w-[120px] cursor-pointer flex-col items-center justify-center rounded-xl shadow-md transition-transform duration-700 ease-in-out hover:scale-110"
            >
              <div className="transition-transform delay-100 duration-700 ease-in-out group-hover:scale-125">
                <Icon color={resolvedColor} size={50} />
              </div>

              <p className="mt-2 text-sm font-medium">{tech.label}</p>
            </SpotlightCard>
          );
        })}
      </div>
    </Marquee>
  );
}
