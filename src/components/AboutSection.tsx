/**
 * ============================================================
 * ABOUT SECTION — Personal editor story & approach
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Zap, Eye, Target, Heart } from "lucide-react";

const qualities = [
  {
    icon: Zap,
    title: "Premium Workflow",
    desc: "Efficient editing pipeline built around Premiere Pro and After Effects for fast, high-quality turnarounds.",
  },
  {
    icon: Eye,
    title: "Clean Editing Style",
    desc: "Every cut is intentional. No unnecessary transitions or effects — just polished, professional storytelling.",
  },
  {
    icon: Target,
    title: "Creator-Focused",
    desc: "I understand what creators need: retention, engagement, and content that converts viewers into subscribers.",
  },
  {
    icon: Heart,
    title: "Dedicated Approach",
    desc: "Each project gets full attention. I treat your content like my own — because quality is everything.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="About Me"
          title="A Personal Editor, Not an Agency"
          subtitle="I'm a dedicated video editor focused on delivering premium results with a personal touch. No bloated teams — just one editor who truly cares about your content."
        />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualities.map((q, i) => (
          <AnimatedSection key={q.title} delay={i * 0.1}>
            <div className="glass-card p-6 h-full glow-border group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <q.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{q.title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed">{q.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
