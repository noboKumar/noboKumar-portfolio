import React from "react";
import LogoPng from "../../assets/NK-logo.png";
import { Link } from "react-scroll";
import Image from "next/image";

interface LogoProps {
  theme: string;
}

const Logo = ({ theme }: LogoProps) => {
  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      offset={-200}
      spy={true}
      activeClass="active"
    >
      <div
        className={`w-10 md:px-5 md:py-5 md:w-25 ${theme === "light" ? "invert" : ""}`}
      >
        <Image width={40} height={40} src={LogoPng} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
