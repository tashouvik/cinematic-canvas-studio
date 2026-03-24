/**
 * ============================================================
 * SERVICES SECTION — Detailed service cards
 * ============================================================
 * STRICT: Only the 7 specified services are listed.
 * Each card has title, explanation, benefits, and use-case.
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import {
  Film,
  GraduationCap,
  Lightbulb,
  Smartphone,
  Youtube,
  Mic,
  User,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Full-service video editing from raw footage to polished final product. Color grading, sound design, transitions, and graphics — all tailored to your brand.",
    benefits: "Professional output, faster turnaround, consistent brand look",
    useCase: "Creators, brands, and businesses needing polished video content for any platform.",
  },
  {
    icon: GraduationCap,
    title: "Educational Video Editing",
    description:
      "Structured editing for courses, tutorials, and educational content. Clear pacing, on-screen text, annotations, and visual aids that keep learners engaged.",
    benefits: "Higher completion rates, better student retention, professional course quality",
    useCase: "Online course creators, educators, coaches, and e-learning platforms.",
  },
  {
    icon: Lightbulb,
    title: "Explainer Video Editing",
    description:
      "Transform complex ideas into clear, engaging explainer videos. Motion graphics, animated text, icons, and visual storytelling that simplifies your message.",
    benefits: "Better audience understanding, higher conversion, shareable content",
    useCase: "SaaS products, startups, agencies needing to explain services or concepts.",
  },
  {
    icon: Smartphone,
    title: "Short-form Video Editing",
    description:
      "Punchy, scroll-stopping edits for Reels, Shorts, and TikTok. Fast pacing, captions, zoom effects, and trending formats that maximize engagement.",
    benefits: "Viral potential, algorithm-friendly, rapid content output",
    useCase: "Social media managers, influencers, brands growing on short-form platforms.",
  },
  {
    icon: Youtube,
    title: "Long-form YouTube Editing",
    description:
      "End-to-end YouTube video editing including intros, outros, B-roll integration, pacing optimization, and retention-focused editing techniques.",
    benefits: "Higher watch time, better retention, professional channel branding",
    useCase: "YouTubers, vloggers, documentary-style creators, and knowledge channels.",
  },
  {
    icon: Mic,
    title: "Podcast Clips Editing",
    description:
      "Turn long podcast episodes into shareable highlight clips. Visual overlays, waveform animations, captions, and split-screen layouts for maximum reach.",
    benefits: "Repurpose content, reach new audiences, grow podcast listenership",
    useCase: "Podcasters wanting to promote episodes on social media with video clips.",
  },
  {
    icon: User,
    title: "Talking Head Edits",
    description:
      "Clean, professional edits for talking-head content. Jump cuts, B-roll inserts, lower thirds, text overlays, and smooth pacing to keep viewers hooked.",
    benefits: "Polished delivery, professional look, improved audience engagement",
    useCase: "Coaches, consultants, educators, and creators filming direct-to-camera content.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Services"
          title="What I Do Best"
          subtitle="Specialized editing services tailored for creators and brands who demand premium quality."
        />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="glass-card p-7 h-full glow-border group hover:border-primary/30 transition-all duration-300 flex flex-col">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <s.icon size={26} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-subtle leading-relaxed mb-4 flex-1">
                {s.description}
              </p>

              {/* Benefits */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  Benefits
                </span>
                <p className="text-xs text-text-muted-custom mt-1">{s.benefits}</p>
              </div>

              {/* Use case */}
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Best For
                </span>
                <p className="text-xs text-text-muted-custom mt-1">{s.useCase}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
