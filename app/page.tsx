"use client";

import { useState, useEffect } from "react";
import {
  SocialStarBanner,
  FeaturedTournaments,
  BouncyBirdPromo,
  GamesCarousel,
  DailyBattles,
  WatchBestTournaments,
} from "@/components/home";
import { HomeSkeleton } from "@/components/skeletons/HomeSkeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (500ms for smooth transition)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-full divide-y lg:divide-y-0 lg:divide-x divide-[#1b3523] w-full max-w-360 mx-auto px-4 md:px-6 lg:px-8">
      {/* ====================================================================
          LEFT CONTENT AREA - Main Content Section (68% Desktop, 100% Mobile)
          ==================================================================== */}
      <div className="w-full lg:w-[68%] space-y-8 py-6 lg:py-8 lg:pr-8">
        {/* Section 1: Social Star Banner - Hero promotional section */}
        <SocialStarBanner />

        {/* Section 2: Featured Tournaments - Carousel of active tournaments */}
        <FeaturedTournaments />

        {/* Section 3: Bouncy Bird Promo - Mobile-only game advertisement */}
        <BouncyBirdPromo />

        {/* Mobile/Tablet divider */}
        <hr className="border-[#1b3523] my-8 w-full hidden md:block" />

        {/* Section 4: Games Carousel - Browse tournaments by game */}
        <GamesCarousel />

        {/* Desktop divider */}
        <hr className="border-[#1b3523] my-8 w-full" />

        {/* Section 5: Daily Battles - Daily scrims/competitions */}
        <DailyBattles />
      </div>

      {/* ====================================================================
          RIGHT SIDEBAR - Video Content Section (32% Desktop, 100% Mobile)
          ==================================================================== */}
      <div className="w-full lg:w-[32%] py-6 lg:py-8 lg:pl-8">
        <WatchBestTournaments />
      </div>
    </div>
  );
}
