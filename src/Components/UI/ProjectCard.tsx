import React from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./Modal";
import { Project } from "../../data/types";

interface ProjectCardProps {
  projectData: Project[];
}

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 py-8">
      {projectData.map((project, idx) => (
        <SpotlightCard
          key={idx}
          spotlightSize={50}
          spotlightColor={"rgba(255, 255, 255, 0.08)"}
          className="sticky mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-2xl shadow-xl lg:flex-row"
          style={{ top: `calc(20% + ${idx * 30}px)` }}
        >
          {/* img section */}
          <div className="max-h-[200px] w-full flex-1 overflow-y-auto md:max-h-[400px] md:p-5">
            <div className="h-full">
              <img
                src={project.photo}
                alt={project.title}
                className="h-full w-full rounded-2xl object-cover object-top"
              />
            </div>
          </div>
          {/* text section */}
          <div className="flex-1 space-y-5">
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
                  {link.githubRepo && (
                    <a
                      className="btn btn-primary"
                      href={link.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} /> GitHub
                    </a>
                  )}
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
      ))}
    </div>
  );
};

export default ProjectCard;
