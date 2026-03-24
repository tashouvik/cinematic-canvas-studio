/**
 * ============================================================
 * TESTIMONIALS SECTION — Client reviews
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "YouTube Creator — 500K Subs",
    text: "The editing quality completely transformed my channel. Watch time increased by 40% within two months. Every cut feels intentional and cinematic.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "Online Course Creator",
    text: "My course completion rates jumped after switching to this editor. The pacing, annotations, and visual structure made my content so much more engaging.",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "SaaS Founder",
    text: "Our explainer video converted 3x better than the previous version. Clear storytelling, beautiful motion graphics, delivered ahead of schedule.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Podcast Host",
    text: "The podcast clips have been our best-performing social content by far. Professional editing with a quick turnaround — exactly what we needed.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding relative">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from creators, educators, and brands I've worked with."
        />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="glass-card p-7 h-full glow-border hover:border-primary/30 transition-all duration-300">
              <Quote size={24} className="text-primary/30 mb-4" />
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
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
