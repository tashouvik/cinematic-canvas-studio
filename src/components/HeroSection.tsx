/**
 * ============================================================
 * HERO SECTION — Cinematic 3D-inspired hero with parallax
 * ============================================================
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Film, Sparkles, Monitor, Scissors } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "200+", label: "Projects Edited" },
  { value: "20M+", label: "Views Generated" },
  { value: "3+", label: "Years Experience" },
];

const serviceTags = [
  "Video Editing",
  "YouTube",
  "Explainer",
  "Short-form",
  "Podcast Clips",
  "Talking Head",
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const mockupRotateX = useTransform(scrollYProgress, [0, 1], [2, 8]);
  const mockupRotateY = useTransform(scrollYProgress, [0, 1], [-5, -15]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      {/* Cinematic background image with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.12] bg-primary animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08] bg-secondary" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── LEFT COLUMN ── */}
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary tracking-wide uppercase">
                Available for Projects
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              <motion.span className="text-foreground block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                Cinematic
              </motion.span>
              <motion.span className="gradient-text-primary block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                Video Editing
              </motion.span>
              <motion.span className="text-foreground block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                That Captivates
              </motion.span>
            </h1>

            {/* Supporting text */}
            <motion.p
              className="text-text-subtle text-base md:text-lg leading-relaxed max-w-lg mb-8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
            >
              Specializing in <span className="text-foreground font-medium">educational content</span>,{" "}
              <span className="text-foreground font-medium">explainer videos</span>,{" "}
              <span className="text-foreground font-medium">YouTube editing</span>,{" "}
              <span className="text-foreground font-medium">short-form content</span>,{" "}
              <span className="text-foreground font-medium">talking head edits</span>, and{" "}
              <span className="text-foreground font-medium">podcast clips</span>.
              Crafted with Premiere Pro & After Effects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
              <a href="#portfolio" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all animate-glow-pulse relative overflow-hidden">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)" }} />
                <Play size={16} className="relative z-10" />
                <span className="relative z-10">View Portfolio</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
                Get in Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div className="flex flex-wrap gap-8 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl md:text-3xl font-bold gradient-text-primary">{s.value}</div>
                  <div className="text-xs text-text-muted-custom mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Service tags */}
            <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5 }}>
              {serviceTags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/80 text-text-subtle border border-border backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — 3D Editing Interface Mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
          style={{ y: mockupY, perspective: "1200px" }}
        >
          <motion.div style={{ rotateX: mockupRotateX, rotateY: mockupRotateY }}>
            <div className="relative rounded-2xl overflow-hidden neon-card-primary" style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-elevated), 0 0 60px hsl(var(--primary) / 0.1)" }}>
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-dark/50 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
                <div className="w-3 h-3 rounded-full bg-secondary/50" />
                <span className="ml-3 text-xs text-text-muted-custom font-mono">project_final_v3.prproj</span>
              </div>

              {/* Mockup content */}
              <div className="p-6 space-y-4">
                {[
                  { label: "V1 — Main footage", width: "90%", color: "bg-secondary/40" },
                  { label: "V2 — B-roll", width: "65%", color: "bg-primary/30" },
                  { label: "V3 — Graphics", width: "45%", color: "bg-secondary/30" },
                  { label: "A1 — Voiceover", width: "80%", color: "bg-primary/20" },
                  { label: "A2 — Music", width: "95%", color: "bg-secondary/20" },
                ].map((track) => (
                  <div key={track.label} className="flex items-center gap-3">
                    <span className="text-[10px] text-text-muted-custom font-mono w-24 shrink-0">{track.label}</span>
                    <div className="flex-1 h-6 rounded-md overflow-hidden bg-surface-dark">
                      <motion.div
                        className={`h-full ${track.color} rounded-md`}
                        initial={{ width: 0 }}
                        animate={{ width: track.width }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 pt-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <Film size={12} className="text-primary" />
                    <span className="text-[10px] text-primary font-medium">Premiere Pro</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
                    <Sparkles size={12} className="text-secondary" />
                    <span className="text-[10px] text-secondary font-medium">After Effects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div animate={{ y: [0, -12, 0], rotateZ: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 p-3 rounded-xl glass-card-enhanced shadow-lg" style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.2)" }}>
            <Monitor size={20} className="text-primary" />
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0], rotateZ: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-4 -left-4 p-3 rounded-xl glass-card-enhanced shadow-lg" style={{ boxShadow: "0 0 30px hsl(var(--secondary) / 0.2)" }}>
            <Scissors size={20} className="text-secondary" />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0], x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 -right-10 px-3 py-2 rounded-lg glass-card-enhanced" style={{ boxShadow: "0 0 25px hsl(var(--secondary) / 0.15)" }}>
            <span className="text-[10px] font-bold text-secondary">4K</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
