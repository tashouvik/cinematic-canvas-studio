/**
 * ============================================================
 * ABOUT SECTION — Asymmetric layout with parallax & glassmorphism
 * ============================================================
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Zap, Eye, Target, Heart } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const qualities = [
  {
    icon: Zap,
    title: "Premium Workflow",
    desc: "Efficient editing pipeline built around Premiere Pro and After Effects for fast, high-quality turnarounds.",
    color: "primary" as const,
  },
  {
    icon: Eye,
    title: "Clean Editing Style",
    desc: "Every cut is intentional. No unnecessary transitions or effects — just polished, professional storytelling.",
    color: "secondary" as const,
  },
  {
    icon: Target,
    title: "Creator-Focused",
    desc: "I understand what creators need: retention, engagement, and content that converts viewers into subscribers.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Dedicated Approach",
    desc: "Each project gets full attention. I treat your content like my own — because quality is everything.",
    color: "secondary" as const,
  },
];

const AboutSection = () => {
  const { ref, y } = useParallax(0.3);

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Diagonal section divider */}
      <div className="absolute top-0 left-0 right-0 h-32 -mt-16 pointer-events-none"
        style={{
          background: "linear-gradient(175deg, hsl(var(--background)) 49%, transparent 51%)",
        }}
      />

      {/* Parallax floating orb */}
      <motion.div
        className="absolute -right-20 top-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.06] bg-primary pointer-events-none"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="About Me"
            title="A Personal Editor, Not an Agency"
            subtitle="I'm a dedicated video editor focused on delivering premium results with a personal touch. No bloated teams — just one editor who truly cares about your content."
          />
        </AnimatedSection>

        {/* Bento-style asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large card spanning 7 cols */}
          <AnimatedSection className="md:col-span-7">
            <div className="glass-card-enhanced p-8 h-full neon-card-primary group">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                  {(() => { const Icon = qualities[0].icon; return <Icon size={28} className="text-primary" />; })()}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{qualities[0].title}</h3>
                  <p className="text-sm text-text-subtle leading-relaxed mb-4">{qualities[0].desc}</p>
                  <div className="flex gap-2">
                    {["Fast Delivery", "Organized", "Scalable"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Small card spanning 5 cols */}
          <AnimatedSection className="md:col-span-5" delay={0.1}>
            <div className="glass-card-enhanced p-8 h-full neon-card-secondary group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)]">
                {(() => { const Icon = qualities[1].icon; return <Icon size={24} className="text-secondary" />; })()}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{qualities[1].title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed">{qualities[1].desc}</p>
            </div>
          </AnimatedSection>

          {/* Small card spanning 5 cols */}
          <AnimatedSection className="md:col-span-5" delay={0.2}>
            <div className="glass-card-enhanced p-8 h-full neon-card-primary group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <qualities.2.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{qualities[2].title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed">{qualities[2].desc}</p>
            </div>
          </AnimatedSection>

          {/* Large card spanning 7 cols */}
          <AnimatedSection className="md:col-span-7" delay={0.3}>
            <div className="glass-card-enhanced p-8 h-full neon-card-secondary group">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-all group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)]">
                  <qualities.3.icon size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{qualities[3].title}</h3>
                  <p className="text-sm text-text-subtle leading-relaxed mb-4">{qualities[3].desc}</p>
                  <div className="flex gap-2">
                    {["Personal Touch", "Quality First", "Long-term"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-medium bg-secondary/10 text-secondary border border-secondary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
