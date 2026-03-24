/**
 * ============================================================
 * RESULTS SECTION — Dramatic stats with neon glow & parallax
 * ============================================================
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Film, Eye, Calendar, Users } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const results = [
  { icon: Film, value: "200+", label: "Projects Edited", desc: "Across educational, explainer, YouTube, and short-form content.", accent: "primary" as const },
  { icon: Eye, value: "20M+", label: "Views Generated", desc: "Combined views across all edited content on multiple platforms.", accent: "secondary" as const },
  { icon: Calendar, value: "3+", label: "Years Experience", desc: "Consistently delivering premium edits for creators and brands.", accent: "primary" as const },
  { icon: Users, value: "50+", label: "Happy Clients", desc: "Creators, educators, and businesses who trust my editing.", accent: "secondary" as const },
];

const ResultsSection = () => {
  const { ref, y } = useParallax(0.2);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))", y }}
      />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-4">
              Results
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Numbers That Speak
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((r, i) => (
            <AnimatedSection key={r.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`glass-card-enhanced p-6 text-center ${
                  r.accent === "primary" ? "neon-card-primary" : "neon-card-secondary"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  r.accent === "primary"
                    ? "bg-primary/10 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                    : "bg-secondary/10 group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]"
                }`}>
                  <r.icon size={24} className={r.accent === "primary" ? "text-primary" : "text-secondary"} />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text-primary mb-1">
                  {r.value}
                </div>
                <div className="font-display text-sm font-semibold text-foreground mb-2">{r.label}</div>
                <p className="text-xs text-text-muted-custom">{r.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
