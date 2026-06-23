import React, { useRef } from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./Modal";
import ProjectImageSlider from "./ProjectImageSlider";
import { Dialog, DialogTrigger } from "./dialog";
import { Project } from "../../data/types";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ProjectCardProps {
  projectData: Project[];
  theme?: string;
}

const Card = ({
  project,
  idx,
  progress,
  range,
  targetScale,
  theme,
}: {
  project: Project;
  idx: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  theme?: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-start justify-center pt-10 md:pt-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10% + ${idx * 25}px)`,
        }}
        className="relative h-[500px] w-full origin-top"
      >
        <SpotlightCard
          spotlightSize={50}
          spotlightColor={theme === "light" ? "rgba(99, 102, 241, 0.06)" : "rgba(255, 255, 255, 0.08)"}
          className="mx-auto flex h-full max-w-7xl flex-col items-center gap-5 rounded-2xl shadow-2xl lg:flex-row"
        >
          {/* img section */}
          <div className="w-full lg:w-[480px] xl:w-[520px] shrink-0 md:p-5">
            <ProjectImageSlider
              photos={project.photos}
              photoLabels={project.photoLabels}
              title={project.title}
              fallbackPhoto={project.photo}
              liveUrl={project.links?.[0]?.live}
            />
          </div>
          {/* text section */}
          <div className="flex-1 space-y-5 p-6 md:p-0">
            <h3 className="text-xl font-semibold md:text-4xl">
              {project.title}
            </h3>
            <p className="line-clamp-4 md:line-clamp-none md:text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <p
                  key={tIdx}
                  className="badge bg-base-300 inline-flex items-center gap-1"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </p>
              ))}
            </div>
            <div>
              {project.links.map((link, lIdx) => (
                <div key={lIdx} className="flex flex-wrap gap-2">
                  <a
                    className="btn btn-primary"
                    href={link.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoIosLink /> Live Link
                  </a>
                  <a
                    className="btn btn-primary"
                    href={link.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} /> GitHub
                  </a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        className={`btn btn-outline ${theme === "light" ? "border-slate-300/80" : "border-gray-500/80"}`}
                      >
                        <BsThreeDots size={20} />
                      </button>
                    </DialogTrigger>
                    <Modal project={project} />
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ projectData, theme }: ProjectCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative mt-0">
      {projectData.map((project, idx) => {
        const targetScale = 1 - (projectData.length - idx) * 0.05;
        return (
          <Card
            key={idx}
            project={project}
            idx={idx}
            progress={scrollYProgress}
            range={[idx * (1 / projectData.length), 1]}
            targetScale={targetScale}
            theme={theme}
          />
        );
      })}
    </div>
  );
};

export default ProjectCard;
