import React from "react";
import Heading from "../UI/Heading";
import Container from "../UI/Container";
import TechIcons from "../UI/TechIcons";

const Skills = () => {
  return (
    <Container id={"skills"} className="mt-20">
      <Heading text="Skills"></Heading>
      <div className="text-7xl">
        <TechIcons></TechIcons>
      </div>
    </Container>
  );
};

export default Skills;
