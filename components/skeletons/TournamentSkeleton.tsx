import { Skeleton } from "@/components/ui/Skeleton";

export function TournamentSkeleton() {
  return (
    <div className="min-h-screen bg-[#050C08] text-white font-sans selection:bg-[#00d26a] selection:text-black">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-4 md:pt-6 pb-32 md:pb-8 space-y-6">
        {/* TOP NAVIGATION */}
        <div className="flex justify-between items-center mb-4">
          <Skeleton height={32} width={60} className="rounded" />
          <Skeleton height={32} width={32} className="rounded-full" />
        </div>

        {/* HERO BANNER */}
        <Skeleton height={200} className="md:h-64 rounded-xl" />

        {/* TITLE & ORGANIZER SECTION */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 space-y-3">
            <Skeleton height={32} width="80%" />
            <Skeleton height={14} width="40%" />
            <div className="flex gap-2 pt-2">
              <Skeleton height={24} width={80} className="rounded" />
              <Skeleton height={24} width={100} className="rounded" />
            </div>
          </div>
          <Skeleton
            height={64}
            width={64}
            className="rounded-full flex-shrink-0"
          />
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex gap-8 border-b border-[#1b3523]">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} height={20} width={80} className="rounded" />
          ))}
        </div>

        {/* CONTENT GRID - Desktop (2 columns), Mobile (1 column) */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="w-full md:w-[60%] lg:w-[65%] space-y-8">
            {/* Details Section */}
            <div className="space-y-4">
              <Skeleton height={20} width={100} className="mb-6" />
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton height={14} width="60%" />
                    <Skeleton height={18} width="80%" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Prize Pool */}
            <div className="md:hidden space-y-4">
              <Skeleton height={20} width={100} />
              <Skeleton height={300} className="rounded-lg" />
            </div>

            {/* Rounds Section */}
            <div className="space-y-4">
              <Skeleton height={20} width={140} className="mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="space-y-2 pb-4 border-b border-[#1b3523]"
                  >
                    <Skeleton height={18} width="60%" />
                    <Skeleton height={14} width="50%" />
                  </div>
                ))}
              </div>
            </div>

            {/* How to Join Section */}
            <div className="space-y-4">
              <Skeleton height={20} width={160} className="mb-6" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} height={14} width="90%" />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-[40%] lg:w-[35%] space-y-8">
            {/* Desktop Prize Pool */}
            <div className="hidden md:block space-y-4">
              <Skeleton height={20} width={100} />
              <Skeleton height={300} className="rounded-lg" />
            </div>

            {/* Organizer Section */}
            <div className="space-y-4">
              <Skeleton height={20} width={100} />
              <Skeleton height={200} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PROGRESS BAR SKELETON */}
      <div className="fixed left-0 right-0 py-4 bg-[#0a150f] border-t border-[#1b3523] z-40 text-center shadow-[0_-10px_20px_rgba(0,0,0,0.5)] bottom-0 md:left-64">
        <Skeleton height={16} width={120} className="mx-auto" />
      </div>
    </div>
  );
}
