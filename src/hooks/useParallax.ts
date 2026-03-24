/**
 * ============================================================
 * PARALLAX HOOK — Multi-layer scroll-based parallax
 * ============================================================
 */
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export const useParallax = (
  speed: number = 0.5,
  offset: ["start end", "end start"] = ["start end", "end start"]
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return { ref, y, scrollYProgress };
};

export const useParallaxRange = (
  scrollYProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[]
) => {
  return useTransform(scrollYProgress, inputRange, outputRange);
};
