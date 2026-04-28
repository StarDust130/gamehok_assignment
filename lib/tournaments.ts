export type Tournament = {
  id: string;
  title: string;
  game: string;
  mode: string;
  entry: string;
  pool: string;
  participants: string;
  status: string;
  image: string;
  badgeColor?: string;
};

export const featuredTournaments: Tournament[] = [
  {
    id: "3164",
    title: "DOMINION SERIES - LEGION CUP",
    game: "FREE FIRE",
    mode: "SQUAD",
    entry: "Free",
    pool: "200000",
    participants: "864/864",
    status: "Ongoing",
    image: "/tournament-1.png",
    badgeColor: "bg-black/60 text-white",
  },
  {
    id: "3165",
    title: "GS MONTHLY SHOWDOWN",
    game: "FREE FIRE",
    mode: "SQUAD",
    entry: "Free",
    pool: "20000",
    participants: "517/576",
    status: "Ongoing",
    image: "/tournament-2.png",
    badgeColor: "bg-black/60 text-white",
  },
];

export const getTournamentById = (id: string) =>
  featuredTournaments.find((tournament) => tournament.id === id);
