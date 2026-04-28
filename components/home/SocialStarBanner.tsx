"use client";

import Image from "next/image";
import { PostsIcon, FollowersIcon, LikesIcon, StatIcon } from "./Icons";

export const SocialStarBanner = () => (
  <section className="relative w-full max-w-[850px] overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#02451C_0%,#056C2B_35%,#01230D_100%)] flex items-center min-h-[130px] md:min-h-[160px] shadow-lg">
    {/* Background Star Element */}
    <div className="absolute left-2 md:left-auto md:right-12 top-1/2 -translate-y-1/2 w-[150px] h-[150px] pointer-events-none z-0">
      <Image
        src="/star.webp"
        alt="Star"
        fill
        className="object-contain"
        priority
      />
    </div>

    {/* Content Container */}
    <div className="relative z-10 w-full pl-[220px] pr-4 py-4 md:px-10 md:py-6 md:w-[65%] flex flex-col justify-center">
      {/* Heading */}
      <h2 className="text-[18px] md:text-[25px] font-bold text-white leading-[1.25] md:leading-[1.1] mb-2 tracking-tight">
        Be the Gamehok&apos;s
        <span className="md:hidden">
          <br />
        </span>
        <span className="hidden md:inline"> </span>
        <span className="text-[#f59e0b]">Social Star</span>
      </h2>

      {/* Description */}
      <p className="text-white/95 text-[14px] md:text-[15px] font-semibold mb-5 md:mb-6 mt-2 leading-[1.4] max-w-[180px] md:max-w-none">
        Earn rewards by levelling up
        <span className="md:hidden">
          <br />
        </span>
        <span className="hidden md:inline"> </span>
        your social game
      </p>

      {/* Stat Icons */}
      <div className="flex gap-4 md:gap-6">
        <StatIcon
          icon={<PostsIcon />}
          label="Posts"
          colorClass="border-[#00b4d8] text-[#00b4d8]"
        />
        <StatIcon
          icon={<FollowersIcon />}
          label="Followers"
          colorClass="border-[#f97316] text-[#f97316]"
        />
        <StatIcon
          icon={<LikesIcon />}
          label="Likes"
          colorClass="border-[#c084fc] text-[#c084fc]"
        />
      </div>
    </div>
  </section>
);
