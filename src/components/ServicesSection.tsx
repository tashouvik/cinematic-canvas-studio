/**
 * ============================================================
 * SERVICES SECTION — Bento grid with neon glow cards
 * ============================================================
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import {
  Film, GraduationCap, Lightbulb, Smartphone, Youtube, Mic, User,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Full-service video editing from raw footage to polished final product. Color grading, sound design, transitions, and graphics — all tailored to your brand.",
    benefits: "Professional output, faster turnaround, consistent brand look",
    useCase: "Creators, brands, and businesses needing polished video content for any platform.",
    accent: "primary" as const,
    span: "md:col-span-2 lg:col-span-2" as const,
  },
  {
    icon: GraduationCap,
    title: "Educational Video Editing",
    description: "Structured editing for courses, tutorials, and educational content. Clear pacing, on-screen text, annotations, and visual aids that keep learners engaged.",
    benefits: "Higher completion rates, better student retention, professional course quality",
    useCase: "Online course creators, educators, coaches, and e-learning platforms.",
    accent: "secondary" as const,
    span: "" as const,
  },
  {
    icon: Lightbulb,
    title: "Explainer Video Editing",
    description: "Transform complex ideas into clear, engaging explainer videos. Motion graphics, animated text, icons, and visual storytelling that simplifies your message.",
    benefits: "Better audience understanding, higher conversion, shareable content",
    useCase: "SaaS products, startups, agencies needing to explain services or concepts.",
    accent: "primary" as const,
    span: "" as const,
  },
  {
    icon: Smartphone,
    title: "Short-form Video Editing",
    description: "Punchy, scroll-stopping edits for Reels, Shorts, and TikTok. Fast pacing, captions, zoom effects, and trending formats that maximize engagement.",
    benefits: "Viral potential, algorithm-friendly, rapid content output",
    useCase: "Social media managers, influencers, brands growing on short-form platforms.",
    accent: "secondary" as const,
    span: "" as const,
  },
  {
    icon: Youtube,
    title: "Long-form YouTube Editing",
    description: "End-to-end YouTube video editing including intros, outros, B-roll integration, pacing optimization, and retention-focused editing techniques.",
    benefits: "Higher watch time, better retention, professional channel branding",
    useCase: "YouTubers, vloggers, documentary-style creators, and knowledge channels.",
    accent: "primary" as const,
    span: "md:col-span-2 lg:col-span-2" as const,
  },
  {
    icon: Mic,
    title: "Podcast Clips Editing",
    description: "Turn long podcast episodes into shareable highlight clips. Visual overlays, waveform animations, captions, and split-screen layouts for maximum reach.",
    benefits: "Repurpose content, reach new audiences, grow podcast listenership",
    useCase: "Podcasters wanting to promote episodes on social media with video clips.",
    accent: "secondary" as const,
    span: "" as const,
  },
  {
    icon: User,
    title: "Talking Head Edits",
    description: "Clean, professional edits for talking-head content. Jump cuts, B-roll inserts, lower thirds, text overlays, and smooth pacing to keep viewers hooked.",
    benefits: "Polished delivery, professional look, improved audience engagement",
    useCase: "Coaches, consultants, educators, and creators filming direct-to-camera content.",
    accent: "primary" as const,
    span: "" as const,
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    {/* Diagonal divider */}
    <div className="absolute top-0 left-0 right-0 h-32 -mt-16 pointer-events-none"
      style={{ background: "linear-gradient(175deg, transparent 49%, hsl(var(--background)) 51%)" }}
    />

    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Services"
          title="What I Do Best"
          subtitle="Specialized editing services tailored for creators and brands who demand premium quality."
        />
      </AnimatedSection>

      {/* Bento grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.06} className={s.span}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`glass-card-enhanced p-7 h-full group ${
                s.accent === "primary" ? "neon-card-primary" : "neon-card-secondary"
              } flex flex-col`}
            >
              {/* Icon with glow */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                s.accent === "primary"
                  ? "bg-primary/10 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                  : "bg-secondary/10 group-hover:bg-secondary/15 group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)]"
              }`}>
                <s.icon size={26} className={s.accent === "primary" ? "text-primary" : "text-secondary"} />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed mb-4 flex-1">{s.description}</p>

              {/* Benefits */}
              <div className="mb-3">
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  s.accent === "primary" ? "text-secondary" : "text-primary"
                }`}>Benefits</span>
                <p className="text-xs text-text-muted-custom mt-1">{s.benefits}</p>
              </div>

              {/* Use case */}
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  s.accent === "primary" ? "text-primary" : "text-secondary"
                }`}>Best For</span>
                <p className="text-xs text-text-muted-custom mt-1">{s.useCase}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
