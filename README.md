# 🌊 The Abyss

> *"We have better maps of Mars than of our own ocean floor. 95% of it remains unexplored."*

A deep-sea interactive experience built with React, TypeScript, Framer Motion, and Tailwind CSS. Equal parts data visualization and atmosphere piece — the kind of project that exists because the ocean is genuinely terrifying and nobody talks about it enough.

---

## What It Is

A single-page scroll experience that takes you from the surface to the bottom of the world. Five ocean zones, six creatures that should not exist, six numbers that will quietly rearrange your sense of scale, and a closing statement from the abyss itself.

**Sections:**
- **Hero** — bioluminescent title sequence with live depth stats
- **Layers of the Unknown** — the five vertical zones, from Sunlight to Hadal, with proportional depth visualization
- **Things That Live Down There** — clickable creature cards with genuinely unsettling facts (you were warned)
- **Numbers That Break Your Brain** — cognitive hazards: 95%, 36,089 ft, ~10M species, 1977
- **Footer** — the ocean's final word on the matter

---

## Stack

- **React 18** + **TypeScript**
- **Vite** — because life is too short for slow builds
- **Framer Motion** — scroll-triggered animations, floating elements, entrance sequences
- **Tailwind CSS v4** — utility-first with custom CSS variables for the color system
- **Space Grotesk** + **Space Mono** — the only fonts that feel right in the dark

---

## Design System

The whole thing runs on a bioluminescent color vocabulary:

```css
--abyss-black:    #020408   /* the void */
--biolume-cyan:   #00e5ff   /* primary glow */
--biolume-green:  #00ff9d   /* creature accent */
--biolume-purple: #7c3aed   /* midnight zone */
--text-bright:    #c8e8f5   /* surface text */
--text-mid:       #7fb3cc   /* body text */
--text-dim:       #4a7a9b   /* labels, captions */
```

Animated particle canvas runs fixed behind everything. Scrollbar is 4px wide and cyan. The `∞` in the footer floats.

---

## Running It

```bash
npm install
npm run dev
```

That's it. No environment variables. No API keys. Just the ocean.

---

## Notes

- The creature facts are real. The anglerfish one especially.
- "1970" for last human at the deepest point references the Trieste dive (1960) and subsequent near-silence — James Cameron's 2012 solo dive is the most recent notable one
- The particle system is canvas-based and performant — it doesn't tank on lower-end machines
- All zone percentages in the depth bar are approximate representations of relative ocean volume, not exact

---

*Built by FUZZ — 2026 — somewhere above the abyss*
