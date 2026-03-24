/**
 * ============================================================
 * SOFTWARE SECTION — Tools & stack
 * ============================================================
 */

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Film, Sparkles, Monitor, Palette } from "lucide-react";

const mainTools = [
  {
    icon: Film,
    name: "Adobe Premiere Pro",
    level: "Primary Workflow",
    desc: "Main editing software for all projects. Full mastery of the editing, color, and audio workflows.",
    proficiency: 95,
  },
  {
    icon: Sparkles,
    name: "Adobe After Effects",
    level: "Motion & Polish",
    desc: "Used for motion graphics, visual effects, animated titles, and cinematic finishing touches.",
    proficiency: 85,
  },
];

const learningTools = [
  {
    icon: Monitor,
    name: "DaVinci Resolve",
    level: "Learning Phase",
    desc: "Expanding color grading and editing capabilities with Hollywood-grade tools.",
    proficiency: 35,
  },
  {
    icon: Palette,
    name: "Adobe Illustrator",
    level: "Learning Phase",
    desc: "Building skills in vector graphics and custom illustration for video assets.",
    proficiency: 25,
  },
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
  <div className="glass-card p-6 glow-border group hover:border-primary/30 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
          isLearning ? "bg-secondary/10" : "bg-primary/10"
        }`}
      >
        <Icon size={22} className={isLearning ? "text-secondary" : "text-primary"} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
              isLearning
                ? "bg-secondary/10 text-secondary border border-secondary/20"
                : "bg-primary/10 text-primary border border-primary/20"
            }`}
          >
            {level}
          </span>
        </div>
        <p className="text-sm text-text-subtle mb-3">{desc}</p>
        {/* Proficiency bar */}
        <div className="h-1.5 rounded-full bg-surface-dark overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              isLearning ? "bg-secondary/60" : "bg-primary"
            }`}
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

const SoftwareSection = () => (
  <section id="software" className="section-padding relative">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <SectionHeading
          label="Tools"
          title="Software & Stack"
          subtitle="The industry-standard tools behind every edit."
        />
      </AnimatedSection>

      {/* Main tools */}
      <AnimatedSection>
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">Primary Tools</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {mainTools.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
        </div>
      </AnimatedSection>

      {/* Learning tools */}
      <AnimatedSection delay={0.15}>
        <h3 className="font-display text-lg font-semibold text-text-subtle mb-4">Currently Learning</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {learningTools.map((t) => (
            <ToolCard key={t.name} {...t} isLearning />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SoftwareSection;
