const ITEMS = [
  { text: "Operational Sherpas", color: "text-brand-blue" },
  { text: "No Borders", color: "text-brand-green" },
  { text: "Machine Intelligence", color: "text-brand-orange" },
  { text: "Human Expertise", color: "text-brand-blue" },
  { text: "City / State / Country", color: "text-brand-green" },
  { text: "One Global Platform", color: "text-brand-orange" },
  { text: "Cross-Border Friction, Solved", color: "text-brand-blue" },
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="px-8 font-mono text-[11px] uppercase tracking-[0.3em] text-mist/80">
          {item.text}
        </span>
        <span className={`text-[8px] ${item.color}`}>●</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div
    className="overflow-hidden border-y border-white/10 bg-obsidian-800/50 py-5"
    data-testid="editorial-marquee"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee">
      <Row />
      <Row />
    </div>
  </div>
);
