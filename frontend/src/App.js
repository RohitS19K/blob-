import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Pillars } from "@/components/Pillars";
import { StaffingEngine } from "@/components/StaffingEngine";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NoiseOverlay } from "@/components/NoiseOverlay";

export const scrollToId = (id) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(id, { offset: -64, duration: 1.5 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian font-sans text-white antialiased" data-testid="app-root">
      <NoiseOverlay />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <StaffingEngine />
        <ContactForm />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}
