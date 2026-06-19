"use client";

import React from "react";
import { Lock } from "lucide-react";
import Image from "next/image";

interface ProjectImageSliderProps {
  photos?: string[];
  photoLabels?: string[];
  title: string;
  fallbackPhoto: string;
  liveUrl?: string;
}

export default function ProjectImageSlider({
  photos = [],
  title,
  fallbackPhoto,
  liveUrl,
}: ProjectImageSliderProps) {
  // Always use the primary photo (fallbackPhoto or the first element of photos)
  const mainPhoto = fallbackPhoto || photos[0];

  // Generate a display URL slug based on the title if liveUrl is not defined
  const domainSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const displayUrl = liveUrl ?? `https://www.${domainSlug}.com`;

  return (
    <div className="relative w-full rounded-2xl border border-gray-800 bg-[#0f0f11] shadow-2xl overflow-hidden group font">
      {/* Browser Top Bar Mockup */}
      <div className="flex items-center gap-3 bg-[#16161a] px-4 py-3 border-b border-gray-800">
        {/* macOS Style Window Circles */}
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        {/* Address Bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-1.5 bg-[#0f0f11] text-gray-400 text-xs px-4 py-1.5 rounded-lg w-[260px] shrink-0 border border-gray-800/50">
            <Lock size={12} className="text-green-500 shrink-0" />
            <span className="truncate select-none w-full text-left font-mono tracking-wide text-gray-300">
              {displayUrl}
            </span>
          </div>
        </div>
      </div>

      {/* Viewport - Single Photo Display */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0f0f11] select-none">
        <Image
          src={mainPhoto}
          alt={title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
