import { Skeleton } from "@/components/ui/Skeleton";

export function HomeSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row min-h-full divide-y lg:divide-y-0 lg:divide-x divide-[#1b3523] w-full max-w-360 mx-auto px-4 md:px-6 lg:px-8">
      {/* LEFT CONTENT AREA - 68% Desktop, 100% Mobile */}
      <div className="w-full lg:w-[68%] space-y-8 py-6 lg:py-8 lg:pr-8">
        {/* Section 1: Social Star Banner */}
        <div className="space-y-3">
          <Skeleton height={200} className="rounded-lg md:h-64" />
        </div>

        {/* Section 2: Featured Tournaments */}
        <div className="space-y-4">
          <Skeleton height={24} width={220} className="rounded" />
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {[1, 2].map((i) => (
              <div key={i} className="flex-shrink-0 w-72 space-y-3">
                <Skeleton height={160} className="rounded-lg" />
                <Skeleton height={20} width="85%" className="rounded" />
                <Skeleton height={16} width="65%" className="rounded" />
                <div className="flex gap-2">
                  <Skeleton height={24} width={75} className="rounded" />
                  <Skeleton height={24} width={95} className="rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Bouncy Bird Promo (Mobile only) */}
        <div className="md:hidden space-y-3">
          <Skeleton height={200} className="rounded-lg" />
        </div>

        {/* Mobile/Tablet divider */}
        <div className="hidden md:block border-t border-[#1b3523] my-8" />

        {/* Section 4: Games Carousel */}
        <div className="space-y-4">
          <Skeleton height={24} width={180} className="rounded" />
          <Skeleton height={120} className="rounded-lg" />
        </div>

        {/* Desktop divider */}
        <div className="border-t border-[#1b3523] my-8" />

        {/* Section 5: Daily Battles */}
        <div className="space-y-4">
          <Skeleton height={24} width={160} className="rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <Skeleton key={i} height={140} className="rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR - 32% Desktop, 100% Mobile */}
      <div className="w-full lg:w-[32%] py-6 lg:py-8 lg:pl-8 space-y-4">
        <Skeleton height={24} width={180} className="rounded" />
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <Skeleton key={i} height={200} className="rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
