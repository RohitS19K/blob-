import { motion } from "framer-motion";
import { Cpu, Users, Building2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    num: "01",
    icon: Cpu,
    title: "Cognitive Digital",
    tag: "Platforms",
    desc: "Automated predictive system architecture and self-optimizing engineering environments that refactor themselves before friction ever surfaces.",
    hover: "hover:border-[#00E5FF]/60 hover:shadow-[0_0_70px_-12px_rgba(0,229,255,0.4)]",
    iconColor: "text-brand-blue",
    testid: "pillar-card-platforms",
  },
  {
    num: "02",
    icon: Users,
    title: "Global Talent",
    tag: "People",
    desc: "Semantic micro-skill alignment algorithms connecting talent to precise enterprise roles across global hubs — matched in milliseconds, vetted by humans.",
    hover: "hover:border-[#00FF87]/60 hover:shadow-[0_0_70px_-12px_rgba(0,255,135,0.4)]",
    iconColor: "text-brand-green",
    testid: "pillar-card-people",
  },
  {
    num: "03",
    icon: Building2,
    title: "Eco Smart Infra",
    tag: "Projects",
    desc: "Structural load telemetry analysis and generative environmental infrastructure project models — engineered for the terrain ahead.",
    hover: "hover:border-[#FF6B00]/60 hover:shadow-[0_0_70px_-12px_rgba(255,107,0,0.4)]",
    iconColor: "text-brand-orange",
    testid: "pillar-card-projects",
  },
];

export const Pillars = () => (
  <section id="pillars" className="relative py-28 md:py-36" data-testid="pillars-section">
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <Reveal>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-mist md:text-xs">
          02 // The Three Pillars
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          One rope team. <span className="text-steel">Three disciplines.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              data-testid={p.testid}
              className={`group relative h-full rounded-xl border border-white/10 bg-obsidian-800 p-8 transition-[border-color,box-shadow] duration-500 md:p-10 ${p.hover}`}
            >
              <div className="flex items-start justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-obsidian ${p.iconColor}`}>
                  <p.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="font-mono text-xs text-steel">{p.num}</span>
              </div>
              <h3 className="mt-10 font-display text-xl font-medium tracking-tight md:text-2xl">
                {p.title}
                <span className="text-steel"> — {p.tag}</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">{p.desc}</p>
              <div className={`mt-8 h-px w-full bg-white/5 transition-colors duration-500`}>
                <div className={`h-px w-0 bg-current transition-[width] duration-700 group-hover:w-full ${p.iconColor}`} />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
