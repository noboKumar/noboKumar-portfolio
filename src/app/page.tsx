"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../Components/UI/NavBar";
import Hero from "../Components/section/Hero";
import About from "../Components/section/About";
import Skills from "../Components/section/Skills";
import Education from "../Components/section/Education";
import Projects from "../Components/section/Projects";
import Contact from "../Components/section/Contact";
import Footer from "../Components/section/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollDown from "../Components/UI/ScrollDown";
import InteractiveGridBackground from "../Components/UI/InteractiveGridBackground";

export default function PortfolioPage() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Access localStorage only on the client
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    lenis.on("scroll", () => {
      Aos.refresh();
    });

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="font bg-base-100 relative min-h-screen w-full"
      data-theme={theme}
    >
      {/* Interactive Grid & Aurora Background */}
      <InteractiveGridBackground theme={theme} />
      {/*Foreground Content Layer*/}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <NavBar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <ScrollDown></ScrollDown>
        <div data-aos="fade-up">
          <About theme={theme} />
        </div>
        <div data-aos="fade-up">
          <Skills theme={theme} />
        </div>
        {/* <div data-aos="fade-up">
          <Education />
        </div> */}
        <div data-aos="fade-up">
          <Projects theme={theme} />
        </div>
        <div data-aos="fade-up">
          <Contact theme={theme} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
