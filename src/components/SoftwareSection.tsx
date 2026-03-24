/**
 * ============================================================
 * SOFTWARE SECTION — Tools with glass cards & animated bars
 * ============================================================
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Film, Sparkles, Monitor, Palette } from "lucide-react";

const mainTools = [
  { icon: Film, name: "Adobe Premiere Pro", level: "Primary Workflow", desc: "Main editing software for all projects. Full mastery of the editing, color, and audio workflows.", proficiency: 95 },
  { icon: Sparkles, name: "Adobe After Effects", level: "Motion & Polish", desc: "Used for motion graphics, visual effects, animated titles, and cinematic finishing touches.", proficiency: 85 },
];

const learningTools = [
  { icon: Monitor, name: "DaVinci Resolve", level: "Learning Phase", desc: "Expanding color grading and editing capabilities with Hollywood-grade tools.", proficiency: 35 },
  { icon: Palette, name: "Adobe Illustrator", level: "Learning Phase", desc: "Building skills in vector graphics and custom illustration for video assets.", proficiency: 25 },
];

interface ToolCardProps {
  icon: React.ElementType;
  name: string;
  level: string;
  desc: string;
  proficiency: number;
  isLearning?: boolean;
}

const ToolCard = ({ icon: Icon, name, level, desc, proficiency, isLearning }: ToolCardProps) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`glass-card-enhanced p-6 group ${isLearning ? "neon-card-secondary" : "neon-card-primary"}`}
  >
    <div className="flex items-start gap-4">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
        isLearning
          ? "bg-secondary/10 group-hover:bg-secondary/20 group-hover:shadow-[0_0_25px_hsl(var(--secondary)/0.2)]"
          : "bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.2)]"
      }`}>
        <Icon size={24} className={isLearning ? "text-secondary" : "text-primary"} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium backdrop-blur-sm ${
            isLearning
              ? "bg-secondary/10 text-secondary border border-secondary/20"
              : "bg-primary/10 text-primary border border-primary/20"
          }`}>
            {level}
          </span>
        </div>
        <p className="text-sm text-text-subtle mb-3">{desc}</p>
        {/* Animated proficiency bar */}
        <div className="h-2 rounded-full bg-surface-dark overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${isLearning ? "bg-secondary/60" : "bg-primary"}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{
              boxShadow: isLearning
                ? "0 0 10px hsl(var(--secondary) / 0.4)"
                : "0 0 10px hsl(var(--primary) / 0.4)",
            }}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const SoftwareSection = () => (
  <section id="software" className="section-padding relative">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <SectionHeading label="Tools" title="Software & Stack" subtitle="The industry-standard tools behind every edit." />
      </AnimatedSection>

      <AnimatedSection>
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">Primary Tools</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {mainTools.map((t) => <ToolCard key={t.name} {...t} />)}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <h3 className="font-display text-lg font-semibold text-text-subtle mb-4">Currently Learning</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {learningTools.map((t) => <ToolCard key={t.name} {...t} isLearning />)}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SoftwareSection;
