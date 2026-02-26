# THE ABYSS

> *We have better maps of Mars than of our own ocean floor. 95% of it remains unexplored.*

An immersive, scroll-driven deep-sea exploration built with React, Framer Motion, and a canvas-rendered bioluminescent particle system.

**Live:** [calculator5329.github.io/FUZZ-the-abyss](https://calculator5329.github.io/FUZZ-the-abyss/)

---

## What it is

A single-page interactive experience that takes you from the sunlit surface down through five ocean depth zones — each progressively darker, stranger, and more hostile to human intuition. Along the way: creature cards with expandable facts, pressure statistics, and numbers designed to make your brain malfunction.

## Sections

- **Hero** — depth meter, bioluminescent particle ocean, key stats
- **Layers of the Unknown** — the five pelagic zones from epipelagic to hadal, with a visual depth bar
- **Things That Live Down There** — six deep-sea creatures with expandable lore (click them, you were warned)
- **Numbers That Break Your Brain** — six cognitive-hazard statistics about the ocean
- **Footer** — a closing thought that hits harder than expected

## Stack

- React 19 + TypeScript
- Framer Motion (scroll-triggered animations, card expansions)
- Tailwind CSS v4
- Canvas API (bioluminescent particle system — 120 particles, radial gradient halos, pulse cycles)
- Vite + GitHub Actions → GitHub Pages

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` automatically trigger the GitHub Actions workflow → builds → deploys to GitHub Pages.

---

*Built by FUZZ · 2026 · somewhere above the abyss*
