/**
 * ============================================================
 * HERO SECTION — Cinematic opening with strong positioning
 * ============================================================
 * Left: Headline, subtext, CTAs, stats, service tags
 * Right: 3D editing interface mockup
 * ============================================================
 */

import { motion } from "framer-motion";
import { Play, ArrowRight, Film, Sparkles, Monitor, Scissors } from "lucide-react";

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

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32">
    {/* Hero gradient overlay */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

    <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* ── LEFT COLUMN ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            Available for Projects
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
          <span className="text-foreground">Cinematic</span>
          <br />
          <span className="gradient-text-primary">Video Editing</span>
          <br />
          <span className="text-foreground">That Captivates</span>
        </h1>

        {/* Supporting text */}
        <p className="text-text-subtle text-base md:text-lg leading-relaxed max-w-lg mb-8">
          Specializing in <span className="text-foreground font-medium">educational content</span>,{" "}
          <span className="text-foreground font-medium">explainer videos</span>,{" "}
          <span className="text-foreground font-medium">YouTube editing</span>,{" "}
          <span className="text-foreground font-medium">short-form content</span>,{" "}
          <span className="text-foreground font-medium">talking head edits</span>, and{" "}
          <span className="text-foreground font-medium">podcast clips</span>.
          Crafted with Premiere Pro & After Effects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all animate-glow-pulse"
          >
            <Play size={16} />
            View Portfolio
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mb-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text-primary">
                {s.value}
              </div>
              <div className="text-xs text-text-muted-custom mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Service tags */}
        <div className="flex flex-wrap gap-2">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent text-text-subtle border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── RIGHT COLUMN — 3D Editing Interface Mockup ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative hidden lg:block"
      >
        <div className="relative">
          {/* Main mockup frame */}
          <div
            className="relative rounded-2xl border border-border overflow-hidden"
            style={{
              background: "var(--gradient-card)",
              boxShadow: "var(--shadow-elevated)",
              transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
            }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
              <div className="w-3 h-3 rounded-full bg-secondary/50" />
              <span className="ml-3 text-xs text-text-muted-custom font-mono">
                project_final_v3.prproj
              </span>
            </div>

            {/* Mockup content */}
            <div className="p-6 space-y-4">
              {/* Timeline tracks */}
              {[
                { label: "V1 — Main footage", width: "90%", color: "bg-secondary/40" },
                { label: "V2 — B-roll", width: "65%", color: "bg-primary/30" },
                { label: "V3 — Graphics", width: "45%", color: "bg-secondary/30" },
                { label: "A1 — Voiceover", width: "80%", color: "bg-primary/20" },
                { label: "A2 — Music", width: "95%", color: "bg-secondary/20" },
              ].map((track) => (
                <div key={track.label} className="flex items-center gap-3">
                  <span className="text-[10px] text-text-muted-custom font-mono w-24 shrink-0">
                    {track.label}
                  </span>
                  <div className="flex-1 h-6 rounded-md overflow-hidden bg-surface-dark">
                    <div
                      className={`h-full ${track.color} rounded-md`}
                      style={{ width: track.width }}
                    />
                  </div>
                </div>
              ))}

              {/* Tool badges */}
              <div className="flex gap-3 pt-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
                  <Film size={12} className="text-primary" />
                  <span className="text-[10px] text-primary font-medium">Premiere Pro</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary/10 border border-secondary/20">
                  <Sparkles size={12} className="text-secondary" />
                  <span className="text-[10px] text-secondary font-medium">After Effects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 p-3 rounded-xl glass-card shadow-lg"
          >
            <Monitor size={20} className="text-primary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 p-3 rounded-xl glass-card shadow-lg"
          >
            <Scissors size={20} className="text-secondary" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
