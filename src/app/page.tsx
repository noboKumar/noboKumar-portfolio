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
        {/* Deep Dark/Light Blue Blob */}
        <div
          className={cn(
            "absolute top-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full blur-[150px] transition-colors duration-500",
            theme === "light" ? "bg-indigo-100/60" : "bg-blue-900/30",
          )}
        />

        {/* Dark/Light Reddish Blob */}
        <div
          className={cn(
            "absolute top-[30%] right-[-10%] h-[700px] w-[700px] rounded-full blur-[120px] transition-colors duration-500",
            theme === "light" ? "bg-pink-100/50" : "bg-red-900/20",
          )}
        />

        {/* Glass Overlay */}
        <div className="bg-base-100/10 absolute inset-0 backdrop-blur-[80px]" />
      </div>

      {/*Background Layer - Scrolling Grid*/}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 hidden [background-size:40px_40px] opacity-[0.2] lg:block"
          style={{
            backgroundImage:
              theme === "light"
                ? "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)"
                : "linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)",
          }}
        />

        {/* Radial gradient mask for depth */}
        <div className="bg-base-100/40 absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      </div>
      {/*Foreground Content Layer*/}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <NavBar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <div data-aos="fade-up">
          <About theme={theme} />
        </div>
        <div data-aos="fade-up">
          <Skills theme={theme} />
        </div>
        <div data-aos="fade-up">
          <Education />
        </div>
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
