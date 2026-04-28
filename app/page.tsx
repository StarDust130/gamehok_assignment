'use client';
import Image from 'next/image';
import { Share2, Users, Heart, Play, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { Irish_Grover } from 'next/font/google';

// 1. Initialize the custom font properly outside the component
const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// 1. Pixel-Perfect Target SVGs (Ultra-thin 1px strokes, no fills)
const PostsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
    {/* Image Rect */}
    <rect x="4" y="5" width="14" height="14" rx="2" strokeLinecap="round" />
    {/* Mountains */}
    <path d="M4 14l3.5-3.5 2.5 2.5 3-3 5 5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sun */}
    <circle cx="9" cy="9" r="1.5" />
    {/* Circle Plus Badge (Background fill matches gradient to hide lines underneath) */}
    <circle cx="19" cy="5" r="4.5" fill="#045622" stroke="currentColor" />
    <path d="M17 5h4M19 3v4" strokeLinecap="round" />
  </svg>
);

const FollowersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
    {/* Center User */}
    <circle cx="10" cy="10" r="2.5" />
    <path d="M15 17v-1a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1" strokeLinecap="round" />
    {/* Background Users */}
    <path d="M14 9a2.5 2.5 0 0 1 0 5" strokeLinecap="round" />
    <path d="M17 17v-1a3 3 0 0 0-2-2.8" strokeLinecap="round" />
    <path d="M6 9a2.5 2.5 0 0 0 0 5" strokeLinecap="round" />
    {/* Chat Bubble Plus Badge */}
    <path d="M16 3h5v4h-2l-1.5 1.5V7h-1.5V3z" fill="#045622" stroke="currentColor" strokeLinejoin="round" />
    <path d="M17.5 5h2M18.5 4v2" strokeLinecap="round" />
  </svg>
);

const LikesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3ZM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 2. Transparent Stat Wrapper (No bg-black fill, pure 1px colored border)
const StatIcon = ({ icon, label, colorClass }) => (
  <div className="flex flex-col items-center gap-1.5 md:gap-2">
    <div 
      className={`flex items-center justify-center w-[42px] h-[42px] md:w-[50px] md:h-[50px] rounded-full border border-solid bg-transparent ${colorClass}`}
    >
      {icon}
    </div>
    <span className="text-[10px] md:text-[12px] font-bold text-white tracking-wide">
      {label}
    </span>
  </div>
);
export default function Home() {
  const gamesScrollRef = useRef<HTMLDivElement>(null);
  
  const scrollGames = (direction: 'left' | 'right') => {
    if (gamesScrollRef.current) {
      const { scrollLeft, clientWidth } = gamesScrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      gamesScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-full divide-y lg:divide-y-0 lg:divide-x divide-[#1b3523] w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      {/* Left Content Area */}
      <div className="w-full lg:w-[68%] space-y-8 py-6 lg:py-8 lg:pr-8">
        {/* 1. Social Star Banner 🌟  */}
        <section className="relative w-full max-w-[850px] overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#02451C_0%,#056C2B_35%,#01230D_100%)] flex items-center min-h-[160px] md:min-h-[190px] shadow-lg">
          {/* Single Star Element.
        Mobile: Anchored off the left edge (-left-6)
        Desktop: Anchored to the right edge (right-4)
      */}
          <div className="absolute left-2 md:left-auto md:right-12 top-1/2 -translate-y-1/2 w-[150px] h-[150px]  pointer-events-none z-0">
            <Image
              src="/star.webp"
              alt="Star"
              fill
              className="object-contain"
              priority
            />
          </div>

    
          <div className="relative z-10 w-full pl-[180px] pr-4 py-5 md:px-10 md:py-8 md:w-[65%] flex flex-col justify-center">
            {/* Exact Typography Breaks matching the target images */}
            <h2 className="text-[18px] md:text-[25px] font-bold text-white leading-[1.25] md:leading-[1.1] mb-2 tracking-tight">
              Be the Gamehok&apos;s
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>
              <span className="text-[#f59e0b]">Social Star</span>
            </h2>

            <p className="text-white/95 text-[14px] md:text-[15px] font-semibold mb-5 md:mb-6 mt-2 leading-[1.4] max-w-[180px] md:max-w-none">
              Earn rewards by levelling up
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>
              your social game
            </p>

            {/* Mapped exactly to the target's hex colors for Cyan, Orange, and Purple */}
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

        {/* 2. Featured Tournaments */}
        <section>
          <div className="flex justify-between items-center mb-4  ">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Featured Tournaments
            </h3>
            <button className="text-accent text-sm font-semibold hover:underline uppercase tracking-wider">
              View All
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 snap-x pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0">
            <TournamentCard
              title="DOMINION SERIES - LEGION CUP"
              game="FREE FIRE"
              mode="SQUAD"
              entry="Free"
              pool="200000"
              participants="864/864"
              status="Ongoing"
              image="/tournament-1.jpeg"
              badgeColor="bg-[#4c1d95] shadow-purple-900/50"
            />
            <TournamentCard
              title="GS MONTHLY SHOWDOWN"
              game="FREE FIRE"
              mode="SQUAD"
              entry="Free"
              pool="20000"
              participants="517/576"
              status="Ongoing"
              image="/tournament-2.jpeg"
              badgeColor="bg-[#9f1239] shadow-purple-900/50"
            />
          </div>
        </section>
        <hr className="border-[#1b3523] my-8 w-full hidden md:block" />

        {/* 3. Bouncy Bird Promo (Mobile Only) */}
        <section className="relative w-[calc(100%-2rem)] w-full h-[150px] md:hidden  my-4 rounded-2xl overflow-hidden block cursor-pointer">
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
            {/* Using min-w to prevent text from crushing on very small phones */}
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

              {/* Footer Text & Enlarged Coin */}
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

            {/* Bird Asset - Adjusted fixed coordinates */}
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

        {/* 4. Play Tournaments by Games - CAROUSEL */}
        <section className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Play Tournaments by Games
            </h3>
            <div className=" absolute z-30 top-20   hidden md:flex gap-2 justify-between w-full ">
              <button
                onClick={() => scrollGames("left")}
                className="p-1 rounded-full bg-[#1b3523] text-white hover:bg-accent transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollGames("right")}
                className="p-1 rounded-full bg-[#1b3523] text-white hover:bg-accent transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={gamesScrollRef}
            className="md:flex grid grid-cols-3 overflow-x-auto gap-3 md:gap-4 snap-x pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0"
          >
            {[
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
            ].map((g) => (
              <div
                key={g.name}
                className="min-w-[100px] md:min-w-[140px] flex flex-col items-center group cursor-pointer relative snap-start"
              >
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-2 relative shadow-lg">
                  <img
                    src={g.img}
                    alt={g.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10] to-transparent opacity-80"></div>
                </div>
                <span className="text-[11px] md:text-sm font-bold text-center tracking-wide text-white">
                  {g.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        <hr className="border-[#1b3523] my-8 w-full" />
        {/* 5. Daily Scrims */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Compete in Daily Battles
            </h3>
            <button className="text-accent text-sm font-semibold hover:underline uppercase tracking-wider">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0b1710] border border-[#1b3523] rounded-2xl p-4 md:p-6 text-center hover:border-accent transition-colors cursor-pointer group flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2e1065] flex items-center justify-center border-2 border-[#a855f7] mb-3 shadow-md">
                <span className="font-bold text-white text-xl md:text-2xl mt-1 leading-none italic">
                  -GS-
                </span>
              </div>
              <h4 className="font-bold text-sm md:text-lg mb-1 leading-tight text-white">
                GS Daily Scrims
              </h4>
              <p className="text-[10px] md:text-xs text-gray-400 mb-3">
                By GS Esports
              </p>
              <p className="text-[11px] md:text-sm text-gray-300 mb-4 h-10 md:h-auto overflow-hidden line-clamp-2 md:line-clamp-none">
                Play GS daily scrims and sharpen your skills for the bigger
                events
              </p>
              <button className="text-accent font-semibold flex items-center justify-center w-full group-hover:gap-2 transition-all text-xs md:text-sm mt-auto">
                Explore scrims <span className="ml-1">&gt;</span>
              </button>
            </div>

            <div className="bg-[#0b1710] border border-[#1b3523] rounded-2xl p-4 md:p-6 text-center hover:border-[#eab308] transition-colors cursor-pointer group flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center border-[3px] border-[#eab308] mb-3 shadow-md">
                <span className="font-bold text-[#fef08a] text-xl md:text-2xl mt-1 leading-none italic">
                  -TMR-
                </span>
              </div>
              <h4 className="font-bold text-sm md:text-lg mb-1 leading-tight text-white">
                TMR Daily Scrims
              </h4>
              <p className="text-[10px] md:text-xs text-gray-400 mb-3">
                By TMR Esports
              </p>
              <p className="text-[11px] md:text-sm text-gray-300 mb-4 h-10 md:h-auto overflow-hidden line-clamp-2 md:line-clamp-none">
                Play TMR daily scrims and sharpen your skills for the bigger
                events
              </p>
              <button className="text-accent font-semibold flex items-center justify-center w-full group-hover:gap-2 transition-all text-xs md:text-sm mt-auto hover:text-[#eab308]">
                Explore scrims <span className="ml-1">&gt;</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Right Sidebar Area -> Watch the Best of Tournaments */}
      <div className="w-full lg:w-[32%] py-6 lg:py-8 lg:pl-8">
        <section className="sticky top-[24px] space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">
            Watch The Best of Tournaments
          </h3>

          {/* YouTube Video 1 */}
          <Link
            href="https://youtu.be/2-Pe0-8A9O8?si=-NLcjYp-tcI-v7hx"
            target="_blank"
            className="block relative rounded-2xl overflow-hidden group border border-[#1b3523] bg-[#0a1a10]"
          >
            <div className="relative aspect-[16/9]">
              <img
                src="https://i.ytimg.com/vi/2-Pe0-8A9O8/hqdefault.jpg"
                alt="Call of Duty"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center"></div>
              <div className="absolute top-3 left-3 flex items-center z-20">
                <div className="w-8 h-8 rounded-full bg-[#0a1a10] border border-accent flex items-center justify-center shadow-md mr-2">
                  <span className="font-black text-sm text-white">G</span>
                </div>
                <div className="bg-black/50 backdrop-blur rounded px-2 py-0.5">
                  <p className="text-[10px] text-gray-200">Gamehok</p>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center z-20 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <Share2 size={16} className="rotate-90 scale-x-[-1]" />
              </div>
            </div>
            <div className="p-4 bg-[#051109]">
              <h4 className="font-bold text-sm text-white">Call of Duty</h4>
            </div>
          </Link>

          {/* YouTube Video 2 */}
          <Link
            href="https://youtu.be/90EmKhWGDa4?si=_HaPZDeafkAVtYZH"
            target="_blank"
            className="block relative rounded-2xl overflow-hidden group border border-[#1b3523] bg-[#0a1a10]"
          >
            <div className="relative aspect-[16/9]">
              <img
                src="https://i.ytimg.com/vi/90EmKhWGDa4/hqdefault.jpg"
                alt="BGMI Tournament"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center"></div>
              <div className="absolute top-3 left-3 flex items-center z-20">
                <div className="w-8 h-8 rounded-full bg-[#0a1a10] border border-accent flex items-center justify-center shadow-md mr-2">
                  <span className="font-black text-sm text-white">G</span>
                </div>
                <div className="bg-black/50 backdrop-blur rounded px-2 py-0.5">
                  <p className="text-[10px] text-gray-200">Gamehok</p>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center z-20 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <Share2 size={16} className="rotate-90 scale-x-[-1]" />
              </div>
            </div>
            <div className="p-4 bg-[#051109]">
              <h4 className="font-bold text-sm text-white">BGMI Tournament</h4>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}



function TournamentCard({ title, game, mode, entry, pool, participants, status, image, badgeColor }: any) {
  return (
    <div className="min-w-[85vw] snap-center sm:min-w-[400px] md:min-w-[340px] bg-[#0a1a10] border border-[#1b3523] rounded-2xl overflow-hidden flex flex-col relative group hover:border-[#22c55e] transition-colors shadow-lg">
      <div className="absolute top-3 right-3 z-30 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center shadow-lg text-white border border-white/10">
        <Users size={10} className="mr-1.5" /> {participants}
      </div>
      <div className={`absolute top-3 left-3 z-30 text-white backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold shadow-lg ${badgeColor}`}>
        {status}
      </div>
      
      <div className="relative h-40 md:h-44 w-full overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a1a10] to-transparent z-10" />
      </div>
      
      <div className="pt-2 pb-5 px-5 relative z-20 flex-1 flex flex-col">
         {/* Custom floating icon bottom right of image equivalent */}
         <div className="absolute right-5 top-[-25px] w-12 h-12 bg-gradient-to-br from-[#4c1d95] to-[#3b0764] border-2 border-[#9333ea] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)] z-30 group-hover:scale-110 transition-transform">
           <Image src="/logo.png" width={20} height={20} alt="Logo" className="opacity-80" />
         </div>
         
         <div className="flex items-center mb-2 -mt-4 bg-[#1b2b20] w-max px-2 py-1 rounded border border-[#2b4733] z-20 relative">
           <Trophy className="text-yellow-500 mr-2" size={14} />
           <span className="text-[11px] font-bold text-white mr-1 uppercase tracking-wide">Prize Pool - {pool}</span>
           <Image src="/gamehok-coin.webp" alt="coin" width={18} height={18} />
         </div>
         
         <h4 className="font-extrabold text-base leading-tight mb-4 text-white uppercase tracking-wider truncate mt-2 group-hover:text-accent transition-colors">{title}</h4>
         
         <div className="flex flex-wrap gap-2 text-[10px] md:text-xs">
           <span className="bg-[#112215] text-white px-2 py-1 rounded-sm border border-[#1b3523] font-bold uppercase">{game}</span>
           <span className="bg-[#112215] text-white px-2 py-1 rounded-sm border border-[#1b3523] font-bold uppercase">{mode}</span>
           <span className="bg-[#112215] text-gray-300 px-2 py-1 rounded-sm border border-[#1b3523] font-bold flex items-center ml-auto">
             Entry - <span className="text-yellow-400 ml-1">{entry}</span>
             {entry === 'Free' && <Image src="/gamehok-coin.webp" alt="coin" width={12} height={12} className="ml-1" />}
           </span>
         </div>
      </div>
    </div>
  );
}
