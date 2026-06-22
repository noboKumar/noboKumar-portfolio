"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BlobCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // Dot — snaps instantly to mouse
  const dotX = useSpring(mouseX, { stiffness: 3000, damping: 60 });
  const dotY = useSpring(mouseY, { stiffness: 3000, damping: 60 });

  // Ring — follows with slight lag
  const ringX = useSpring(mouseX, { stiffness: 280, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 30 });

  // Blob — very lazy drift
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
      {/* Ambient blob — large, slow, dreamy */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none fixed top-0 left-0 z-[9990] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="h-[180px] w-[180px] rounded-full opacity-30 blur-[90px]"
          style={{
            background:
              "conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #a855f7, #8b5cf6)",
            animation: "blobSpin 6s linear infinite",
          }}
        />
      </motion.div>

      {/* Ring — mid-speed follower */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[9997] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`h-7 w-7 rounded-full border transition-all duration-200 ${
            isHovering ? "scale-50 border-purple-400/80" : "border-white/40"
          }`}
        />
      </motion.div>

      {/* Dot — instant, always on top */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ${
            isHovering ? "h-3 w-3 bg-purple-400" : "h-2 w-2"
          }`}
        />
      </motion.div>

      <style>{`
        @keyframes blobSpin {
          from { filter: blur(90px) hue-rotate(0deg); }
          to   { filter: blur(90px) hue-rotate(360deg); }
        }
        * { cursor: none !important; }
      `}</style>
    </>
  );
}
