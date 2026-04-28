"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Game {
  name: string;
  img: string;
}

const GAMES_DATA: Game[] = [
  {
    name: "FREE FIRE",
    img: "/free_fire_logo.png",
  },
  {
    name: "COD MOBILE",
    img: "/cod_mobile_logo.png",
  },
  {
    name: "VALORANT",
    img: "/valorant_logo.png",
  },
  {
    name: "CS 2",
    img: "/cs2_pc_logo.png",
  },
  {
    name: "PUBG PC",
    img: "/pubg_pc_logo.png",
  },
  {
    name: "Moba 5v5",
    img: "/moba_5v5_image.jpg",
  },
];

export const GamesCarousel = () => {
  const gamesScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Calculates scroll bounds to toggle arrow visibility
  const checkScroll = () => {
    if (gamesScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gamesScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Math.ceil prevents sub-pixel rounding errors from hiding the right arrow early
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll(); // Check on mount
    window.addEventListener("resize", checkScroll); // Check on layout shift
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Wrapped in useCallback so it can be safely used in the keyboard listener
  const scrollGames = useCallback((direction: "left" | "right") => {
    if (gamesScrollRef.current) {
      const { clientWidth } = gamesScrollRef.current;
      const scrollAmount =
        direction === "left" ? -(clientWidth / 2) : clientWidth / 2;
      gamesScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  // Global Keyboard Listener for Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling if the user is typing in an input field somewhere else
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement).tagName,
        )
      )
        return;

      if (e.key === "ArrowLeft") {
        scrollGames("left");
      } else if (e.key === "ArrowRight") {
        scrollGames("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollGames]);

  return (
    <section className="relative w-full mb-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg md:text-xl font-bold text-white">
          Play Tournaments by Games
        </h3>
      </div>

      {/* Interactive Track Wrapper */}
      <div className="relative group">
        {/* Conditional Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scrollGames("left")}
            className="absolute z-30 top-1/2 -translate-y-1/2 left-2 hidden md:flex p-1.5 md:p-2 rounded-full bg-[#1b3523]/90 backdrop-blur-sm text-white hover:bg-[#00d26a] hover:shadow-[0_0_15px_rgba(0,210,106,0.3)] transition-all cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} strokeWidth={2.5} className="mr-0.5" />
          </button>
        )}

        {/* Conditional Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scrollGames("right")}
            className="absolute z-30 top-1/2 -translate-y-1/2 right-2 hidden md:flex p-1.5 md:p-2 rounded-full bg-[#1b3523]/90 backdrop-blur-sm text-white hover:bg-[#00d26a] hover:shadow-[0_0_15px_rgba(0,210,106,0.3)] transition-all cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} strokeWidth={2.5} className="ml-0.5" />
          </button>
        )}

        {/* Games Grid/Carousel with active onScroll listener */}
        <div
          ref={gamesScrollRef}
          onScroll={checkScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="md:flex grid grid-cols-3 overflow-x-auto gap-3 md:gap-4 snap-x snap-mandatory pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0"
        >
          {GAMES_DATA.map((game) => (
            <div
              key={game.name}
              className="min-w-[100px] md:min-w-[140px] shrink-0 flex flex-col items-center group cursor-pointer relative snap-start"
            >
              {/* Game Image with smoothed hover scaling */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-2 relative shadow-lg ring-1 ring-white/5 group-hover:ring-white/20 transition-all duration-300">
                <img
                  src={game.img}
                  alt={game.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C08] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Premium smooth text lift (no loud color changes) */}
              <span className="text-[11px] md:text-[13px] font-bold text-center tracking-wide text-white/90 group-hover:text-white group-hover:-translate-y-[1px] transition-all duration-300 ease-out">
                {game.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
