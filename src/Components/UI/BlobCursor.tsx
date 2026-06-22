"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function BlobCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useSpring(mouseX, { stiffness: 3000, damping: 60 });
  const dotY = useSpring(mouseY, { stiffness: 3000, damping: 60 });

  const ringX = useSpring(mouseX, { stiffness: 280, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 30 });

  const blobX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const blobY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Ambient blob (theme-aware glow) */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none fixed top-0 left-0 z-[9990] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="h-[180px] w-[180px] rounded-full opacity-30 blur-[90px]"
          style={{
            background:
              "conic-gradient(from 0deg, var(--color-accent), var(--color-primary), var(--color-secondary), var(--color-accent))",
            animation: "blobSpin 6s linear infinite",
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[9997] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`h-7 w-7 rounded-full border transition-all duration-200 ${
            isHovering
              ? "scale-50 border-accent"
              : "border-base-content/40"
          }`}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovering
              ? "h-3 w-3 bg-accent"
              : "h-2 w-2 bg-base-content"
          }`}
        />
      </motion.div>

      {/* Styles */}
      <style>{`
        @keyframes blobSpin {
          from { filter: blur(90px) hue-rotate(0deg); }
          to   { filter: blur(90px) hue-rotate(360deg); }
        }

        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}