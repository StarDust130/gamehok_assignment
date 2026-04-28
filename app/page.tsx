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
        {/* 1. Social Star Banner */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#035b21] via-[#023e16] to-[#01250d] p-6 lg:p-8 flex items-center">
          <div className="relative z-10 w-2/3">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-1 text-white">
              Be the Gamehok&apos;s{" "}
              <span className="text-[#f59e0b]">Social Star</span>
            </h2>
            <p className="text-white text-sm md:text-base font-semibold mb-6">
              Earn rewards by levelling up your social game
            </p>
            <div className="flex gap-4 sm:gap-6">
              <StatIcon
                icon={
                  <Image
                    src="/logo.png"
                    width={18}
                    height={18}
                    alt="Post"
                    className="opacity-80"
                  />
                }
                label="Posts"
                colorClass="border-[#38bdf8] text-[#38bdf8]"
              />
              <StatIcon
                icon={<Users size={18} className="opacity-80" />}
                label="Followers"
                colorClass="border-[#fb923c] text-[#fb923c]"
              />
              <StatIcon
                icon={<Heart size={18} className="opacity-80" />}
                label="Likes"
                colorClass="border-[#c084fc] text-[#c084fc]"
              />
            </div>
          </div>
          <div className="absolute right-[-40px] md:right-[-20px] top-1/2 -translate-y-1/2 w-1/2 flex items-center justify-end pr-4">
            <Image
              src="/star.webp"
              alt="Star"
              width={220}
              height={220}
              className="object-contain relative z-20 scale-110 md:scale-100 drop-shadow-[0_0_30px_#22c55e]"
              style={{
                filter: "hue-rotate(240deg) saturate(200%) brightness(1.2)",
              }}
            />
          </div>
        </section>
        <hr className="border-[#1b3523] my-8 w-full block" />
        {/* 2. Featured Tournaments */}
        <section>
          <div className="flex justify-between items-center mb-4">
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
              image="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
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
              image="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80"
              badgeColor="bg-[#9f1239] shadow-purple-900/50"
            />
          </div>
          {/* Active green divider bar under featured tournaments */}
          <div className="w-full h-1 bg-[#1b3523] mt-2 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-[#22c55e] rounded-full"></div>
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
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollGames("left")}
                className="p-1 rounded-full bg-[#1b3523] text-white hover:bg-accent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollGames("right")}
                className="p-1 rounded-full bg-[#1b3523] text-white hover:bg-accent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={gamesScrollRef}
            className="flex overflow-x-auto gap-3 md:gap-4 snap-x pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0"
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
                name: "CS 2",
                img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300",
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
              {
                name: "APEX",
                img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300",
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

function StatIcon({ icon, label, colorClass }: { icon: React.ReactNode, label: string, colorClass: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border bg-transparent flex items-center justify-center md:mb-1 transition-colors shadow-inner ${colorClass}`}>
        {icon}
      </div>
      <span className="text-[10px] md:text-[11px] text-white mt-1 font-bold">{label}</span>
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
