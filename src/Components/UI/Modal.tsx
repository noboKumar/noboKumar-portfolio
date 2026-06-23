import React from "react";
import { Project } from "../../data/types";
import { DialogContent, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps {
  project: Project;
}

const Modal = ({ project }: ModalProps) => {
  if (!project) return null;
  return (
    <DialogContent className="max-w-lg bg-base-300 rounded-3xl border border-base-content/10 text-base-content p-6">
      <DialogHeader>
        <DialogTitle className="text-lg font-bold text-left">
          {project.title}
        </DialogTitle>
      </DialogHeader>
      <p className="py-2 text-left">{project.description}</p>
      <div className="mb-2 text-left">
        <span className="font-semibold">Tech Stack:</span>
        <div className="mt-1 flex flex-wrap gap-2">
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="badge bg-base-300 inline-flex items-center gap-1"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mb-2 text-left">
        <span className="font-semibold text-xl">Features:</span>
        <ul className="list-inside list-disc mt-1 space-y-1">
          {project.features?.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      </div>
    </DialogContent>
  );
};

export default Modal;
