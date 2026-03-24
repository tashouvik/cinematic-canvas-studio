/**
 * ============================================================
 * TESTIMONIALS SECTION — Overlapping cards with glass effects
 * ============================================================
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "YouTube Creator — 500K Subs",
    text: "The editing quality completely transformed my channel. Watch time increased by 40% within two months. Every cut feels intentional and cinematic.",
    stars: 5,
    accent: "primary" as const,
  },
  {
    name: "Sarah Chen",
    role: "Online Course Creator",
    text: "My course completion rates jumped after switching to this editor. The pacing, annotations, and visual structure made my content so much more engaging.",
    stars: 5,
    accent: "secondary" as const,
  },
  {
    name: "Marcus Johnson",
    role: "SaaS Founder",
    text: "Our explainer video converted 3x better than the previous version. Clear storytelling, beautiful motion graphics, delivered ahead of schedule.",
    stars: 5,
    accent: "primary" as const,
  },
  {
    name: "Priya Sharma",
    role: "Podcast Host",
    text: "The podcast clips have been our best-performing social content by far. Professional editing with a quick turnaround — exactly what we needed.",
    stars: 5,
    accent: "secondary" as const,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from creators, educators, and brands I've worked with."
        />
      </AnimatedSection>

      {/* Asymmetric staggered grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`glass-card-enhanced p-7 h-full ${
                t.accent === "primary" ? "neon-card-primary" : "neon-card-secondary"
              } ${i % 2 === 1 ? "md:mt-8" : ""}`}
            >
              <Quote size={28} className={`mb-4 ${
                t.accent === "primary" ? "text-primary/30" : "text-secondary/30"
              }`} />
              <p className="text-sm text-text-subtle leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <div className="font-display text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-text-muted-custom">{t.role}</div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
