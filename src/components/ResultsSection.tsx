/**
 * ============================================================
 * RESULTS SECTION — Key stats and achievements
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import { Film, Eye, Calendar, Users } from "lucide-react";

const results = [
  { icon: Film, value: "200+", label: "Projects Edited", desc: "Across educational, explainer, YouTube, and short-form content." },
  { icon: Eye, value: "20M+", label: "Views Generated", desc: "Combined views across all edited content on multiple platforms." },
  { icon: Calendar, value: "3+", label: "Years Experience", desc: "Consistently delivering premium edits for creators and brands." },
  { icon: Users, value: "50+", label: "Happy Clients", desc: "Creators, educators, and businesses who trust my editing." },
];

const ResultsSection = () => (
  <section className="section-padding relative">
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((r, i) => (
          <AnimatedSection key={r.label} delay={i * 0.1}>
            <div className="glass-card p-6 text-center glow-border hover:border-secondary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon size={22} className="text-secondary" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text-primary mb-1">
                {r.value}
              </div>
              <div className="font-display text-sm font-semibold text-foreground mb-2">
                {r.label}
              </div>
              <p className="text-xs text-text-muted-custom">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
