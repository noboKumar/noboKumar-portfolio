"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Lock, Globe } from "lucide-react";

interface ProjectImageSliderProps {
  photos?: string[];
  photoLabels?: string[];
  title: string;
  fallbackPhoto: string;
  liveUrl?: string;
}

export default function ProjectImageSlider({
  photos = [],
  photoLabels = [],
  title,
  fallbackPhoto,
  liveUrl,
}: ProjectImageSliderProps) {
  // Use fallbacks if photos are empty
  const listPhotos = photos.length > 0 ? photos : [fallbackPhoto];
  const listLabels = photoLabels.length > 0
    ? photoLabels
    : listPhotos.map((_, i) => `Page ${i + 1}`);

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = listPhotos.length;

  // Use real live URL from project data, fallback to generated slug
  const domainSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const displayUrl = liveUrl ?? `https://www.${domainSlug}.com`;

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + total) % total);
  };

  const handleTabClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Common browser top bar render function
  const renderTopBar = (showTabs = false) => {
    if (!showTabs) {
      return (
        <div className="flex items-center gap-3 bg-[#16161a] px-4 py-3 border-b border-gray-800">
          {/* macOS circles */}
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {/* Address Bar */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-1.5 bg-[#0f0f11] text-gray-400 text-xs px-4 py-1.5 rounded-lg w-[260px] shrink-0 border border-gray-800/50">
              <Lock size={12} className="text-green-500 shrink-0" />
              <span className="truncate select-none w-full text-left">
                {displayUrl}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center bg-[#141416] border-b border-gray-800/80 overflow-x-auto no-scrollbar scroll-smooth">
        {/* macOS Style Window Controls */}
        <div className="flex gap-1.5 px-4 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Dynamic Browser Tabs */}
        <div className="flex items-end flex-1 h-10 px-2 select-none overflow-x-auto no-scrollbar">
          {listLabels.map((label, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => handleTabClick(idx)}
                className={`relative flex items-center gap-2 h-9 px-4 text-xs font-medium rounded-t-lg transition-all duration-300 cursor-pointer shrink-0 border-t border-x ${isActive
                    ? "bg-[#0f0f11] text-white border-gray-800 border-b-[#0f0f11] z-10"
                    : "bg-[#18181c]/50 text-gray-500 border-transparent hover:bg-[#18181c] hover:text-gray-300"
                  }`}
              >
                <Globe size={11} className={isActive ? "text-indigo-400" : "text-gray-600"} />
                <span className="max-w-[120px] truncate">{label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Handle single photo edge-case
  if (total <= 1) {
    return (
      <div className="relative w-full rounded-2xl border border-gray-800 bg-[#0f0f11] shadow-2xl overflow-hidden group">
        {renderTopBar(false)}
        {/* Image Display */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0f0f11]">
          <img
            src={listPhotos[0]}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl border border-gray-800/80 bg-[#0f0f11] shadow-2xl overflow-hidden group font">
      {/* 1. Browser Window Tabs */}
      {renderTopBar(true)}

      {/* 2. Browser Navigation & Address Bar */}
      <div className="flex items-center gap-3 bg-[#1a1a1e] px-4 py-2.5 border-b border-gray-800/60 select-none">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            className="p-1 rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Address Bar with Lock */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-[#0f0f11] text-gray-400 text-xs px-4 py-1.5 rounded-lg w-[260px] shrink-0 border border-gray-800/50">
            <Lock size={12} className="text-green-500 shrink-0" />
            <span className="truncate text-gray-300 font-mono tracking-wide w-full text-left">
              {displayUrl}
            </span>
          </div>
        </div>

        {/* Page Badge */}
        <div className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-900/60 px-2 py-0.5 rounded shrink-0">
          PAGE {currentIndex + 1} / {total}
        </div>
      </div>

      {/* 3. Viewport (Instant Switch) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0f0f11] select-none">
        <img
          src={listPhotos[currentIndex]}
          alt={`${title} - page ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top"
        />

        {/* Standard Overlay Navigation Dots */}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-800/80">
            {listPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex
                    ? "bg-indigo-500 scale-125"
                    : "bg-gray-500 hover:bg-gray-300"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
