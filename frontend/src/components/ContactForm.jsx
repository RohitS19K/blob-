import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const INTERESTS = ["Cognitive Digital — Platforms", "Global Talent — People", "Eco Smart Infra — Projects"];

const inputCls =
  "w-full rounded-lg border border-white/10 bg-obsidian px-4 py-3 text-sm text-white placeholder:text-steel outline-none transition-colors duration-300 focus:border-brand-blue/70";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: INTERESTS[0], message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success("Transmission received. Our Sherpas will reach out within 24 hours.");
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", interest: INTERESTS[0], message: "" });
      setSent(false);
    }, 1200);
  };

  return (
    <section id="contact" className="relative flex flex-col items-center py-28 md:py-36" data-testid="contact-section">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[130px]" />
      </div>
      <Reveal className="relative w-full max-w-lg px-4 md:px-0">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-mist md:text-xs">
          04 // Final Ridge — Basecamp Radio
        </p>
        <h2 className="mt-4 text-center font-display text-3xl font-medium tracking-tight md:text-5xl">
          Speak With Us
        </h2>
        <p className="mt-4 text-center text-sm text-mist md:text-base">
          Tell us the summit you're aiming for. We'll chart the route.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-obsidian-800 p-6 md:p-8" data-testid="contact-form">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required value={form.name} onChange={set("name")} placeholder="Full name" className={inputCls} data-testid="contact-name-input" />
            <input required type="email" value={form.email} onChange={set("email")} placeholder="Work email" className={inputCls} data-testid="contact-email-input" />
          </div>
          <input value={form.company} onChange={set("company")} placeholder="Company" className={inputCls} data-testid="contact-company-input" />
          <select value={form.interest} onChange={set("interest")} className={inputCls} data-testid="contact-interest-select">
            {INTERESTS.map((i) => (
              <option key={i} value={i} className="bg-obsidian">{i}</option>
            ))}
          </select>
          <textarea required value={form.message} onChange={set("message")} placeholder="What's your summit?" rows={4} className={`${inputCls} resize-none`} data-testid="contact-message-input" />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={sent}
            data-testid="contact-submit-button"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-obsidian transition-colors duration-300 hover:bg-brand-blue disabled:opacity-70"
          >
            {sent ? "Signal Locked" : "Begin Your Ascent"}
            <Send className="h-4 w-4" />
          </motion.button>
        </form>
      </Reveal>
    </section>
  );
};
