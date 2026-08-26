import { Globe2, Scale, MapPin, Terminal, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const CHAPTERS = [
  {
    num: "01",
    icon: Globe2,
    title: "Borders, Automated",
    body: "International hiring friction dissolves inside a single SaaS layer. Entity setup, contracts, and cross-continental payroll compliance run as background processes — not blockers.",
  },
  {
    num: "02",
    icon: Scale,
    title: "Compliance, Cross-Continental",
    body: "A living regulatory engine tracks statutory change across every operating jurisdiction in real time, keeping each engagement audit-ready by default.",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Labor Law, Hyper-Local",
    body: "Country, state, and city-level labor requirements are mapped node by node — the same grid you saw fracture and reassemble above. Precision down to the postal code.",
  },
];

const MACHINE_LOG = [
  "> ingest: 214,306 candidate signals",
  "> semantic_match: 99.4% confidence",
  "> jurisdiction_check: 47/47 PASS",
  "> latency: 0.31s — precision: absolute",
];

export const StaffingEngine = () => (
  <section id="platform" className="relative py-28 md:py-36" data-testid="staffing-engine-section">
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <Reveal>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-mist md:text-xs">
          03 // The Global Staffing Engine
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Every Client. Every Candidate. <span className="text-brand-green">Every City.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
          One platform cracks the global market — not a patchwork of regional vendors. This is the
          engine manifesto.
        </p>
      </Reveal>

      <div id="engine" className="mt-20 space-y-6">
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.num} delay={i * 0.1}>
            <div
              className="relative overflow-hidden rounded-xl border border-white/10 bg-obsidian-800"
              data-testid={`engine-chapter-${c.num}`}
            >
              <span
                aria-hidden="true"
                className="text-stroke-faint pointer-events-none absolute -right-4 -top-8 select-none font-mono text-[9rem] font-medium leading-none md:text-[13rem]"
              >
                {c.num}
              </span>
              <div className="relative grid grid-cols-1 gap-6 p-8 md:grid-cols-12 md:p-12">
                <div className="flex items-center gap-4 md:col-span-4">
                  <c.icon className="h-6 w-6 shrink-0 text-brand-blue" strokeWidth={1.6} />
                  <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-mist md:col-span-7 md:col-start-6 md:text-base">
                  {c.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-xl border border-white/10 bg-obsidian p-8 md:p-10" data-testid="machine-block">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-brand-blue" strokeWidth={1.8} />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-blue md:text-xs">
                The Machine
              </p>
            </div>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">Instant mathematical precision.</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
              The engine filters the entire global dataset in milliseconds — semantic skill graphs,
              jurisdictional checks, availability telemetry. No fatigue. No bias drift. No borders.
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-black/40 p-5 font-mono text-[11px] leading-loose text-brand-green/90 md:text-xs">
              {MACHINE_LOG.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="h-full rounded-xl border border-white/10 bg-obsidian p-8 md:p-10" data-testid="human-block">
            <div className="flex items-center gap-3">
              <Handshake className="h-5 w-5 text-brand-orange" strokeWidth={1.8} />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-orange md:text-xs">
                The Human
              </p>
            </div>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">Final strategic alignment.</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
              Our specialists take the machine's shortlist and secure what no algorithm can —
              cultural vetting, negotiation intuition, and the judgment to know when the map is not
              the terrain.
            </p>
            <p className="mt-8 border-l-2 border-brand-orange/60 pl-5 font-display text-lg leading-snug text-white/90">
              "The machine finds the route. The Sherpa gets you to the summit."
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
