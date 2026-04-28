import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar, BottomNav, Header } from "@/components/layout/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamehok - Play, Win, Connect",
  description: "Pixel perfect recreation of Gamehok UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex h-full bg-[#020d06] text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64 md:border-l md:border-[#1b3523] overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto w-full pb-24 md:pb-0 ">
            {children}
          </main>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
