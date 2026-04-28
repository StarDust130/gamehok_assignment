"use client";

interface VideoCardProps {
  title: string;
  embedId: string; // Changed to accept the YouTube Video ID directly
}

const VideoCard = ({ title, embedId }: VideoCardProps) => (
  <div className="flex flex-col gap-2.5">
    {/* Iframe Wrapper: Maintains the 16:9 aspect ratio and dark theme borders */}
    <div className="relative aspect-[16/9] w-full rounded-xl md:rounded-2xl overflow-hidden border border-[#1b3523] bg-[#050C08] shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: 0 }}
      ></iframe>
    </div>

    {/* External Title Placement */}
    <h4 className="font-extrabold text-[14px] text-white tracking-wide ml-1">
      {title}
    </h4>
  </div>
);

export const WatchBestTournaments = () => (
  <section className="sticky top-[24px] space-y-4 w-full">
    {/* Header */}
    <h3 className="text-[18px] md:text-[19px] font-extrabold text-white tracking-wide mb-4">
      Watch The Best of Tournaments 🌟
    </h3>

    {/* Video Cards using embed IDs */}
    <VideoCard title="Call of Duty" embedId="2-Pe0-8A9O8" />

    <VideoCard title="BGMI Tournament" embedId="90EmKhWGDa4" />
  </section>
);
