import React from "react";
import Heading from "../UI/Heading";
import Container from "../UI/Container";
import { aboutData } from "../../data/about";

const About = () => {
  return (
    <Container id="about" className="mt-20 space-y-8">
      <Heading text={aboutData.title}></Heading>
      <div className="mx-auto w-11/12 text-center text-lg leading-8 space-y-6 text-shadow-lg text-primary">
        <p className="text-xl font-medium mb-8">
          {aboutData.subtitle}
        </p>
        
        <div className="space-y-6">
          {aboutData.paragraphs.map((p, idx) => (
            <p key={idx}>
              {p.text.split(new RegExp(`(${p.highlights.join('|')})`, 'g')).map((part, i) => {
                const isHighlight = p.highlights.includes(part);
                if (isHighlight) {
                  // We can't easily preserve the exact color class per highlight in the data without making it complex
                  // but we can use a default highlight style.
                  return <span key={i} className="font-semibold text-blue-400">{part}</span>;
                }
                return part;
              })}
            </p>
          ))}

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 mt-8">
            <p className="font-medium text-xl">
              {aboutData.callToAction.text} 
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                {aboutData.callToAction.highlight}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;