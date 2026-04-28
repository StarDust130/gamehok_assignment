"use client";

import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

interface VideoCardProps {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoCard = ({ title, videoUrl, thumbnailUrl }: VideoCardProps) => (
  <div className="flex flex-col gap-2.5">
    <Link
      href={videoUrl}
      target="_blank"
      className="block relative rounded-xl md:rounded-2xl overflow-hidden group border border-[#1b3523] bg-[#050C08] shadow-lg"
    >
      <div className="relative aspect-[16/9]">
        {/* Thumbnail Image */}
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Shadow Overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70 z-10 pointer-events-none"></div>

        {/* Top Left: YouTube-style Header Overlay */}
        <div className="absolute top-3 left-3 flex items-start gap-3 z-20">
          {/* Channel Logo Approximation */}
          <div className="w-10 h-10 rounded-full bg-[#023e16] flex items-center justify-center shrink-0 shadow-md">
            <span className="font-black text-xl text-[#00d26a]">G</span>
          </div>
          <div className="flex flex-col drop-shadow-md pt-0.5">
            <span className="text-white font-bold text-[15px] leading-tight tracking-wide">
              {title}
            </span>
            <span className="text-white/80 text-[12px] font-medium mt-0.5">
              Gamehok
            </span>
          </div>
        </div>

        {/* Center: Red YouTube Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-xl flex items-center justify-center group-hover:bg-[#f00] transition-colors shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bottom Left: Link Icon Wrapper */}
        <div className="absolute bottom-3 left-3 z-20">
          <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/70 transition-colors">
            <LinkIcon size={18} className="text-white" />
          </div>
        </div>

        {/* Bottom Right: Watch on YouTube Watermark */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className="bg-[#111]/80 backdrop-blur-md rounded-md px-3 py-2 flex items-center gap-1.5 border border-white/5">
            <span className="text-white text-[13px] font-medium tracking-tight">
              Watch on
            </span>
            {/* SVG YouTube Logo icon */}
            <svg
              width="60"
              height="14"
              viewBox="0 0 90 20"
              fill="white"
              className="mt-[1px]"
            >
              <path
                d="M88.6 4.34c-1.04-3.89-4.04-6.89-7.93-7.93C73.68-5 45-5 45-5s-28.68 0-35.67 1.41C5.44-2.55 2.44.45 1.4 4.34 0 11.32 0 20 0 20s0 8.68 1.4 15.66c1.04 3.89 4.04 6.89 7.93 7.93C16.32 45 45 45 45 45s28.68 0 35.67-1.41c3.89-1.04 6.89-4.04 7.93-7.93C90 28.68 90 20 90 20s0-8.68-1.4-15.66z"
                fill="#FF0000"
                transform="scale(0.35) translate(0, 5)"
              />
              <path
                d="M36 30L60 16 36 2z"
                fill="white"
                transform="scale(0.35) translate(0, 5)"
              />
              <text
                x="35"
                y="14"
                fill="white"
                fontSize="16"
                fontWeight="bold"
                letterSpacing="-0.5"
              >
                YouTube
              </text>
            </svg>
          </div>
        </div>
      </div>
    </Link>

    {/* External Title Placement */}
    <h4 className="font-extrabold text-[14px] text-white tracking-wide ml-1">
      {title}
    </h4>
  </div>
);

export const WatchBestTournaments = () => (
  <section className="sticky top-[24px] space-y-5">
    {/* Header */}
    <h3 className="text-[18px] md:text-[22px] font-extrabold text-white tracking-wide mb-1">
      Watch The Best of Tournaments
    </h3>

    {/* Video Cards */}
    <VideoCard
      title="Call of Duty"
      videoUrl="https://youtu.be/2-Pe0-8A9O8?si=-NLcjYp-tcI-v7hx"
      thumbnailUrl="https://i.ytimg.com/vi/2-Pe0-8A9O8/hqdefault.jpg"
    />

    <VideoCard
      title="BGMI Tournament"
      videoUrl="https://youtu.be/90EmKhWGDa4?si=_HaPZDeafkAVtYZH"
      thumbnailUrl="https://i.ytimg.com/vi/90EmKhWGDa4/hqdefault.jpg"
    />
  </section>
);
