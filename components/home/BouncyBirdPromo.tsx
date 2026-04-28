"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Irish_Grover } from "next/font/google";

// Initialize custom font
const irishGrover = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const BouncyBirdPromo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(false);

  // Prevent background scrolling when game is in full screen
  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPlaying]);

  return (
    <>
      {/* FULL SCREEN GAME OVERLAY */}
      {isPlaying && (
        <div className="fixed inset-0 z-9999 w-screen h-screen bg-[radial-gradient(circle_at_top,#123d25_0%,#050c08_55%,#020605_100%)] flex flex-col animate-in fade-in zoom-in-95 duration-300">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 left-8 h-48 w-48 rounded-full bg-[#22c55e]/10 blur-3xl" />
            <div className="absolute top-16 right-10 h-36 w-36 rounded-full bg-[#f59e0b]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-20 w-full bg-[linear-gradient(to_top,rgba(34,197,94,0.2),transparent)]" />
            <div className="absolute bottom-14 left-1/2 h-2 w-[160vw] -translate-x-1/2 rounded-full bg-[#16361f]/90 shadow-[0_-8px_0_0_rgba(34,197,94,0.12)]" />
          </div>

          {isGameLoading && (
            <div className="absolute inset-0 z-40 flex items-center justify-center px-4 bg-[#050c08]/75 backdrop-blur-[3px]">
              <div className="relative w-full max-w-90 overflow-hidden rounded-4xl border border-white/12 bg-[linear-gradient(180deg,rgba(7,18,11,0.94),rgba(4,10,6,0.98))] px-6 py-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.6)]">
                <div className="absolute -left-8 top-4 h-16 w-16 rounded-full bg-[#22c55e]/10 blur-2xl" />
                <div className="absolute -right-6 bottom-2 h-16 w-16 rounded-full bg-[#f59e0b]/10 blur-2xl" />

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="relative h-14 w-14 animate-bounce">
                    <Image
                      src="/bird.webp"
                      alt="Loading bird"
                      fill
                      className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-white font-black text-[22px] leading-none tracking-[0.08em] uppercase">
                    Bouncy Bird
                  </p>
                  <p className="mt-2 text-white/70 text-sm">
                    Flapping up your play zone...
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="h-3 overflow-hidden rounded-full border border-white/10 bg-white/5">
                    <div className="h-full w-[68%] rounded-full bg-[linear-gradient(90deg,#22c55e,#f59e0b,#22c55e)] bg-size-[200%_100%] animate-[shimmer_1.2s_linear_infinite]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-white/45">
                    <span>Launching</span>
                    <span>Feathers ready</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 lg:top-8 lg:right-8 z-50 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center text-xl font-black shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
          >
            ✕
          </button>
          <iframe
            src="https://nebezb.com/floppybird/"
            width="100%"
            height="100%"
            title="Bouncy Bird"
            className="w-full h-full flex-1 pointer-events-auto"
            style={{ border: "none" }}
            scrolling="no"
            onLoad={() => setIsGameLoading(false)}
          ></iframe>
        </div>
      )}

      {/* YOUR EXACT UNCHANGED PROMO BANNER */}
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

          {/* Play Button - ONLY onClick added */}
          <button
            onClick={() => {
              setIsGameLoading(true);
              setIsPlaying(true);
            }}
            className="absolute bottom-[16px] right-[20px] bg-gradient-to-b from-[#4ade80] to-[#16a34a] border-[2px] border-white text-white font-black py-1.5 px-8 rounded-full text-[16px] shadow-[0_4px_0_#6b4e33] active:translate-y-[4px] active:shadow-none transition-transform"
          >
            Play
          </button>
        </div>
      </section>
    </>
  );
};
