/**
 * ============================================================
 * 🔥 PERSONAL SIGNATURE CARD — 3D tilt with neon borders
 * ============================================================
 * ── CHANGE NAME / ROLE / AVATAR HERE ──
 * ============================================================
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Mail, Briefcase } from "lucide-react";

const serviceChips = ["Short-form", "Long-form", "Explainer", "Podcast Clips", "Talking Head"];
const stats = [
  { value: "200+", label: "Edits" },
  { value: "20M+", label: "Views" },
  { value: "3yr", label: "Experience" },
];

const SignatureCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <section className="section-padding relative">
      <div className="max-w-md mx-auto">
        <AnimatedSection>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="rounded-2xl overflow-hidden neon-card-primary"
            style={{
              boxShadow: "var(--shadow-elevated), 0 0 60px hsl(var(--primary) / 0.1)",
              transformStyle: "preserve-3d",
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* ── TOP GRADIENT SECTION with animated shimmer ── */}
            <div className="h-32 relative overflow-hidden" style={{ background: "var(--gradient-signature-top)" }}>
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>

            {/* ── BOTTOM DARK SECTION ── */}
            <div className="bg-card/90 backdrop-blur-md relative px-6 pb-8 pt-14 border-t border-border/50">
              {/* Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-card bg-surface-dark flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                  <span className="font-display text-2xl font-bold gradient-text-primary">EC</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground text-center mb-1">EditCraft</h3>
              <p className="text-sm text-primary text-center font-medium mb-1">Video Editor</p>
              <p className="text-xs text-text-muted-custom text-center mb-4">
                Educational & Explainer Specialist · YouTube Editing Focus
              </p>

              <div className="flex items-center justify-center gap-1.5 text-xs text-text-muted-custom mb-5">
                <MapPin size={12} />
                <span>Remote — Available Worldwide</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {serviceChips.map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full text-[10px] font-medium bg-accent/80 text-text-subtle border border-border backdrop-blur-sm">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-8 mb-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-lg font-bold gradient-text-primary">{s.value}</div>
                    <div className="text-[10px] text-text-muted-custom">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="#portfolio"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  <Briefcase size={14} /> Portfolio
                </a>
                <a href="mailto:hello@editcraft.com"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/30 transition-all backdrop-blur-sm"
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SignatureCard;
