import { Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToId } from "@/App";

const LINKS = [
  { label: "Pillars", href: "#pillars", testid: "nav-pillars-link" },
  { label: "Platform", href: "#platform", testid: "nav-platform-link" },
  { label: "Manifesto", href: "#engine", testid: "nav-manifesto-link" },
];

export const Header = () => (
  <motion.header
    initial={{ y: -70, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/60 backdrop-blur-xl"
    data-testid="site-header"
  >
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
      <button
        onClick={() => scrollToId("#hero")}
        className="group flex items-center gap-2.5"
        data-testid="brand-logo-button"
      >
        <span className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-obsidian-800 transition-colors duration-300 group-hover:border-brand-blue/50">
          <Mountain className="h-4 w-4 text-brand-blue" strokeWidth={2.2} />
        </span>
        <span className="font-display text-sm font-semibold tracking-[0.18em] text-white">
          HILLARY STEP
        </span>
      </button>

      <nav className="hidden items-center gap-8 md:flex" data-testid="main-nav">
        {LINKS.map((l) => (
          <button
            key={l.href}
            onClick={() => scrollToId(l.href)}
            data-testid={l.testid}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist transition-colors duration-300 hover:text-white"
          >
            {l.label}
          </button>
        ))}
      </nav>

      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => scrollToId("#contact")}
        data-testid="header-cta-button"
        className="rounded-full border border-white/20 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-brand-blue hover:text-brand-blue"
      >
        Speak With Us
      </motion.button>
    </div>
  </motion.header>
);
