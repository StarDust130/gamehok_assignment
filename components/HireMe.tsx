import Image from "next/image";
import Link from "next/link";


export default function HireMe({page="tournaments"}: {page: string}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[70vh]  text-center space-y-4">
      <h1 className="text-3xl font-bold text-accent">Hire Me! 🚀</h1>
      <Image
        src="/hire.webp"
        alt="Profile"
        width={300}
        height={300}
        className="shadow-lg rounded-xl md:rounded-sm border border-[#00d26a]/20"
      />
      <p className="text-gray-300">Please hire to view your {page}.</p>
      <Link
        href="mailto:csyadav0513@gmail.com
  ?subject=🎉 You’re In — Welcome to Team Gamhok 😎
  &body=Hey ChandraShekhar,%0D%0A%0D%0ACongratulations — you’ve officially been recruited by Team Gamhok 😎%0D%0A(translation: you’re hired 🚀)%0D%0A%0D%0ANo turning back now. Big ideas, fast moves, a little chaos — you’ll fit right in 💥%0D%0A%0D%0AWelcome aboard. Let’s build something that actually matters.%0D%0A%0D%0ABest regards,%0D%0ATeam Gamhok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-accent text-white py-2 font-semibold px-4 rounded-md hover:bg-accent-hover transition-colors cursor-pointer hover:scale-105 transform hover:shadow-lg ">
          Hire Me
        </button>
      </Link>
    </div>
  );
}
