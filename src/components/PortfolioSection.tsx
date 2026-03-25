/**
 * ============================================================
 * PORTFOLIO SECTION — Filterable grid with 3D hover tilt
 * ============================================================
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Play, X, ExternalLink } from "lucide-react";

/* ── Portfolio thumbnail imports ── */
import thumbEducational from "@/assets/portfolio-educational.jpg";
import thumbExplainer from "@/assets/portfolio-explainer.jpg";
import thumbYoutube from "@/assets/portfolio-youtube.jpg";
import thumbShortform from "@/assets/portfolio-shortform.jpg";
import thumbTutorial from "@/assets/portfolio-tutorial.jpg";
import thumbPitch from "@/assets/portfolio-pitch.jpg";

type Category = "all" | "educational" | "explainer" | "youtube" | "shortform";

interface Project {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  thumbnail: string;
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "educational", label: "Educational" },
  { value: "explainer", label: "Explainer" },
  { value: "youtube", label: "YouTube" },
  { value: "shortform", label: "Short-form" },
];

const projects: Project[] = [
  { id: 1, title: "Online Course Launch Promo", category: "educational", categoryLabel: "Educational", description: "Full course promotional video with animated chapters, screen recordings, and polished transitions.", thumbnail: thumbEducational },
  { id: 2, title: "SaaS Product Explainer", category: "explainer", categoryLabel: "Explainer", description: "2-minute explainer video breaking down a complex SaaS product into a clear, engaging story.", thumbnail: thumbExplainer },
  { id: 3, title: "Tech Review — Full Episode", category: "youtube", categoryLabel: "YouTube", description: "15-minute tech review with dynamic B-roll, custom graphics, and retention-optimized pacing.", thumbnail: thumbYoutube },
  { id: 4, title: "Viral Reel — 1.2M Views", category: "shortform", categoryLabel: "Short-form", description: "30-second reel with punchy edits, auto-captions, and zoom effects that went viral on Instagram.", thumbnail: thumbShortform },
  { id: 5, title: "Tutorial Series — Episode Pack", category: "educational", categoryLabel: "Educational", description: "Series of 5 tutorial videos with consistent branding, annotations, and chapter markers.", thumbnail: thumbTutorial },
  { id: 6, title: "Startup Pitch Video", category: "explainer", categoryLabel: "Explainer", description: "90-second pitch video combining live footage with motion graphics and data visualizations.", thumbnail: thumbPitch },
];

/** 3D tilt card */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-[box-shadow] duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Portfolio"
            title="Selected Work"
            subtitle="A showcase of educational edits, explainer videos, YouTube content, and short-form clips."
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.value
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                    : "bg-accent/80 text-text-subtle border border-border hover:border-primary/30 backdrop-blur-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid with real thumbnails */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="glass-card-enhanced overflow-hidden cursor-pointer group neon-card-primary"
                  >
                    {/* Real thumbnail image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        width={768}
                        height={512}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Play
                          size={44}
                          className="text-primary drop-shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest">
                        {project.categoryLabel}
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground mt-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-subtle line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── PROJECT MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotateX: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass-card-enhanced max-w-lg w-full overflow-hidden relative neon-card-primary"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal thumbnail */}
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors bg-background/50 rounded-full p-1.5 backdrop-blur-sm"
                >
                  <X size={18} />
                </button>

                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-text-subtle leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                    <Play size={14} /> Watch
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/30 transition-all backdrop-blur-sm">
                    <ExternalLink size={14} /> Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
