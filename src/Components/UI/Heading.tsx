import React from "react";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return <h1 className="text-4xl font-semibold text-center">{text}</h1>;
};

export default Heading;
