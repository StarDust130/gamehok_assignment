"use client";

import { TournamentCard } from "./TournamentCard";
import { featuredTournaments } from "@/lib/tournaments";

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
      {featuredTournaments.map((tournament) => (
        <div
          key={tournament.id}
          className="shrink-0 snap-center md:snap-start w-[85vw] sm:w-85 md:w-90"
        >
          <TournamentCard
            href={`/tournament/${tournament.id}`}
            title={tournament.title}
            game={tournament.game}
            mode={tournament.mode}
            entry={tournament.entry}
            pool={tournament.pool}
            participants={tournament.participants}
            status={tournament.status}
            image={tournament.image}
            badgeColor={tournament.badgeColor}
          />
        </div>
      ))}
    </div>
  </section>
);
