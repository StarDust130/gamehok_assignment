"use client";

import { TournamentCard } from "./TournamentCard";

export const FeaturedTournaments = () => (
  <section className="w-full">
    {/* Header */}
    <div className="flex justify-between items-center mb-4 md:mb-6">
      <h3 className="text-[18px] md:text-[22px] font-extrabold text-white tracking-wide">
        Featured Tournaments
      </h3>
      <button className="text-[#00d26a] text-[12px] md:text-[14px] font-bold hover:underline uppercase tracking-wider">
        VIEW ALL
      </button>
    </div>

    {/* Tournament Cards Carousel */}
    {/* Enforces horizontal scrolling, hides scrollbars natively, and enables scroll snapping */}
    <div className="flex overflow-x-auto gap-4 md:gap-5 snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/* Wrapper 1: Prevents Flex Squashing and enforces Snap alignment */}
      <div className="shrink-0 snap-center md:snap-start w-[85vw] sm:w-[340px] md:w-[360px]">
        <TournamentCard
          title="DOMINION SERIES - LEGION CUP"
          game="FREE FIRE"
          mode="SQUAD"
          entry="Free"
          pool="200000"
          participants="864/864"
          status="Ongoing"
          image="/tournament-1.png"
          badgeColor="bg-black/60 text-white" // Corrected to match visual references
        />
      </div>

      {/* Wrapper 2: Prevents Flex Squashing and enforces Snap alignment */}
      <div className="shrink-0 snap-center md:snap-start w-[85vw] sm:w-[340px] md:w-[360px]">
        <TournamentCard
          title="GS MONTHLY SHOWDOWN"
          game="FREE FIRE"
          mode="SQUAD"
          entry="Free"
          pool="20000"
          participants="517/576"
          status="Ongoing"
          image="/tournament-2.png"
          badgeColor="bg-black/60 text-white" // Corrected to match visual references
        />
      </div>
    </div>
  </section>
);;
