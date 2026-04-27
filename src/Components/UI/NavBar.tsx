import React from "react";
import Logo from "./Logo";
import Container from "./Container";
import { MdOutlineFileDownload } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { navLinks } from "../../data/navigation";

interface NavBarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const NavBar = ({ theme, setTheme }: NavBarProps) => {
  const NavLinks = (
    <>
      {navLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            smooth={true}
            duration={500}
            offset={link.offset}
            spy={true}
            isDynamic={true}
            activeClass="active"
            className="rounded-md px-3 py-2 transition-colors duration-300 cursor-pointer"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <Container className="navbar bg-base-200/80 backdrop-blur-md sticky top-0 z-50 w-full px-5 py-1 shadow-sm md:top-10 md:w-10/12 md:rounded-full md:px-10 border border-white/5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <span className="cursor-pointer">
          <Logo theme={theme}></Logo>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1 text-lg">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <ToggleTheme theme={theme} setTheme={setTheme}></ToggleTheme>
        <a
          href="https://drive.google.com/uc?export=download&id=1g9NcDLC_h0j8CItZ3251ID0OVQxbzgQ0"
          download
          className="btn btn-primary inline-flex items-center px-2 text-sm md:px-4"
        >
          <MdOutlineFileDownload size={20} />
          Resume
        </a>
      </div>
    </Container>
  );
};

export default NavBar;
