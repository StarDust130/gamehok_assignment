"use client";

interface DailyBattleCardProps {
  title: string;
  organization: string;
  description: string;
  logoSrc: string;
  logoShadow?: string;
}

const DailyBattleCard = ({
  title,
  organization,
  description,
  logoSrc,
  logoShadow = "",
}: DailyBattleCardProps) => (
  // 1. Premium Gradient Background & Hover State Transitions
  <div className="relative bg-gradient-to-b from-[#132218] to-[#080d0a] border border-[#1a3322] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-7 flex flex-col items-center text-center hover:border-[#00d26a]/60 hover:shadow-[0_0_20px_rgba(0,210,106,0.08)] transition-all duration-300 cursor-pointer group h-full shadow-lg overflow-hidden">
    {/* Subtle top edge highlight that appears on hover */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* 2. Scaled Logo with Image Zoom on Hover */}
    <div
      className={`w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[68px] md:h-[68px] rounded-full overflow-hidden mb-3 md:mb-5 shrink-0 ${logoShadow} ring-1 ring-white/5 group-hover:ring-white/10 transition-all`}
    >
      <img
        src={logoSrc}
        alt={organization}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* 3. Responsive Typography scaled for 2-column mobile fitting */}
    <h4 className="text-[14px] sm:text-[16px] md:text-[19px] font-extrabold text-white mb-1 tracking-wide leading-tight transition-colors">
      {title}
    </h4>

    <p className="text-[10px] sm:text-[12px] md:text-[13px] font-bold text-white/90 mb-2 md:mb-3 tracking-wide">
      By {organization}
    </p>

    <p className="text-[10px] sm:text-[11px] md:text-[13px] text-[#8A9990] leading-[1.4] mb-4 md:mb-6 max-w-[220px]">
      {description}
    </p>

    {/* 4. Enhanced CTA with glowing text on hover */}
    <button className="text-[#00d26a] font-bold text-[11px] sm:text-[13px] md:text-[14px] mt-auto flex items-center justify-center w-full transition-all group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(0,210,106,0.4)]">
      Explore scrims{" "}
      <span className="ml-1.5 font-black text-[14px] md:text-[18px] leading-none transition-transform group-hover:translate-x-1">
        &rsaquo;
      </span>
    </button>
  </div>
);

export const DailyBattles = () => (
  <section className="w-full mb-10">
    <div className="mb-4 md:mb-6">
      <h3 className="text-[18px] md:text-[24px] font-extrabold text-white tracking-wide">
        Compete in Daily Battles
      </h3>
    </div>

    {/* Grid Logic: 2 columns on mobile, 3 columns on medium screens and up */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      <DailyBattleCard
        title="GS Daily Scrims"
        organization="GS Esports"
        description="Play GS daily scrims and sharpen your skills for the bigger events"
        logoSrc="/organizer-logo.jpeg"
        logoShadow="shadow-[0_0_20px_rgba(147,51,234,0.35)]"
      />

      <DailyBattleCard
        title="TMR Daily Scrims"
        organization="TMR Esports"
        description="Play TMR daily scrims and sharpen your skills for the bigger events"
        logoSrc="/tmr_esports.jpg"
        logoShadow="shadow-[0_0_15px_rgba(234,179,8,0.25)]"
      />


    </div>
  </section>
);
