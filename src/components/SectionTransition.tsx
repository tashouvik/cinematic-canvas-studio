/**
 * ============================================================
 * SECTION TRANSITION — Cinematic divider between sections
 * ============================================================
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionTransitionProps {
  variant?: "glow" | "line" | "fade";
}

const SectionTransition = ({ variant = "glow" }: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]);

  if (variant === "line") {
    return (
      <div ref={ref} className="relative py-2 flex justify-center">
        <motion.div
          style={{ scaleX, opacity }}
          className="h-px w-full max-w-2xl origin-center"
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), hsl(var(--secondary) / 0.3), transparent)",
            }}
          />
        </motion.div>
      </div>
    );
  }

  if (variant === "fade") {
    return (
      <div ref={ref} className="relative h-24 pointer-events-none">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary) / 0.06), transparent)",
            }}
          />
        </motion.div>
      </div>
    );
  }

  /* Default: glow */
  return (
    <div ref={ref} className="relative h-16 pointer-events-none flex items-center justify-center">
      <motion.div
        style={{ scaleX, opacity }}
        className="w-full max-w-4xl h-px origin-center relative"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), hsl(var(--secondary) / 0.4), transparent)",
          }}
        />
        <div
          className="absolute inset-0 blur-md"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.2), transparent)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default SectionTransition;
