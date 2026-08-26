# PRD — Hillary Step Solutions Landing Page

## Original Problem Statement
Create an extraordinary, enterprise-grade interactive single-page app section for "Hillary Step Solutions" designed to outperform premium SaaS landing pages. Dark immersive mountaineering-expedition aesthetic (#0B0F19), inspired by emergentagent.com's clean structure, featuring a hyper-premium Three.js/WebGL "Global Network Interactive Fluid Blob" (thousands of glowing nodes in Electric Blue / Emerald Green / Deep Orange) that magnetically morphs toward the cursor and fractures/reassembles on click. Includes kinetic hero ("The Ultimate Ascent. No Borders. One Platform."), three glowing pillar cards (Cognitive Digital, Global Talent, Eco Smart Infra), Global Staffing Engine module ("Every Client. Every Candidate. Every City."), and a "Speak With Us" form (front-end demo only). User choices: Three.js/WebGL, demo form, part of a bigger site. Award-worthy craft: framer-motion reveals, lenis smooth scroll, masked line-by-line hero reveal, numbered manifesto chapters, editorial marquee, parallax hero.

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui, Three.js via @react-three/fiber (5,200-particle fluid blob, custom useFrame physics), framer-motion (masked reveals, parallax, scroll reveals), lenis (momentum scroll), sonner (toasts), lucide-react icons
- Backend: FastAPI + MongoDB (template kept; not used by the demo form)
- Fonts: Clash Display (Fontshare), Plus Jakarta Sans + JetBrains Mono (Google Fonts)

## User Personas
- Enterprise decision-makers (CTO/COO/Head of Talent) evaluating cross-border staffing/IT/infra partners
- Conversion target: click "Begin Your Ascent" → Speak With Us form

## Core Requirements (static)
- Deep obsidian dark mode (#0B0F19), brand accents: #00E5FF blue, #00FF87 green, #FF6B00 orange
- Hero with masked kinetic headline + glowing CTA scrolling to contact form
- Three pillar cards with brand-color glow hover
- Staffing engine manifesto with numbered chapters + Human/Machine split
- WebGL fluid blob: hover magnetic morph, click fracture → 2s reassembly
- Ultra-scannable, conversion-optimized

## Implemented (2026-08-26)
- Kinetic hero with staggered masked line reveal, expedition overline, parallax blob/text on scroll
- Interactive Three.js fluid blob (5,200 glowing nodes, magnetic cursor attraction, click fracture + 2s reassembly, idle organic wobble + rotation)
- Lenis momentum scrolling wired to all anchor CTAs
- Editorial marquee (slow drift, brand-color separators)
- Three pillar cards with exact brand-color border glow + dropshadow hover
- Staffing engine: 3 numbered manifesto chapters (giant outline numerals) + Machine (terminal log) / Human (editorial quote) split blocks
- Speak With Us demo form with "Signal Locked" state + success toast (no backend storage — per user choice)
- Footer with Everest coordinates; global grain overlay; glass fixed header

## Backlog
- P0 (when ready): wire contact form to backend (MongoDB lead capture) or email service (Resend)
- P1: additional site pages (user said "part of a bigger site") — About/Expedition story, Careers, Case Studies
- P1: mobile nav menu (hamburger) — current header hides links on small screens
- P2: GPU shader-based blob upgrade (curl noise), reduced-motion accessibility mode, locale switcher

## Next Tasks
1. Add backend lead capture for the Speak With Us form
2. Build the second site page (user indicated a bigger site is coming)
3. Mobile hamburger navigation
