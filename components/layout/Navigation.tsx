"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  LogOut, Bell } from "lucide-react";
import Image from "next/image";
// import { House, Trophy, Users, ChatTeardrop } from "@phosphor-icons/react";
import { motion } from "framer-motion";

// 1. Home Icon: Corrected to include the inner resting door.
const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {active ? (
      <>
        <path d="M3 10l9-7 9 7v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z" fill="#00d26a" />
        <path d="M10 21v-5h4v5" fill="#031308" />
      </>
    ) : (
      <>
        <path d="M4 10l8-7 8 7v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9z" stroke="#8A9990" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 21v-4h4v4" stroke="#8A9990" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )}
  </svg>
);

// 2. Trophy Icon: Fixed to match exact image (Green solid body, white star, green outlined handles).
const TrophyIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {active ? (
      <>
        <path d="M6 6H3v2.5c0 1.6 1.4 3 3 3h1M18 6h3v2.5c0 1.6-1.4 3-3 3h-1" stroke="#00d26a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 4h12v5.5c0 3-2.5 5.5-6 5.5s-6-2.5-6-5.5V4z" fill="#00d26a" />
        <path d="M12 15v4M9 19h6" stroke="#00d26a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Precise White Star */}
        <path d="M12 7l.8 1.5 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2L12 7z" fill="#ffffff" />
      </>
    ) : (
      <>
        <path d="M6 4h12v5.5c0 3-2.5 5.5-6 5.5s-6-2.5-6-5.5V4z" stroke="#8A9990" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 6H3v2.5c0 1.6 1.4 3 3 3h1M18 6h3v2.5c0 1.6-1.4 3-3 3h-1" stroke="#8A9990" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 15v4M9 19h6" stroke="#8A9990" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
  </svg>
);

// 3. Social Icon: Implemented proper background-masking to perfectly break the stroke overlaps.
const SocialIcon = ({ active }) => (
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Back Person (Drawn first, forced to white when active) */}
    <circle
      cx="16"
      cy="8"
      r="3"
      stroke={active ? "#ffffff" : "#8A9990"}
      strokeWidth="1.5"
    />
    <path
      d="M14 18v-1c0-2 2-3.5 5-3.5s5 1.5 5 3.5v1"
      stroke={active ? "#ffffff" : "#8A9990"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Front Person (Drawn second, green when active, masks back person with background fill) */}
    <circle
      cx="9"
      cy="11"
      r="3.5"
      stroke={active ? "#00d26a" : "#8A9990"}
      fill="#031308"
      strokeWidth="1.5"
    />
    <path
      d="M2 21v-1c0-2.5 2.5-4.5 7-4.5s7 2 7 4.5v1"
      stroke={active ? "#00d26a" : "#8A9990"}
      fill="#031308"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 4. Chat Icon: Fixed geometry to round-rect with tail on bottom right. Used negative-space strokes for active lines.
const ChatIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {active ? (
      <>
        <path d="M20 16V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10l4 4v-4z" fill="#00d26a" />
        {/* Negative Space Cutouts matching the background color */}
        <path d="M8 9.5h8M8 13.5h5" stroke="#031308" strokeWidth="2" strokeLinecap="round" />
      </>
    ) : (
      <>
        <path d="M20 16V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10l4 4v-4z" stroke="#8A9990" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 10h8M8 14h5" stroke="#8A9990" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const navItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "My Tournament", href: "/tournaments", icon: TrophyIcon },
  { name: "Social", href: "/social", icon: SocialIcon },
  { name: "Chat", href: "/chat", icon: ChatIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen border-r border-card-border bg-[#020d06] text-gray-400 fixed left-0 top-0">
      <div className="p-6 flex items-center text-white">
        <Image
          src="/logo.png"
          alt="Gamehok"
          width={140}
          height={40}
          className="w-auto h-8"
        />
        <span className="font-bold text-2xl">AMHOK</span>
      </div>
      <nav className="flex-1 px-4 mt-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-[#0f2915] text-white border-l-4 border-accent" : "hover:bg-[#0f2915] hover:text-white"}`}
            >
              <item.icon size={20} className={isActive ? "text-accent" : ""} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-6 mt-auto ">
        <button className="flex items-center space-x-3 text-red-500 hover:text-gray-500 transition-colors w-full px-4 py-2 cursor-not-allowed">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-[68px] bg-[#031308] border-t border-[#1a2e20] flex z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            // The container must be relative so the indicator absolute positioning anchors to the specific tab width
            className="relative flex-1 flex flex-col items-center justify-center transition-colors duration-200"
          >
            {/* 1. Anchored Indicator - Notice top-[-1px] to overlap the border perfectly */}
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute top-[-1px] w-10 h-[3px] bg-[#00d26a] rounded-b-md shadow-[0_1px_8px_rgba(0,210,106,0.8)]"
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              />
            )}

            {/* 2. Focused Radial Glow */}
            {isActive && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00d26a]/25 blur-[12px] rounded-full pointer-events-none" />
            )}

            {/* 3. Z-Index protected Icon and Text */}
            <div className="relative z-10 flex flex-col items-center gap-[4px] mt-1">
              <Icon active={isActive} />
              <span
                className={`text-[11px] transition-colors duration-200 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-[#8A9990] font-medium"
                }`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#020d06]/80 backdrop-blur-md border-b border-card-border w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 h-[72px]">
      <div className="flex md:hidden items-center">
        <div className="w-8 h-8 md:hidden relative overflow-hidden rounded-full bg-gray-700">
          <Image
            src="/anime-profile-pic.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-1"></div>

      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center bg-[#0d2212] rounded-full px-3 py-1.5 border border-accent hover:bg-[#063110]">
          <Image
            src="/gamehok-coin.webp"
            alt="Coin"
            width={16}
            height={16}
            className="mr-2"
          />
          <span className="text-white font-bold text-sm">6969</span>
        </div>
        <button className="text-gray-300 hover:text-white relative">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#020d06]"></span>
        </button>
        <div className="w-10 h-10 hidden md:block relative overflow-hidden rounded-full border-2 border-transparent hover:border-accent transition-colors ml-4 cursor-pointer">
          <Image
            src="/anime-profile-pic.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
