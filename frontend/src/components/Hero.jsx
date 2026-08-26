import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FluidBlob } from "@/components/FluidBlob";
import { scrollToId } from "@/App";

const EASE = [0.76, 0, 0.24, 1];

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      data-testid="hero-section"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-blue/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-orange/10 blur-[140px]" />
        {[18, 34, 52, 72].map((top, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 rounded-[50%] border border-white/[0.05]"
            style={{ top: `${top}%`, width: `${60 + i * 26}vw`, height: `${26 + i * 12}vw` }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: blobY, opacity: fade }}
        className="absolute inset-y-0 right-0 w-full lg:left-[38%] lg:w-[62%]"
      >
        <FluidBlob />
      </motion.div>

      <motion.div style={{ y: textY }} className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-mist md:text-xs"
            data-testid="hero-overline"
          >
            <span className="text-brand-blue">●</span>&ensp;Expedition 01&ensp;//&ensp;27.9881° N, 86.9250° E
          </motion.p>

          <h1 className="font-display text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl lg:text-[5.4rem]" data-testid="hero-headline">
            <MaskedLine delay={0.35}>
              The <span className="text-brand-blue [text-shadow:0_0_40px_rgba(0,229,255,0.45)]">Ultimate Ascent.</span>
            </MaskedLine>
            <MaskedLine delay={0.48}>No Borders.</MaskedLine>
            <MaskedLine delay={0.61}>One Platform.</MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-mist md:text-lg"
            data-testid="hero-subheadline"
          >
            We are your operational Sherpas. Hillary Step merges the strategic intuition of Human
            Expertise with the hyper-velocity of Machine Intelligence into a single global SaaS
            platform — navigating cross-border friction at the City, State, and Country level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId("#contact")}
              data-testid="hero-cta-button"
              className="group flex animate-pulse-glow items-center gap-3 rounded-full bg-white px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-obsidian transition-colors duration-300 hover:bg-brand-blue"
            >
              Begin Your Ascent
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.button>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel">
              Click the grid — watch borders break
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};
