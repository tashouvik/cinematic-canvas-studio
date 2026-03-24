/**
 * ============================================================
 * PROCESS SECTION — Diagonal timeline with neon connectors
 * ============================================================
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { FileText, Search, Scissors, Sparkles, Send } from "lucide-react";

const steps = [
  { icon: FileText, number: "01", title: "Brief", desc: "We discuss your vision, goals, target audience, and style preferences to establish a clear creative direction.", accent: "primary" as const },
  { icon: Search, number: "02", title: "Review Footage", desc: "I review all raw footage, select the best takes, organize clips, and plan the edit structure.", accent: "secondary" as const },
  { icon: Scissors, number: "03", title: "Editing", desc: "The core editing phase — cuts, transitions, pacing, B-roll integration, text overlays, and sound design.", accent: "primary" as const },
  { icon: Sparkles, number: "04", title: "Polish", desc: "Color grading, motion graphics, audio mixing, and final touches that elevate the edit to premium quality.", accent: "secondary" as const },
  { icon: Send, number: "05", title: "Delivery", desc: "Final review, revisions, and delivery in your preferred format and resolution. Ready to publish.", accent: "primary" as const },
];

const ProcessSection = () => (
  <section id="process" className="section-padding relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Process"
          title="How I Work"
          subtitle="A streamlined 5-step workflow designed for efficiency, quality, and clear communication."
        />
      </AnimatedSection>

      {/* Horizontal timeline for desktop, vertical for mobile */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Neon connector line */}
        <div className="absolute top-[3.5rem] left-[10%] right-[10%] h-[2px]"
          style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.5), hsl(var(--secondary) / 0.5), hsl(var(--primary) / 0.5))" }}
        />

        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-center relative"
            >
              {/* Numbered circle on the line */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-2 ${
                step.accent === "primary"
                  ? "bg-primary/20 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  : "bg-secondary/20 border-secondary/50 shadow-[0_0_20px_hsl(var(--secondary)/0.3)]"
              }`}>
                <step.icon size={22} className={step.accent === "primary" ? "text-primary" : "text-secondary"} />
              </div>

              <div className="glass-card-enhanced p-5 neon-card-primary">
                <span className={`text-xs font-bold ${step.accent === "primary" ? "text-primary" : "text-secondary"}`}>
                  Step {step.number}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-xs text-text-subtle leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Mobile vertical layout */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <div className={`glass-card-enhanced p-6 ${step.accent === "primary" ? "neon-card-primary" : "neon-card-secondary"}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"
                }`}>
                  <step.icon size={18} className={step.accent === "primary" ? "text-primary" : "text-secondary"} />
                </div>
                <span className={`font-display text-sm font-bold ${step.accent === "primary" ? "text-primary" : "text-secondary"}`}>
                  Step {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
