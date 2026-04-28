"use client";

import Link from "next/link";
import { Share2 } from "lucide-react";

interface VideoCardProps {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoCard = ({ title, videoUrl, thumbnailUrl }: VideoCardProps) => (
  <Link
    href={videoUrl}
    target="_blank"
    className="block relative rounded-2xl overflow-hidden group border border-[#1b3523] bg-[#0a1a10]"
  >
    <div className="relative aspect-[16/9]">
      {/* Thumbnail Image */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center"></div>

      {/* Channel Badge (Top Left) */}
      <div className="absolute top-3 left-3 flex items-center z-20">
        <div className="w-8 h-8 rounded-full bg-[#0a1a10] border border-accent flex items-center justify-center shadow-md mr-2">
          <span className="font-black text-sm text-white">G</span>
        </div>
        <div className="bg-black/50 backdrop-blur rounded px-2 py-0.5">
          <p className="text-[10px] text-gray-200">Gamehok</p>
        </div>
      </div>

      {/* Share Icon (Bottom Left) */}
      <div className="absolute bottom-3 left-3 flex items-center z-20 text-white opacity-80 group-hover:opacity-100 transition-opacity">
        <Share2 size={16} className="rotate-90 scale-x-[-1]" />
      </div>
    </div>

    {/* Title Section */}
    <div className="p-4 bg-[#051109]">
      <h4 className="font-bold text-sm text-white">{title}</h4>
    </div>
  </Link>
);

export const WatchBestTournaments = () => (
  <section className="sticky top-[24px] space-y-4">
    {/* Header */}
    <h3 className="text-lg md:text-xl font-bold text-white mb-4">
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
