import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ProjectCard from "../UI/ProjectCard";
import { projectData } from "../../data/projects";
import { TracingBeam } from "../UI/tracing-beam";

const Projects = () => {
  return (
    <Container id={"projects"} className="mt-10 mb-20">
      <Heading text={"Projects"}></Heading>
      <ProjectCard projectData={projectData}></ProjectCard>
    </Container>
  );
};

export default Projects;
