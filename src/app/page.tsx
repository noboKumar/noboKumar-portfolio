"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../Components/UI/NavBar";
import Hero from "../Components/section/Hero";
import About from "../Components/section/About";
import { cn } from "../lib/utils";
import Skills from "../Components/section/Skills";
import Education from "../Components/section/Education";
import Projects from "../Components/section/Projects";
import Contact from "../Components/section/Contact";
import Footer from "../Components/section/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
      {/*Background Layer - Fixed Blobs*/}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Deep Dark Blue Blob */}
        <div className="absolute top-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full bg-blue-900/30 blur-[150px]" />

        {/* Dark Reddish Blob */}
        <div className="absolute top-[30%] right-[-10%] h-[700px] w-[700px] rounded-full bg-red-900/20 blur-[120px]" />

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-base-100/10 backdrop-blur-[80px]" />
      </div>

      {/*Background Layer - Scrolling Grid*/}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Grid Pattern */}
        <div
          className={cn(
            "absolute inset-0 opacity-[0.2]",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#525252_1px,transparent_1px),linear-gradient(to_bottom,#525252_1px,transparent_1px)]",
            "hidden lg:block [data-theme=dark]:[background-image:linear-gradient(to_right,#475569_1px,transparent_1px),linear-gradient(to_bottom,#475569_1px,transparent_1px)]",
          )}
        />

        {/* Radial gradient mask for depth */}
        <div className="absolute inset-0 bg-base-100/40 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      </div>
      {/*Foreground Content Layer*/}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <NavBar theme={theme} setTheme={setTheme} />
        <Hero />
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Education />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
