"use client";

import React from "react";
import Image from "next/image";
import profileImg from "../../assets/profile-photo.jpg";

import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

import { cn } from "../../lib/utils";

interface HeroAvatarProps {
  theme?: string;
}

const HeroAvatar = ({ theme }: HeroAvatarProps) => {
  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[400px] md:w-[400px]">
      {/* Orbital ring 1 */}
      <div
        className="absolute hidden rounded-full md:block"
        style={{
          width: 470,
          height: 470,
          top: "50%",
          left: "50%",
          border: "1px dashed rgba(168,85,247,0.25)",
          animation: "spin-outer 28s linear infinite",
        }}
      />

      {/* Orbital ring 2 */}
      <div
        className="absolute hidden rounded-full md:block"
        style={{
          width: 390,
          height: 390,
          top: "50%",
          left: "50%",
          border: "1px dashed rgba(6,182,212,0.2)",
          animation: "spin-outer 20s linear infinite reverse",
        }}
      />

      {/* Avatar */}
      <div
        className="avatar absolute z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="z-10 mx-auto w-[280px] max-w-full p-5 md:w-[350px]">
          <Image
            className="h-auto w-full cursor-pointer rounded-full border-8 border-gray-100/10 object-top grayscale-10 filter"
            src={profileImg}
            alt="Profile"
            priority
            placeholder="blur"
          />
        </div>

        <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl" />
      </div>

      {/* Floating Icons */}
      <div
        className="pointer-events-none absolute z-20 hidden md:block"
        style={{
          width: 390,
          height: 390,
          top: "50%",
          left: "50%",
          marginTop: -195,
          marginLeft: -195,
        }}
      >
        {/* React */}
        <div
          className="absolute"
          style={{
            top: -4,
            left: "40%",
            transform: "translateX(-50%)",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <FaReact className="text-4xl text-cyan-400 drop-shadow-lg md:text-5xl" />
        </div>

        {/* Tailwind */}
        <div
          className="absolute"
          style={{
            top: "15%",
            right: 30,
            animation: "float 3.5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          <SiTailwindcss className="text-4xl text-sky-400 drop-shadow-lg md:text-5xl" />
        </div>

        {/* TypeScript */}
        <div
          className="absolute"
          style={{
            top: "50%",
            right: -4,
            transform: "translateY(-50%)",
            animation: "float 3.7s ease-in-out infinite",
            animationDelay: "3s",
          }}
        >
          <SiTypescript className="text-3xl text-blue-500 drop-shadow-lg md:text-4xl" />
        </div>

        {/* Next.js */}
        <div
          className="absolute"
          style={{
            bottom: "10%",
            right: 30,
            animation: "float 3.2s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        >
          <TbBrandNextjs
            className={cn(
              "text-4xl drop-shadow-lg md:text-5xl",
              theme === "light" ? "text-slate-950" : "text-white",
            )}
          />
        </div>

        {/* Express */}
        <div
          className="absolute"
          style={{
            bottom: -4,
            left: "45%",
            transform: "translateX(-50%)",
            animation: "float 3.8s ease-in-out infinite",
            animationDelay: "2s",
          }}
        >
          <SiExpress
            className={cn(
              "text-3xl drop-shadow-lg md:text-4xl",
              theme === "light" ? "text-slate-950" : "text-gray-400",
            )}
          />
        </div>

        {/* PostgreSQL */}
        <div
          className="absolute"
          style={{
            bottom: "25%",
            left: 10,
            animation: "float 3.3s ease-in-out infinite",
            animationDelay: "2.5s",
          }}
        >
          <BiLogoPostgresql className="text-4xl text-blue-500 drop-shadow-lg md:text-5xl" />
        </div>

        {/* Prisma */}
        <div
          className="absolute"
          style={{
            top: "20%",
            left: 20,
            transform: "translateY(-50%)",
            animation: "float 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <SiPrisma
            className={cn(
              "text-3xl drop-shadow-lg md:text-4xl",
              theme === "light" ? "text-slate-950" : "text-white",
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAvatar;
