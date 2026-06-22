import Container from "../UI/Container";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsFolder2Open } from "react-icons/bs";
import { Link } from "react-scroll";
import { heroData } from "../../data/hero";
import HeroAvatar from "../UI/HeroAvatar";

interface HeroProps {
  theme?: string;
}

const Hero = ({ theme }: HeroProps) => {
  return (
    <Container
      id={"hero"}
      className="my-20 flex flex-col-reverse items-center gap-10 lg:my-30 lg:flex-row"
    >
      <div className="w-full space-y-5 text-center lg:text-left">
        <div>
          <p className="text-lg">Hey, i am</p>
          <h1 className="heading-font text-6xl font-bold lg:text-7xl xl:text-8xl">
            {heroData.name}
            <span className="animate-wave hidden origin-[70%_70%] md:inline-block">
              👋
            </span>
          </h1>
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
        <p className="px-5 text-lg md:w-2xl md:px-0">{heroData.description}</p>
        <div
          onContextMenu={(e) => {
            e.stopPropagation();
          }}
          className="flex items-center justify-center gap-10 py-4 text-4xl md:w-fit lg:justify-start [&>*]:cursor-pointer [&>*]:transition-transform [&>*]:duration-300 [&>*]:hover:scale-130 [&>*]:hover:drop-shadow-[0_0_15px]"
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
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            offset={-200}
            spy={true}
            isDynamic={true}
            activeClass="active"
          >
            <button className="btn flex items-center gap-2 rounded-3xl border border-white/20 bg-white/10 px-6 py-3 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <FiSend className="text-lg" />
              Let's Talk
            </button>
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-200}
            spy={true}
            isDynamic={true}
            activeClass="active"
          >
            <button className="btn border-base-300 bg-base-100/50 text-base-content hover:border-accent hover:bg-base-200 cursor-pointer gap-2 rounded-3xl border-2 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105">
              <BsFolder2Open className="text-lg" />
              View Projects
            </button>
          </Link>
        </div>
      </div>

      {/* avatar and icons */}
      <HeroAvatar />
    </Container>
  );
};

export default Hero;
