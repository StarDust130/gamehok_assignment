import Link from "next/link";
import Image from "next/image";

interface TournamentCardProps {
  href: string;
  title: string;
  game: string;
  mode: string;
  entry: string;
  pool: string;
  participants: string;
  status: string;
  image: string;
  badgeColor?: string;
}

export const TournamentCard = ({
  href,
  title,
  game,
  mode,
  entry,
  pool,
  participants,
  status,
  image,
  badgeColor = "bg-black/60 text-white",
}: TournamentCardProps) => {
  return (
    <Link
      href={href}
      className="w-full max-w-100 min-w-70 bg-[#050C08] border border-[#122b1a] rounded-2xl overflow-hidden flex flex-col relative group hover:border-[#22c55e] transition-colors shadow-lg cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-45 w-full">
        {/* Status Badge (Top Left) */}
        <div
          className={`absolute top-3 left-3 z-20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${badgeColor}`}
        >
          {status}
        </div>

        {/* Participants Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white flex items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1.5"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {participants}
        </div>

        {/* Main Banner Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Prize Pool Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-9.5 bg-[#1c2227]/90 backdrop-blur-sm z-10 flex items-center px-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
          <span className="text-[13px] font-bold text-white ml-2 tracking-wide">
            Prize Pool - {pool}
          </span>
          <img src="/coin.webp" alt="coin" className="w-4 h-4 ml-1.5" />
        </div>

        {/* Organizer Badge */}
        <div className="absolute -bottom-5 right-4 z-30 w-11.5 h-11.5 bg-linear-to-br from-[#4c1d95] to-[#2e1065] border border-[#9333ea] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.6)] overflow-hidden">
          <img
            src="/organizer-logo.jpeg"
            alt="Logo"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-4 pb-5 px-4 relative z-20 flex-1 flex flex-col bg-[#050C08]">
        {/* Title */}
        <h4 className="font-extrabold text-[15px] leading-tight mb-3 text-white uppercase tracking-wide truncate group-hover:text-accent transition-colors">
          {title}
        </h4>

        {/* Badge Tags */}
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="bg-[#021d0e] text-white px-2.5 py-1.5 rounded-sm font-bold uppercase tracking-wide">
            {game}
          </span>
          <span className="bg-[#021d0e] text-white px-2.5 py-1.5 rounded-sm font-bold uppercase tracking-wide">
            {mode}
          </span>
          <span className="bg-[#021d0e] text-white px-2.5 py-1.5 rounded-sm font-bold tracking-wide flex items-center">
            Entry - {entry}
            {entry === "Free" && (
              <img
                src="/gamehok-coin.webp"
                alt="coin"
                className="w-3 h-3 ml-1"
              />
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};
