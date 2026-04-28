"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Share2,
  Users,
  CalendarDays,
  Clock,
  Trophy,
  Mail,
  Waypoints,
} from "lucide-react";

// ==========================================
// 1. MOCK DATA (Matched EXACTLY to images)
// ==========================================
const TOURNAMENT_DATA = {
  title: "DOMINION SERIES - LEGION CUP",
  game: "FREE FIRE",
  entry: "Entry - Free",
  organizer: {
    name: "GS ESPORTS",
    logo: "/gs-logo.png", // Replace with your image
    email: "gamersamy2709@gmail.com",
  },
  banner: "/tournament-1.jpeg", // Replace with your image
  registrationStatus: "Ongoing",
  participants: "864/864",
  details: {
    teamSize: "Squad",
    format: "Multi Round",
    starts: "9th Apr at 2:00 pm",
    checkIn: "10 mins before the match starts",
  },
  prizePool: "200000",
  prizeDistribution: [
    { rank: "Rank 1", amount: "100000" },
    { rank: "Rank 2", amount: "60000" },
    { rank: "Rank 3", amount: "40000" },
  ],
  rounds: [
    {
      name: "ROUND 1",
      round: "Round 1",
      desc: "Top 2 to next round",
      format: "Battle Royale",
      time: "9th Apr at 2:00 pm",
    },
    {
      name: "ROUND 2",
      round: "Round 2",
      desc: "Top 2 to next round",
      format: "Battle Royale",
      time: "30th Apr at 5:33 pm",
    },
    {
      name: "QUATERFINALS",
      round: "Round 3",
      desc: "Top 0 to next round",
      format: "Battle Royale",
      time: "2nd May at 5:33 pm",
    },
  ],
};

// ==========================================
// 2. REUSABLE MODULES
// ==========================================

