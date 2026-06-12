"use client";

import React from "react";
import Container from "../UI/Container";
import TechIcons from "../UI/TechIcons";
import { skillCategories, skillDetailsMap } from "../../data/skills";
import { cn } from "../../lib/utils";

interface SkillsProps {
  theme?: string;
}

const Skills = ({ theme }: SkillsProps) => {
  return (
    <Container id={"skills"} className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-semibold">
          What I Work With
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className={cn(
            "bg-clip-text text-transparent bg-gradient-to-r",
            theme === "light"
              ? "from-slate-950 via-slate-700 to-slate-500"
              : "from-white via-gray-200 to-gray-500"
          )}>
            Skills & Technologies
          </span>
        </h2>
        <p className={cn(
          "max-w-lg mx-auto text-sm md:text-base",
          theme === "light" ? "text-slate-500" : "text-gray-500"
        )}>
          Technologies I use to bring ideas to life — from pixel-perfect
          frontends to scalable backend systems.
        </p>
      </div>

      {/* Marquee */}
      <div className="text-7xl">
        <TechIcons theme={theme} />
      </div>

      {/* What I Offer — Category Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, idx) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={idx}
              className={cn(
                "group relative rounded-2xl border p-6 transition-all duration-500 backdrop-blur-md",
                theme === "light"
                  ? "border-slate-200/60 bg-white/40 hover:border-slate-300 hover:bg-white/60 hover:shadow-lg hover:shadow-indigo-500/5"
                  : "border-white/10 bg-base-200/20 hover:border-indigo-500/30 hover:bg-base-200/40 hover:shadow-2xl hover:shadow-indigo-500/5"
              )}
            >
              {/* Hover gradient shimmer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 20% 20%, ${category.iconColor}08, transparent 70%)`,
                }}
              />

              {/* Header */}
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500"
                  style={{
                    backgroundColor: `${category.iconColor}15`,
                    boxShadow: `0 0 0px ${category.iconColor}00`,
                  }}
                >
                  <CategoryIcon
                    size={22}
                    color={category.iconColor}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className={cn(
                  "text-lg font-semibold tracking-tight",
                  theme === "light" ? "text-slate-900" : "text-white"
                )}>
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className={cn(
                "relative z-10 text-sm mb-4 leading-relaxed",
                theme === "light" ? "text-slate-500" : "text-gray-500"
              )}>
                {category.description}
              </p>

              {/* Skill Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const detail = skillDetailsMap[skill];
                  const Icon = detail?.icon;
                  let color = detail?.color || "#888888";
                  // Swap pure-white colors in light mode
                  if (color === "#FFFFFF" && theme === "light") {
                    color = "#0f172a";
                  }
                  return (
                    <div
                      key={sIdx}
                      className={cn(
                        "group/item flex items-center gap-2 p-1.5 pr-3 rounded-xl border transition-all duration-300 cursor-default",
                        theme === "light"
                          ? "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-indigo-300/50 hover:bg-slate-100 hover:text-slate-900"
                          : "border-gray-800/60 bg-base-300/20 text-gray-300 hover:border-indigo-500/30 hover:bg-base-300/50 hover:text-white"
                      )}
                    >
                      <div className={cn(
                        "flex items-center justify-center w-7 h-7 rounded-lg border transition-all duration-300",
                        theme === "light"
                          ? "bg-white border-slate-200 group-hover/item:border-indigo-200 group-hover/item:bg-slate-50"
                          : "bg-slate-900/60 border-gray-800/80 group-hover/item:border-indigo-500/20 group-hover/item:bg-slate-900"
                      )}>
                        {Icon && (
                          <Icon
                            size={14}
                            color={color}
                            className="transition-transform duration-300 group-hover/item:scale-110"
                          />
                        )}
                      </div>
                      <span className={cn(
                        "text-xs font-medium transition-colors duration-300",
                        theme === "light"
                          ? "group-hover/item:text-slate-900"
                          : "group-hover/item:text-white"
                      )}>
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
