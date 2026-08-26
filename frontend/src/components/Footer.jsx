import { Mountain } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-white/10 py-12" data-testid="site-footer">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-8">
      <div className="flex items-center gap-2.5">
        <Mountain className="h-4 w-4 text-brand-blue" strokeWidth={2.2} />
        <span className="font-display text-xs font-semibold tracking-[0.18em]">HILLARY STEP SOLUTIONS</span>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel">
        27.9881° N, 86.9250° E — Elevation 8,849 m
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel">
        © 2026 — The summit is only the halfway point
      </p>
    </div>
  </footer>
);
