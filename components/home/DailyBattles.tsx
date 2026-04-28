'use client';

interface DailyBattleCardProps {
  title: string;
  organization: string;
  description: string;
  logoText: string;
  borderColorClass: string;
  bgColor: string;
  textColor: string;
  hoverBorderClass?: string;
  hoverTextClass?: string;
}

const DailyBattleCard = ({
  title,
  organization,
  description,
  logoText,
  borderColorClass,
  bgColor,
  textColor,
  hoverBorderClass = 'hover:border-accent',
  hoverTextClass = 'text-accent',
}: DailyBattleCardProps) => (
  <div
    className={`bg-[#0b1710] border border-[#1b3523] rounded-2xl p-4 md:p-6 text-center ${hoverBorderClass} transition-colors cursor-pointer group flex flex-col items-center`}
  >
    {/* Logo Badge */}
    <div
      className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${bgColor} flex items-center justify-center border-2 md:border-3 ${borderColorClass} mb-3 shadow-md`}
    >
      <span className={`font-bold text-xl md:text-2xl mt-1 leading-none italic ${textColor}`}>
        {logoText}
      </span>
    </div>

    {/* Title */}
    <h4 className="font-bold text-sm md:text-lg mb-1 leading-tight text-white">
      {title}
    </h4>

    {/* Organization */}
    <p className="text-[10px] md:text-xs text-gray-400 mb-3">
      By {organization}
    </p>

    {/* Description */}
    <p className="text-[11px] md:text-sm text-gray-300 mb-4 h-10 md:h-auto overflow-hidden line-clamp-2 md:line-clamp-none">
      {description}
    </p>

    {/* CTA Button */}
    <button className={`${hoverTextClass} font-semibold flex items-center justify-center w-full group-hover:gap-2 transition-all text-xs md:text-sm mt-auto`}>
      Explore scrims <span className="ml-1">&gt;</span>
    </button>
  </div>
);

export const DailyBattles = () => (
  <section>
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg md:text-xl font-bold text-white">
        Compete in Daily Battles
      </h3>
      <button className="text-accent text-sm font-semibold hover:underline uppercase tracking-wider">
        View All
      </button>
    </div>

    {/* Battle Cards Grid */}
    <div className="grid grid-cols-2 gap-4">
      {/* GS Esports Card */}
      <DailyBattleCard
        title="GS Daily Scrims"
        organization="GS Esports"
        description="Play GS daily scrims and sharpen your skills for the bigger events"
        logoText="-GS-"
        borderColorClass="border-[#a855f7]"
        bgColor="bg-[#2e1065]"
        textColor="text-white"
        hoverBorderClass="hover:border-accent"
        hoverTextClass="text-accent"
      />

      {/* TMR Esports Card */}
      <DailyBattleCard
        title="TMR Daily Scrims"
        organization="TMR Esports"
        description="Play TMR daily scrims and sharpen your skills for the bigger events"
        logoText="-TMR-"
        borderColorClass="border-[#eab308]"
        bgColor="bg-black"
        textColor="text-[#fef08a]"
        hoverBorderClass="hover:border-[#eab308]"
        hoverTextClass="text-[#eab308]"
      />
    </div>
  </section>
);