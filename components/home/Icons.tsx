// ============================================================================
// CUSTOM SVG ICONS
// ============================================================================

export const PostsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
  >
    <rect x="4" y="5" width="14" height="14" rx="2" strokeLinecap="round" />
    <path
      d="M4 14l3.5-3.5 2.5 2.5 3-3 5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="9" r="1.5" />
    <circle cx="19" cy="5" r="4.5" fill="#045622" stroke="currentColor" />
    <path d="M17 5h4M19 3v4" strokeLinecap="round" />
  </svg>
);

export const FollowersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
  >
    <circle cx="10" cy="10" r="2.5" />
    <path d="M15 17v-1a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1" strokeLinecap="round" />
    <path d="M14 9a2.5 2.5 0 0 1 0 5" strokeLinecap="round" />
    <path d="M17 17v-1a3 3 0 0 0-2-2.8" strokeLinecap="round" />
    <path d="M6 9a2.5 2.5 0 0 0 0 5" strokeLinecap="round" />
    <path
      d="M16 3h5v4h-2l-1.5 1.5V7h-1.5V3z"
      fill="#045622"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path d="M17.5 5h2M18.5 4v2" strokeLinecap="round" />
  </svg>
);

export const LikesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
  >
    <path
      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3ZM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================================================
// STAT ICON WRAPPER
// ============================================================================

interface StatIconProps {
  icon: React.ReactNode;
  label: string;
  colorClass: string;
}

export const StatIcon = ({ icon, label, colorClass }: StatIconProps) => (
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
