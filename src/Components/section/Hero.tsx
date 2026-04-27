import React from "react";
import profileImg from "../../assets/profile-photo.jpg";
import Container from "../UI/Container";
import BlurText from "../UI/BlurText";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsFolder2Open } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpress } from "react-icons/si";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { Link } from "react-scroll";
import { FiFileText } from "react-icons/fi";
import { heroData } from "../../data/hero";

const Hero = () => {
  return (
    <Container
      id={"hero"}
      className="my-20 flex flex-col-reverse items-center gap-10 lg:my-30 lg:flex-row"
    >
      <div className="w-full space-y-4 text-center lg:text-left">
        <div>
          <p className="text-lg">Hi, i am</p>
          <BlurText
            text={heroData.name}
            delay={150}
            animateBy="words"
            direction="bottom"
            className="heading-font text-6xl font-bold lg:text-7xl xl:text-8xl"
          />
        </div>
        <p className="text-2xl">
          <Typewriter
            words={heroData.roles}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <p className="text-lg">{heroData.description}</p>
        <div
          onContextMenu={(e) => {
            e.stopPropagation();
          }}
          className="flex items-center justify-center gap-10 py-4 text-4xl duration-300 md:w-fit lg:justify-start [&>*]:cursor-pointer [&>*]:hover:drop-shadow-[0_0_15px]"
        >
          <a href={heroData.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={heroData.twitter} target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
        </div>

        <div className="flex justify-center gap-5 md:justify-start">
          <a
            href={heroData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary text-base-100 gap-2 rounded-3xl"
          >
            <FiFileText className="text-lg" />
            Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-200}
            spy={true}
            isDynamic={true}
            activeClass="active"
          >
            <button className="btn text-primary border-primary gap-2 rounded-3xl border-2">
              <BsFolder2Open className="text-lg" />
              View Projects
            </button>
          </Link>
        </div>
      </div>
      {/* avatar and icons */}
      <div className="relative">
        {/* Avatar container */}
        <div className="avatar relative z-10">
          <div className="z-10 mx-auto w-[300px] max-w-full p-5 xl:w-[400px]">
            <img
              className="h-auto w-full cursor-pointer rounded-full border-8 border-gray-100/10 object-top grayscale-90 filter hover:grayscale-40"
              src={(profileImg as any).src || profileImg}
              alt="Profile"
            />
          </div>

          {/* Glow Background */}
          <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl"></div>
        </div>

        {/* Icons layer */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* React - Top center */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 animate-pulse"
            style={{
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <FaReact className="text-4xl text-cyan-400 drop-shadow-lg md:text-5xl" />
          </div>

          {/* Tailwind CSS - Top right */}
          <div
            className="absolute top-[25%] right-4"
            style={{
              animation: "float 3.5s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <SiTailwindcss className="text-4xl text-sky-400 drop-shadow-lg md:text-5xl" />
          </div>

          {/* Firebase - Bottom right */}
          <div
            className="absolute top-6/10 left-2 -translate-y-1/2"
            style={{
              animation: "float 4s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <SiFirebase className="text-3xl text-yellow-500 drop-shadow-lg md:text-4xl" />
          </div>

          {/* Node.js - Bottom center */}
          <div
            className="absolute bottom-10 left-8/10 -translate-x-1/2"
            style={{
              animation: "float 3.2s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          >
            <FaNodeJs className="text-4xl text-green-600 drop-shadow-lg md:text-5xl" />
          </div>

          {/* Express - Bottom left */}
          <div
            className="absolute bottom-[3%] left-30"
            style={{
              animation: "float 3.8s ease-in-out infinite",
              animationDelay: "2s",
            }}
          >
            <SiExpress className="text-3xl text-gray-400 drop-shadow-lg md:text-4xl" />
          </div>

          {/* MongoDB - Top left */}
          <div
            className="absolute top-[20%] left-10"
            style={{
              animation: "float 3.3s ease-in-out infinite",
              animationDelay: "2.5s",
            }}
          >
            <SiMongodb className="text-4xl text-green-600 drop-shadow-lg md:text-5xl" />
          </div>

          {/* JavaScript - Left center */}
          <div
            className="absolute -right-0 bottom-[40%]"
            style={{
              animation: "float 3.7s ease-in-out infinite",
              animationDelay: "3s",
            }}
          >
            <SiJavascript className="rounded-lg text-3xl text-yellow-400 drop-shadow-lg md:text-4xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
