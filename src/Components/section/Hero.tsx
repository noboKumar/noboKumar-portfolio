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
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { Link } from "react-scroll";
import { FiFileText } from "react-icons/fi";
import { heroData } from "../../data/hero";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

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
        <p className="px-5 md:px-0 text-lg md:w-2xl">{heroData.description}</p>
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
      <div className="relative flex h-[400px] w-[400px] items-center justify-center">
        {/* Orbital ring 1 - outer dashed purple */}
        <div
          className="absolute hidden rounded-full md:block"
          style={{
            width: 470,
            height: 470,
            top: "50%",
            left: "50%",
            border: "1px dashed rgba(168,85,247,0.25)",
            animation: "spin-outer 28s linear infinite",
          }}
        />

        {/* Orbital ring 2 - inner dashed cyan */}
        <div
          className="absolute hidden rounded-full md:block"
          style={{
            width: 390,
            height: 390,
            top: "50%",
            left: "50%",
            border: "1px dashed rgba(6,182,212,0.2)",
            animation: "spin-outer 20s linear infinite reverse",
          }}
        />

        {/* Avatar — unchanged */}
        <div
          className="avatar absolute z-10"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="z-10 mx-auto w-[350px] max-w-full p-5">
            <img
              className="h-auto w-full cursor-pointer rounded-full border-8 border-gray-100/10 object-top grayscale-10 filter"
              src={(profileImg as any).src || profileImg}
              alt="Profile"
            />
          </div>
          <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl" />
        </div>

        {/* Icons layer — your original float logic, repositioned around the ring */}
        <div
          className="pointer-events-none absolute z-20 hidden md:block"
          style={{
            width: 390,
            height: 390,
            top: "50%",
            left: "50%",
            marginTop: -195,
            marginLeft: -195,
          }}
        >
          {/* React - Top center */}
          <div
            className="absolute"
            style={{
              top: -4,
              left: "40%",
              transform: "translateX(-50%)",
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <FaReact className="text-4xl text-cyan-400 drop-shadow-lg md:text-5xl" />
          </div>

          {/* Tailwind - Top right */}
          <div
            className="absolute"
            style={{
              top: "15%",
              right: 30,
              animation: "float 3.5s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <SiTailwindcss className="text-4xl text-sky-400 drop-shadow-lg md:text-5xl" />
          </div>

          {/* TypeScript - Right center */}
          <div
            className="absolute"
            style={{
              top: "50%",
              right: -4,
              transform: "translateY(-50%)",
              animation: "float 3.7s ease-in-out infinite",
              animationDelay: "3s",
            }}
          >
            <SiTypescript className="rounded-lg text-3xl text-blue-500 drop-shadow-lg md:text-4xl" />
          </div>

          {/* Next.js - Bottom right */}
          <div
            className="absolute"
            style={{
              bottom: "10%",
              right: 30,
              animation: "float 3.2s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          >
            <TbBrandNextjs className="text-4xl text-white drop-shadow-lg md:text-5xl" />
          </div>

          {/* Express - Bottom center */}
          <div
            className="absolute"
            style={{
              bottom: -4,
              left: "45%",
              transform: "translateX(-50%)",
              animation: "float 3.8s ease-in-out infinite",
              animationDelay: "2s",
            }}
          >
            <SiExpress className="text-3xl text-gray-400 drop-shadow-lg md:text-4xl" />
          </div>

          {/* PostgreSQL - Bottom left */}
          <div
            className="absolute"
            style={{
              bottom: "25%",
              left: 10,
              animation: "float 3.3s ease-in-out infinite",
              animationDelay: "2.5s",
            }}
          >
            <BiLogoPostgresql className="text-4xl text-blue-500 drop-shadow-lg md:text-5xl" />
          </div>

          {/* Prisma - Left center */}
          <div
            className="absolute"
            style={{
              top: "20%",
              left: 20,
              transform: "translateY(-50%)",
              animation: "float 4s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <SiPrisma className="text-3xl text-white drop-shadow-lg md:text-4xl" />
          </div>
        </div>

        <style>{`
    @keyframes spin-outer {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to   { transform: translate(-50%, -50%) rotate(360deg); }
    }
  `}</style>
      </div>
    </Container>
  );
};

export default Hero;
