import React, { useRef } from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./Modal";
import { Project } from "../../data/types";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ProjectCardProps {
  projectData: Project[];
}

const Card = ({
  project,
  idx,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  idx: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
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
          spotlightColor={"rgba(255, 255, 255, 0.08)"}
          className="mx-auto flex h-full max-w-7xl flex-col items-center gap-5 rounded-2xl shadow-2xl lg:flex-row"
        >
          {/* img section */}
          <div className="h-[200px] w-full flex-1 overflow-hidden md:h-full md:p-5">
            <div className="h-full w-full">
              <img
                src={project.photo}
                alt={project.title}
                className="h-full w-full rounded-2xl object-cover object-top"
              />
            </div>
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
                  <button
                    className="btn btn-outline border-gray-500/80"
                    onClick={() => {
                      const modal = document.getElementById(
                        `my_modal_${idx}`,
                      ) as HTMLDialogElement | null;
                      modal?.showModal();
                    }}
                  >
                    <BsThreeDots size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <Modal id={`my_modal_${idx}`} project={project} />
        </SpotlightCard>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ projectData }: ProjectCardProps) => {
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
          />
        );
      })}
    </div>
  );
};

export default ProjectCard;
