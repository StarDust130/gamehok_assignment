"use client";

import Image from "next/image";
import { Irish_Grover } from "next/font/google";

// Initialize custom font
const irishGrover = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const BouncyBirdPromo = () => (
  <section className="relative w-[calc(100%-2rem)] w-full h-[150px] md:hidden my-4 rounded-2xl overflow-hidden block cursor-pointer">
    {/* Background Layer */}
    <Image
      src="/bg.webp"
      alt="Sky Background"
      fill
      className="object-cover absolute inset-0 z-0 pointer-events-none"
      priority
    />

    {/* Content Layer */}
    <div className="relative z-10 w-full h-full p-4 pl-5">
      {/* Left Column: Typography */}
      <div className="flex flex-col h-full w-[65%] min-w-[200px]">
        <h3 className="text-[14px] font-bold text-[#1f1a54] leading-none mb-[2px]">
          Introducing
        </h3>

        <h2
          className={`${irishGrover.className} text-[28px] text-[#9a4511] leading-[1.1] mb-[2px]`}
        >
          BOUNCY BIRD
        </h2>

        <p className="text-[#8b3dff] font-bold text-[13px] leading-none mb-auto">
          A game for everyone
        </p>

        {/* Footer Text & Coin Icon */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-black font-bold text-[14px]">
            Play daily, win weekly
          </span>
          <Image
            src="/coin.webp"
            alt="Coin"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bird Asset */}
      <div className="absolute top-[10px] right-[15px] w-[120px] h-[70px] pointer-events-none">
        <Image
          src="/bird.webp"
          alt="Bouncy Bird"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Play Button */}
      <button className="absolute bottom-[16px] right-[20px] bg-gradient-to-b from-[#4ade80] to-[#16a34a] border-[2px] border-white text-white font-black py-1.5 px-8 rounded-full text-[16px] shadow-[0_4px_0_#6b4e33] active:translate-y-[4px] active:shadow-none transition-transform">
        Play
      </button>
    </div>
  </section>
);
