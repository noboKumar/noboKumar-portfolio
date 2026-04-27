import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ProjectCard from "../UI/ProjectCard";
import { projectData } from "../../data/projects";

const Projects = () => {
  return (
    <Container id={"projects"} className="my-20">
      <Heading text={"Projects"}></Heading>
      <ProjectCard projectData={projectData}></ProjectCard>
    </Container>
  );
};

export default Projects;
