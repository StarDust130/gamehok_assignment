"use client";

import Image from "next/image";
import { StatIcon } from "./Icons";

export const SocialStarBanner = () => (
  <section className="relative w-full max-w-[850px] overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#02451C_0%,#056C2B_35%,#01230D_100%)] flex items-center min-h-[130px] md:min-h-[160px] shadow-lg">
    {/* Background Star Element */}
    <div className="absolute left-3 md:left-auto md:right-12 top-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[150px] md:h-[150px] pointer-events-none z-0">
      <Image
        src="/star.webp"
        alt="Star"
        fill
        className="object-contain"
        priority
      />
    </div>

    {/* Content Container */}
    <div className="relative z-10 w-full pl-[200px] pr-4 py-4 md:px-10 md:py-6 md:w-[65%] flex flex-col justify-center">
      {/* Heading */}
      <h2 className="text-[16px] md:text-[25px] font-bold text-white leading-[1.25] md:leading-[1.1] mb-2 tracking-tight">
        Be the Gamehok&apos;s
        <span className="md:hidden">
          <br />
        </span>
        <span className="hidden md:inline"> </span>
        <span className="text-[#f59e0b]">Social Star</span>
      </h2>

      {/* Description */}
      <p className="text-white/95 text-[12px] md:text-[15px] font-semibold mb-4 md:mb-6 mt-1 md:mt-2 leading-[1.4] max-w-[180px] md:max-w-none">
        Earn rewards by levelling up
        <span className="md:hidden">
          <br />
        </span>
        <span className="hidden md:inline"> </span>
        your social game
      </p>

      {/* Stat Icons */}
      <div className="flex gap-2 md:gap-6">
        <StatIcon
          icon={<Image src="/posts.webp" alt="Posts" width={24} height={24} />}
          label="Posts"
          colorClass="border-[#00b4d8] text-[#00b4d8]"
        />
        <StatIcon
          icon={
            <Image
              src="/followers.webp"
              alt="Followers"
              width={24}
              height={24}
              priority
            />
          }
          label="Followers"
          colorClass="border-[#f97316] text-[#f97316]"
        />
        <StatIcon
          icon={
            <Image
              src="/likes.webp"
              alt="Likes"
              width={24}
              height={24}
              priority
            />
          }
          label="Likes"
          colorClass="border-[#c084fc] text-[#c084fc]"
        />
      </div>
    </div>
  </section>
);
