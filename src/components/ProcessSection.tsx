/**
 * ============================================================
 * PROCESS SECTION — Step-by-step editing workflow
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { FileText, Search, Scissors, Sparkles, Send } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Brief",
    desc: "We discuss your vision, goals, target audience, and style preferences to establish a clear creative direction.",
  },
  {
    icon: Search,
    number: "02",
    title: "Review Footage",
    desc: "I review all raw footage, select the best takes, organize clips, and plan the edit structure.",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Editing",
    desc: "The core editing phase — cuts, transitions, pacing, B-roll integration, text overlays, and sound design.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Polish",
    desc: "Color grading, motion graphics, audio mixing, and final touches that elevate the edit to premium quality.",
  },
  {
    icon: Send,
    number: "05",
    title: "Delivery",
    desc: "Final review, revisions, and delivery in your preferred format and resolution. Ready to publish.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding relative">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Process"
          title="How I Work"
          subtitle="A streamlined 5-step workflow designed for efficiency, quality, and clear communication."
        />
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line connector */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <div
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step card */}
              <div className="md:w-1/2">
                <div className="glass-card p-6 glow-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon size={18} className="text-primary" />
                    </div>
                    <span className="font-display text-sm font-bold text-primary">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-subtle leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Center dot (desktop) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              {/* Spacer */}
              <div className="md:w-1/2" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
