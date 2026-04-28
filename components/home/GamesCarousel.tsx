"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Game {
  name: string;
  img: string;
}

const GAMES_DATA: Game[] = [
  {
    name: "BGMI",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300",
  },
  {
    name: "FREE FIRE",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300",
  },
  {
    name: "COD MOBILE",
    img: "https://images.unsplash.com/photo-1605380587593-c4e95ccb8c2d?w=300",
  },
  {
    name: "PUBG PC",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300",
  },
  {
    name: "VALORANT",
    img: "https://images.unsplash.com/photo-1605380587593-c4e95ccb8c2d?w=300",
  },
  {
    name: "ROCKET LEAGUE",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300",
  },
];

export const GamesCarousel = () => {
  const gamesScrollRef = useRef<HTMLDivElement>(null);

  const scrollGames = (direction: "left" | "right") => {
    if (gamesScrollRef.current) {
      const { scrollLeft, clientWidth } = gamesScrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      gamesScrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg md:text-xl font-bold text-white">
          Play Tournaments by Games
        </h3>

        {/* Navigation Buttons (Desktop Only) */}
        <div className="absolute z-30 top-20 hidden md:flex gap-2 justify-between w-full">
          <button
            onClick={() => scrollGames("left")}
            className="p-1 rounded-full bg-[#1b3523] text-white hover:bg-accent transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollGames("right")}
            className="p-1 rounded-full bg-[#1b3523] text-white hover:bg-accent transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Games Grid/Carousel */}
      <div
        ref={gamesScrollRef}
        className="md:flex grid grid-cols-3 overflow-x-auto gap-3 md:gap-4 snap-x pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0"
      >
        {GAMES_DATA.map((game) => (
          <div
            key={game.name}
            className="min-w-[100px] md:min-w-[140px] flex flex-col items-center group cursor-pointer relative snap-start"
          >
            {/* Game Image */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-2 relative shadow-lg">
              <img
                src={game.img}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10] to-transparent opacity-80"></div>
            </div>

            {/* Game Name */}
            <span className="text-[11px] md:text-sm font-bold text-center tracking-wide text-white">
              {game.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
