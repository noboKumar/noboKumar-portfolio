import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { heroData } from "../../data/hero";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content bg-base-200 gap-5 border-t border-gray-500/80 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          @{heroData.name.replace(" ", "")}
        </p>
      </aside>
      <div className="inline-flex items-center gap-6 text-2xl">
        <a
          href={heroData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gray-500"
        >
          <FaGithub />
        </a>
        <a
          href={heroData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href={heroData.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-sky-500"
        >
          <BsTwitterX />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
