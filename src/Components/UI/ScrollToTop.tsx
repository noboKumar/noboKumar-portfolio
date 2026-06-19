"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="group fixed right-5 bottom-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-base-200/90 text-base-content border border-base-content/10 shadow-xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 md:right-10 md:bottom-10"
          aria-label="Scroll to top"
        >
          {/* SVG Scroll Progress Circle */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 p-1" viewBox="0 0 36 36">
            {/* Background circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-base-content/10"
              strokeWidth="2.5"
            />
            {/* Progress circle */}
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-accent"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {/* Button Content */}
          <div className="z-10 flex flex-col items-center justify-center gap-0.5 text-base-content text-center px-1">
            <FaArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span className="text-[10px] font-bold leading-none">Top</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
