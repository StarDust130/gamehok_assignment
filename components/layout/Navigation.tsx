"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, Users, MessageSquare, LogOut, Bell } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "My Tournament", href: "/tournaments", icon: Trophy },
  { name: "Social", href: "/social", icon: Users },
  { name: "Chat", href: "/chat", icon: MessageSquare },
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
      <div className="p-6 mt-auto">
        <button className="flex items-center space-x-3 text-red-500 hover:text-red-400 transition-colors w-full px-4 py-2">
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
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#031308] border-t border-card-border flex justify-around items-center py-2 z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 transition-colors ${isActive ? "text-accent" : "text-gray-400"}`}
          >
            <item.icon
              size={24}
              className={isActive ? "mb-1 text-accent" : "mb-1"}
              fill={isActive ? "currentColor" : "none"}
            />
            <span className="text-[10px] sm:text-xs">{item.name}</span>
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
            src="/anime-profile-pic.webp"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-1"></div>

      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center bg-[#0d2212] rounded-full px-3 py-1.5 border border-accent">
          <Image
            src="/gamehok-coin.webp"
            alt="Coin"
            width={16}
            height={16}
            className="mr-2"
          />
          <span className="text-white font-bold text-sm">2456</span>
        </div>
        <button className="text-gray-300 hover:text-white relative">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#020d06]"></span>
        </button>
        <div className="w-10 h-10 hidden md:block relative overflow-hidden rounded-full border-2 border-transparent hover:border-accent transition-colors ml-4 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&auto=format&fit=crop"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </header>
  );
}
