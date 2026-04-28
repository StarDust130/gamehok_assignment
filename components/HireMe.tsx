import React from 'react';
import Image from 'next/image';

export default function HireMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
      <h1 className="text-3xl font-bold text-accent">Hire Me! 🚀</h1>
      <p className="text-gray-300">I build it all pixel perfect!</p>
      <div className="w-16 h-16 rounded-full bg-accent animate-bounce mt-4 shadow-[0_0_20px_#22c55e]"></div>
      <p className="text-sm mt-4">More features coming soon...</p>
    </div>
  );
}
