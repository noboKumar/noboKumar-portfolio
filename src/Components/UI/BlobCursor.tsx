"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BlobCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 140, damping: 18 });
  const y = useSpring(mouseY, { stiffness: 140, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "50% 60% 30% 60% / 30% 40% 70% 50%",
            "40% 70% 60% 30% / 70% 50% 40% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-28 w-28 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-40 blur-2xl"
      />
    </motion.div>
  );
}
