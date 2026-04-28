# GameHok Assignment 🌟

<p align="center">
	<img src="https://c.tenor.com/BrCcrHCNYt8AAAAC/tenor.gif" alt="Gaming motion gif" width="320" />
</p>

<p align="center">
	<strong>A polished esports-style Next.js experience built for the GameHok assignment.</strong>
</p>

<p align="center">
	<a href="https://gamehok-assignment-stardust.vercel.app/">Live Demo</a>
	·
	<a href="#tech-stack">Tech Stack</a>
	·
	<a href="#folder-structure">Folder Structure</a>
</p>

## Overview ✨

GameHok Assignment is a modern tournament and gaming hub UI built with the App Router. The experience focuses on a bold visual layout, responsive sections, loading states, and smooth motion so the site feels more like a product showcase than a basic assignment.

The live site is available here:

https://gamehok-assignment-stardust.vercel.app/

## Features 🎮

- Hero-style home screen with featured tournament content
- Responsive layout with mobile-first behavior
- Dedicated routes for tournaments, social, chat, and tournament detail pages
- Loading skeletons for a smoother first impression
- Motion-driven UI elements for a more premium feel
- Clean component-based structure for reusable sections

## Tech Stack 🛠️

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Approach 🧠

The app is structured around reusable UI sections so the home page can feel rich without becoming hard to maintain. The design leans on strong spacing, dark gaming-inspired surfaces, crisp typography, and animated transitions to make the interface feel lively.

Key ideas behind the build:

- Split the experience into focused content blocks instead of one oversized page
- Keep the UI responsive across desktop and mobile breakpoints
- Use skeleton states to avoid abrupt loading flashes
- Organize shared components so pages stay small and readable

## Folder Structure 📁

```text
app/
	globals.css
	layout.tsx
	page.tsx
	chat/
		page.tsx
	social/
		page.tsx
	tournament/
		[id]/
			page.tsx
	tournaments/
		page.tsx
components/
	game/
		home/
			BouncyBirdPromo.tsx
			DailyBattles.tsx
			FeaturedTournaments.tsx
			GamesCarousel.tsx
			SocialStarBanner.tsx
			TournamentCard.tsx
			WatchBestTournaments.tsx
	layout/
		Navigation.tsx
	skeletons/
		HomeSkeleton.tsx
		TournamentSkeleton.tsx
lib/
	tournaments.ts
public/
types/
```

## Getting Started 🚀

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Run

```bash
npm run build
npm run start
```

## Notes 💡

This project is deployed on Vercel and styled to feel like a playable esports dashboard. If you want, I can also turn this into a more personal portfolio-style README with your name, role, and contact links.