const PrizePoolModule = ({ data }: { data: typeof TOURNAMENT_DATA }) => (
  <div className="mb-8">
    <h2 className="text-[16px] font-black text-white mb-4">Prize Pool</h2>
    <div className="bg-[#0e1711] border border-[#1b3523] rounded-lg overflow-hidden shadow-lg">
      <div className="bg-[#1b2b1f] p-4 flex justify-between items-center border-b border-[#1b3523]">
        <span className="text-[14px] font-bold text-white/90">
          Total Tournament Prize
        </span>
        <span className="text-[15px] font-black text-white flex items-center gap-1.5">
          {data.prizePool}{" "}
          <img src="/gamehok-coin.webp" alt="coin" className="w-4 h-4" />
        </span>
      </div>
      {data.prizeDistribution.map((prize, idx) => (
        <div
          key={idx}
          className="p-4 flex justify-between items-center border-b border-[#1b3523] last:border-0"
        >
          <span className="text-[14px] font-bold text-white/80 flex items-center gap-2.5">
            <Trophy size={16} className="text-white/50" /> {prize.rank}
          </span>
          <span className="text-[14px] font-bold text-white/90 flex items-center gap-1.5">
            {prize.amount}{" "}
            <img src="/gamehok-coin.webp" alt="coin" className="w-4 h-4" />
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function TournamentDetailPage() {
  const [activeTab, setActiveTab] = useState<
    "Overview" | "Teams" | "Lobbies" | "Rules"
  >("Overview");
  const data = TOURNAMENT_DATA;

  return (
    <div className="min-h-screen bg-[#050C08] text-white font-sans selection:bg-[#00d26a] selection:text-black">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-4 md:pt-6 pb-32 md:pb-8">
        {/* TOP NAVIGATION */}
        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center gap-2 text-[13px] font-bold text-white/90 hover:text-white transition-colors">
            <ArrowLeft size={16} strokeWidth={2.5} /> Back
          </button>
          <button className="w-8 h-8 rounded-full bg-[#1b3523] flex items-center justify-center hover:bg-[#254a31] transition-colors">
            <Share2 size={14} className="text-white" />
          </button>
        </div>

        {/* HERO BANNER */}
        <div className="relative w-full aspect-[21/9] md:aspect-[3.5/1] rounded-xl border border-[#00d26a]/20 overflow-hidden mb-5 shadow-[0_0_20px_rgba(0,210,106,0.05)]">
          <img
            src={data.banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050C08]/90 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white/90 flex items-center border border-white/10">
            {data.registrationStatus}
          </div>
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white/90 flex items-center gap-1.5 border border-white/10">
            <Users size={12} className="text-white/60" /> {data.participants}
          </div>
        </div>

        {/* TITLE & ORGANIZER SECTION */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[20px] md:text-[26px] font-black uppercase tracking-wide leading-tight">
              {data.title}
            </h1>
            <p className="text-[11px] md:text-[12px] font-black text-white/60 uppercase tracking-widest mt-1 mb-3">
              BY {data.organizer.name}
            </p>
            <div className="flex gap-2">
              <span className="bg-[#0b1710] border border-[#1b3523] text-[#00d26a] px-2.5 py-1 rounded text-[11px] font-bold uppercase">
                {data.game}
              </span>
              <span className="bg-[#0b1710] border border-[#1b3523] text-[#00d26a] px-2.5 py-1 rounded text-[11px] font-bold uppercase">
                {data.entry}
              </span>
            </div>
          </div>

          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-[#9333ea] shadow-[0_0_15px_rgba(147,51,234,0.4)] shrink-0">
            <img
              src={data.organizer.logo}
              alt="Organizer"
              className="w-full h-full object-cover bg-[#050C08]"
            />
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex border-b border-[#1b3523] mb-8 overflow-x-auto scrollbar-hide">
          {["Overview", "Teams", "Lobbies", "Rules"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-3.5 font-bold text-[14px] md:text-[15px] transition-colors relative whitespace-nowrap ${
                activeTab === tab
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#00d26a]" />
              )}
            </button>
          ))}
        </div>

        {/* ========================================== */}
        {/* TAB CONTENT: OVERVIEW                      */}
        {/* ========================================== */}
        {activeTab === "Overview" && (
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col">
              {/* 1. Details Grid */}
              <div className="mb-10">
                <h2 className="text-[16px] font-black text-white mb-6">
                  Details
                </h2>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div className="flex gap-3.5 items-start">
                    <Users size={20} className="text-[#00d26a] mt-0.5" />
                    <div>
                      <p className="text-[10px] text-white/50 uppercase font-black tracking-wider mb-1">
                        Team Size
                      </p>
                      <p className="text-[14px] text-white font-bold">
                        {data.details.teamSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <CalendarDays size={20} className="text-[#00d26a] mt-0.5" />
                    <div>
                      <p className="text-[10px] text-white/50 uppercase font-black tracking-wider mb-1">
                        Tournament Starts
                      </p>
                      <p className="text-[14px] text-white font-bold">
                        {data.details.starts}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <Waypoints size={20} className="text-[#00d26a] mt-0.5" />
                    <div>
                      <p className="text-[10px] text-white/50 uppercase font-black tracking-wider mb-1">
                        Format
                      </p>
                      <p className="text-[14px] text-white font-bold">
                        {data.details.format}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <Clock size={20} className="text-[#00d26a] mt-0.5" />
                    <div>
                      <p className="text-[10px] text-white/50 uppercase font-black tracking-wider mb-1">
                        Check-in
                      </p>
                      <p className="text-[14px] text-white font-bold leading-tight pr-4">
                        {data.details.checkIn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE ONLY: Prize Pool rendered in the flow */}
              <div className="md:hidden">
                <PrizePoolModule data={data} />
              </div>

              {/* 2. Rounds and Schedule */}
              <div className="mb-10">
                <h2 className="text-[16px] font-black text-white mb-6">
                  Rounds and Schedule
                </h2>
                <div className="flex flex-col">
                  {data.rounds.map((r, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start border-b border-[#1b3523] pb-5 mb-5 last:border-0 last:pb-0 last:mb-0"
                    >
                      <div>
                        <p className="text-[14px] font-black text-white mb-1">
                          {r.name}{" "}
                          <span className="text-white/50 font-normal">
                            ({r.round})
                          </span>
                        </p>
                        <p className="text-[13px] text-white/70 font-medium">
                          {r.desc}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="bg-[#2d1b36] text-[#d8b4fe] text-[10px] font-bold px-2 py-0.5 rounded">
                          {r.format}
                        </span>
                        <p className="text-[12px] font-bold text-white/90">
                          {r.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. How to Join */}
              <div className="mb-8">
                <h2 className="text-[16px] font-black text-white mb-4">
                  How to Join a Match
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-white/70 font-medium leading-relaxed marker:text-white/30">
                  <li>Have your game open already and on the latest version</li>
                  <li>
                    Once the match is configured you will receive an invite
                    in-game to join the lobby.
                  </li>
                  <li>Join the match and wait for the game to start.</li>
                  <li>
                    When eliminated return to the match room page to be ready to
                    join the next map in the round.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col">
              {/* DESKTOP ONLY: Prize Pool */}
              <div className="hidden md:block">
                <PrizePoolModule data={data} />
              </div>

              {/* 4. Organizer Details */}
              <div>
                <h2 className="text-[16px] font-black text-white mb-4">
                  Organizer
                </h2>
                <div className="bg-[#0e1711] border border-[#1b3523] rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-[#152319] p-4 border-b border-[#1b3523]">
                    <span className="text-[14px] font-bold text-white/90">
                      Organizer&apos;s Details and contact
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded border border-[#9333ea] overflow-hidden bg-[#050C08]">
                        <img
                          src={data.organizer.logo}
                          alt="Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[14px] font-black text-white uppercase">
                        {data.organizer.name}
                      </span>
                    </div>
                    <p className="text-[13px] text-white/60 font-medium">
                      {data.organizer.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================== */}
      {/* BOTTOM PROGRESS BAR (Respects sidebar on desktop, above BottomNav on mobile) */}
      {/* ========================================== */}
      <div className="fixed left-0 right-0 py-4 bg-[#0a150f] border-t border-[#1b3523] z-40 text-center shadow-[0_-10px_20px_rgba(0,0,0,0.5)] bottom-0 md:left-64 w-full md:w-auto">
        <span className="text-[14px] font-bold text-white/70 tracking-wide">
          Tournament is in progress
        </span>
      </div>
    </div>
  );
}
