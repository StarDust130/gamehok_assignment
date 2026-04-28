"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Share2,
  Users,
  CalendarDays,
  Clock,
  Trophy,
  Waypoints,
  ShieldCheck,
  Smartphone,
  WifiOff,
  Ban,
  Target,
  Gavel,
} from "lucide-react";
import { TournamentSkeleton } from "@/components/skeletons/TournamentSkeleton";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getTournamentById } from "@/lib/tournaments";

// ==========================================
// 1. MOCK DATA (Matched EXACTLY to images)
// ==========================================
type FullTournament = {
  title: string;
  game: string;
  entry: string;
  organizer: { name: string; logo: string; email: string };
  banner: string;
  registrationStatus: string;
  participants: string;
  details: {
    teamSize: string;
    format: string;
    starts: string;
    checkIn: string;
  };
  prizePool: string;
  prizeDistribution: { rank: string; amount: string }[];
  rounds: {
    name: string;
    round: string;
    desc: string;
    format: string;
    time: string;
  }[];
};
const TOURNAMENT_DATA: FullTournament = {
  title: "DOMINION SERIES - LEGION CUP",
  game: "FREE FIRE",
  entry: "Entry - Free",
  organizer: {
    name: "GS ESPORTS",
    logo: "/organizer-logo.jpeg", // Replace with your image
    email: "gamersamy2709@gmail.com",
  },
  banner: "/tournament-1.png", // Replace with your image
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

const LOBBY_ROUNDS = ["Round 1", "Round 2", "Round 3"] as const;

const LOBBIES = Array.from({ length: 12 }, (_, idx) => ({
  id: idx + 1,
  status: "Yet to be scheduled",
}));

const RULE_SECTIONS = [
  {
    id: "1",
    title: "Team Structure",
    icon: Users,
    points: [
      "4 main players per team",
      "1 substitute (optional)",
      "Total 5 players maximum",
    ],
  },
  {
    id: "2",
    title: "Age Requirement",
    icon: ShieldCheck,
    points: ["Player must be at least 16 years old to participate."],
  },
  {
    id: "3",
    title: "Game Mode",
    icon: Target,
    points: ["Matches are played in Battle Royale - Squad Mode."],
  },
  {
    id: "4",
    title: "Match Format",
    icon: CalendarDays,
    points: [
      "Usually 6 matches per day",
      "Maps commonly include Bermuda, Purgatory, Kalahari, and Alpine",
    ],
  },
  {
    id: "5",
    title: "Points System",
    icon: Trophy,
    points: [
      "Teams earn points based on placement plus kills",
      "Booyah (1st place) gives around 12 points",
      "Each kill gives 1 point",
    ],
  },
  {
    id: "6",
    title: "Fair Play Rules",
    icon: Ban,
    points: [
      "No hacks, cheats, ESP, or aimbot",
      "No unauthorized emulators or software",
      "No teaming with enemy teams",
    ],
  },
  {
    id: "7",
    title: "Device Rules",
    icon: Smartphone,
    points: [
      "Usually mobile devices only (no PC unless allowed by tournament)",
    ],
  },
  {
    id: "8",
    title: "Internet and Disconnect",
    icon: WifiOff,
    points: [
      "If a player disconnects, the match usually continues unless there is a server issue",
    ],
  },
  {
    id: "9",
    title: "Penalties",
    icon: Gavel,
    points: [
      "Warning",
      "Point deduction",
      "Match loss",
      "Team disqualification",
    ],
  },
] as const;

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
          <Image
            src="/coin.webp"
            alt="coin"
            width={16}
            height={16}
            className="w-4 h-4"
          />
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
            <Image
              src="/coin.webp"
              alt="coin"
              width={16}
              height={16}
              className="w-4 h-4"
            />
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
  const TABS = ["Overview", "Teams", "Lobbies", "Rules"] as const;
  const [activeTab, setActiveTab] = useState<
    "Overview" | "Teams" | "Lobbies" | "Rules"
  >("Overview");
  const [activeRound, setActiveRound] =
    useState<(typeof LOBBY_ROUNDS)[number]>("Round 1");
  const [isLoading, setIsLoading] = useState(true);
  // Use route param to select tournament data so each tournament page is unique
  const params = useParams() as { id?: string } | null;
  const routeId = params?.id as string | undefined;
  const found = routeId ? getTournamentById(routeId) : undefined;

  // Merge found lightweight tournament into the more detailed page data shape
  const data: FullTournament = found
    ? {
        ...TOURNAMENT_DATA,
        title: found.title ?? TOURNAMENT_DATA.title,
        game: found.game ?? TOURNAMENT_DATA.game,
        entry: found.entry ?? TOURNAMENT_DATA.entry,
        participants: found.participants ?? TOURNAMENT_DATA.participants,
        registrationStatus: found.status ?? TOURNAMENT_DATA.registrationStatus,
        banner: found.image ?? TOURNAMENT_DATA.banner,
        prizePool: found.pool ?? TOURNAMENT_DATA.prizePool,
      }
    : TOURNAMENT_DATA;

  const handleTabChange = (tab: (typeof TABS)[number]) => {
    setActiveTab(tab);

    requestAnimationFrame(() => {
      const contentRoot = document.getElementById("tournament-tab-content");
      if (contentRoot) {
        contentRoot.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  useEffect(() => {
    // Simulate loading time (500ms for smooth transition)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <TournamentSkeleton />;
  }

  return (
    <div className="min-h-screen bg-[#050C08] text-white font-sans selection:bg-[#00d26a] selection:text-black">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-4 md:pt-6 pb-32 md:pb-8">
        {/* TOP NAVIGATION */}
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="cursor-pointer">
            <button className="flex items-center gap-2 text-[13px] font-bold text-white/90 hover:text-white transition-colors cursor-pointer">
              <ArrowLeft size={16} strokeWidth={2.5} /> Back
            </button>
          </Link>
          <button className="w-8 h-8 rounded-full bg-[#1b3523] flex items-center justify-center hover:bg-[#254a31] transition-colors">
            <Share2 size={14} className="text-white" />
          </button>
        </div>

        {/* HERO BANNER */}
        <div className="relative w-full h-[190px] sm:h-[250px] md:h-[420px] rounded-xl border border-[#00d26a]/20 overflow-hidden mb-5 shadow-[0_0_20px_rgba(0,210,106,0.05)]">
          <Image
            src={data.banner}
            alt="Tournament banner"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-cover object-center md:object-top"
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

          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-[#9333ea] shadow-[0_0_15px_rgba(147,51,234,0.4)] shrink-0 bg-[#050C08]">
            <Image
              src={data.organizer.logo}
              alt="Organizer"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex border-b border-[#1b3523] mb-8 overflow-hidden scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
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
        <div id="tournament-tab-content" className="scroll-mt-24" />
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
                  {data.rounds.map(
                    (r: FullTournament["rounds"][number], idx: number) => (
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
                    ),
                  )}
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
                        <Image
                          src={data.organizer.logo}
                          alt="Logo"
                          width={32}
                          height={32}
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

        {activeTab === "Teams" && (
          <div className="bg-[#07130d] border border-[#17412a] rounded-2xl p-4 md:p-8 shadow-[0_0_30px_rgba(0,210,106,0.08)]">
            <HireMe page="team details" />
          </div>
        )}

        {activeTab === "Lobbies" && (
          <div className="space-y-5 md:space-y-6 pb-20 md:pb-24">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {LOBBY_ROUNDS.map((round) => (
                <button
                  key={round}
                  onClick={() => setActiveRound(round)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-colors border cursor-pointer ${
                    activeRound === round
                      ? "bg-[#053a25] text-[#7CFFBF] border-[#00d26a]"
                      : "bg-[#1e2a23] text-white/70 border-[#33443b] hover:text-white"
                  }`}
                >
                  {round}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {LOBBIES.map((lobby) => (
                <div
                  key={lobby.id}
                  className="rounded-xl border border-[#17412a] bg-[#081a12] p-4 md:p-5 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[15px]  font-black leading-none">
                      Lobby {lobby.id}
                    </h3>
                    <button className="text-[10px] md:text-[11px] font-bold uppercase text-[#00d26a] hover:text-[#4dffab] transition-colors cursor-pointer tracking-wide">
                      View Participants
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-white/85 text-[12px] md:text-[13px] font-medium">
                    <span className="w-4 h-4 rounded-full  flex items-center justify-center text-[10px]">
                      🕒
                    </span>
                    <span>{lobby.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Rules" && (
          <div className="pb-10">
            <div className="relative overflow-hidden rounded-2xl border border-[#1e5134] bg-gradient-to-br from-[#0c1f16] via-[#08160f] to-[#050d09] p-4 md:p-8 shadow-[0_0_40px_rgba(0,210,106,0.08)] mb-5 md:mb-6">
              <div className="absolute -top-16 -right-12 w-44 h-44 rounded-full bg-[#00d26a]/10 blur-3xl" />
              <div className="absolute -bottom-14 -left-10 w-40 h-40 rounded-full bg-[#12a55e]/10 blur-3xl" />
              <p className="text-[10px]  text-[#86f7be] uppercase tracking-[0.18em] font-black mb-1.5">
                Tournament Handbook
              </p>
              <h2 className="text-[20px] font-black leading-tight">
                Official Rules and Participation Policy
              </h2>
              <p className="text-[12px]  text-white/70 mt-2.5 max-w-3xl">
                Follow these rules to keep matches competitive, fair, and smooth
                for every squad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {RULE_SECTIONS.map((section) => {
                const Icon = section.icon;

                return (
                  <div
                    key={section.id}
                    className="rounded-xl border border-[#17412a] bg-[#081710] p-3.5 md:p-5"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#0f2f1f] border border-[#1f5d3d] flex items-center justify-center text-[#52f0a0] text-[11px] font-black">
                        {section.id}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#0b2217] border border-[#1a4a31] flex items-center justify-center text-[#00d26a]">
                        <Icon size={14} />
                      </div>
                      <h3 className="text-[14px] md:text-[15px] font-black leading-tight text-white">
                        {section.title}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="text-[12px] md:text-[13px] text-white/80 leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#00d26a] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ========================================== */}
      {/* BOTTOM PROGRESS BAR (Respects sidebar on desktop) */}
      {/* ========================================== */}
      <div className="fixed left-0 right-0 py-4 bg-[#0a150f] border-t border-[#1b3523] z-40 text-center shadow-[0_-10px_20px_rgba(0,0,0,0.5)] bottom-0 md:left-64 w-full md:w-auto">
        <span className="text-[14px] font-bold text-white/70 tracking-wide">
          Tournament is in progress
        </span>
      </div>
    </div>
  );
}
