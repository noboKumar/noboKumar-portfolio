"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface InteractiveGridBackgroundProps {
  theme: string;
}

// Static star/node positions — seeded so they never shift on re-render
const STAR_NODES = [
  { top: "8%", left: "12%", delay: "0s", dur: "6s", size: 3 },
  { top: "18%", left: "72%", delay: "1.8s", dur: "7s", size: 3 },
  { top: "32%", left: "28%", delay: "0.6s", dur: "8s", size: 2 },
  { top: "44%", left: "88%", delay: "3.2s", dur: "5s", size: 3 },
  { top: "56%", left: "50%", delay: "1.1s", dur: "9s", size: 2 },
  { top: "67%", left: "18%", delay: "2.5s", dur: "6s", size: 3 },
  { top: "75%", left: "65%", delay: "4s", dur: "7s", size: 2 },
  { top: "85%", left: "38%", delay: "0.3s", dur: "8s", size: 3 },
  { top: "14%", left: "45%", delay: "5s", dur: "6s", size: 2 },
  { top: "92%", left: "80%", delay: "2s", dur: "7s", size: 3 },
  { top: "38%", left: "6%", delay: "3.7s", dur: "9s", size: 2 },
  { top: "60%", left: "92%", delay: "1.4s", dur: "5s", size: 3 },
];

export default function InteractiveGridBackground({
  theme,
}: InteractiveGridBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 bg-base-100" />
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-base-100 transition-colors duration-500">

      {/* ── Blob Layer ───────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Blob 1 – top-left  (blue/indigo) */}
        <div
          className={cn(
            "absolute -top-[10%] -left-[10%] h-[800px] w-[800px]",
            "rounded-full blur-[150px] transition-colors duration-500 animate-float-blob-1",
            isDark ? "bg-blue-900/30" : "bg-indigo-100/60",
          )}
        />

        {/* Blob 2 – mid-right  (red/pink) */}
        <div
          className={cn(
            "absolute top-[30%] -right-[10%] h-[700px] w-[700px]",
            "rounded-full blur-[120px] transition-colors duration-500 animate-float-blob-2",
            isDark ? "bg-red-900/20" : "bg-pink-100/50",
          )}
        />
      </div>

      {/* ── Glassmorphic blend layer ──────────────────────────────── */}
      <div className="absolute inset-0 backdrop-blur-[80px] bg-base-100/10" />

      {/* ── Grid Pattern ─────────────────────────────────────────── */}
      <div className="absolute inset-0 hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="portfolio-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              {/* Grid lines */}
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={
                  isDark
                    ? "rgba(71, 85, 105, 0.45)"
                    : "rgba(203, 213, 225, 0.8)"
                }
                strokeWidth="1"
              />
              {/* Corner dot */}
              <circle
                cx="0"
                cy="0"
                r="1.2"
                fill={
                  isDark
                    ? "rgba(100, 116, 139, 0.35)"
                    : "rgba(148, 163, 184, 0.5)"
                }
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
        </svg>

        {/* Radial vignette mask – edges fade out */}
        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "[mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] bg-base-100/40"
              : "[mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] bg-base-100/40",
          )}
        />
      </div>

      {/* ── Twinkling Stars (subtle blink) ───────────────────────── */}
      <div className="absolute inset-0 hidden lg:block">
        {STAR_NODES.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-star-blink"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: s.delay,
              animationDuration: s.dur,
              background: isDark
                ? "rgba(129, 140, 248, 0.7)"
                : "rgba(79, 70, 229, 0.55)",
              boxShadow: isDark
                ? `0 0 6px 1px rgba(129, 140, 248, 0.35)`
                : `0 0 5px 1px rgba(79, 70, 229, 0.25)`,
            }}
          />
        ))}
      </div>

    </div>
  );
}
