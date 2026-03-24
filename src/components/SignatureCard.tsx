/**
 * ============================================================
 * 🔥 PERSONAL SIGNATURE CARD
 * ============================================================
 * Premium identity card with gradient header, avatar, stats,
 * service chips, and action buttons.
 * ── CHANGE NAME / ROLE / AVATAR HERE ──
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import { MapPin, Mail, Briefcase } from "lucide-react";

const serviceChips = [
  "Short-form",
  "Long-form",
  "Explainer",
  "Podcast Clips",
  "Talking Head",
];

const stats = [
  { value: "200+", label: "Edits" },
  { value: "20M+", label: "Views" },
  { value: "3yr", label: "Experience" },
];

const SignatureCard = () => (
  <section className="section-padding relative">
    <div className="max-w-md mx-auto">
      <AnimatedSection>
        <div className="rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-elevated)" }}>
          {/* ── TOP GRADIENT SECTION ── */}
          <div
            className="h-28 relative"
            style={{ background: "var(--gradient-signature-top)" }}
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }} />
          </div>

          {/* ── BOTTOM DARK SECTION ── */}
          <div className="bg-card relative px-6 pb-8 pt-14">
            {/* ── Avatar / Logo ── */}
            {/* REPLACE LOGO IMAGE HERE */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-card bg-surface-dark flex items-center justify-center">
                <span className="font-display text-2xl font-bold gradient-text-primary">EC</span>
              </div>
            </div>

            {/* ── Name & Role ── */}
            {/* CHANGE NAME HERE */}
            <h3 className="font-display text-xl font-bold text-foreground text-center mb-1">
              EditCraft
            </h3>
            {/* CHANGE ROLE HERE */}
            <p className="text-sm text-primary text-center font-medium mb-1">
              Video Editor
            </p>
            <p className="text-xs text-text-muted-custom text-center mb-4">
              Educational & Explainer Specialist · YouTube Editing Focus
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-text-muted-custom mb-5">
              <MapPin size={12} />
              <span>Remote — Available Worldwide</span>
            </div>

            {/* ── Service Chips ── */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {serviceChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-[10px] font-medium bg-accent text-text-subtle border border-border"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* ── Stats Row ── */}
            <div className="flex justify-center gap-8 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-lg font-bold gradient-text-primary">{s.value}</div>
                  <div className="text-[10px] text-text-muted-custom">{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── Buttons ── */}
            <div className="flex gap-3">
              <a
                href="#portfolio"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
              >
                <Briefcase size={14} />
                Portfolio
              </a>
              <a
                href="mailto:hello@editcraft.com"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/30 transition-all"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SignatureCard;
