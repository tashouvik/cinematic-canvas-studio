/**
 * ============================================================
 * CURSOR GLOW — Mouse-following ambient light effect
 * ============================================================
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-screen"
      animate={{
        x: position.x - 200,
        y: position.y - 200,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    >
      {/* Primary glow */}
      <div
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(26 100% 50% / 0.07) 0%, hsl(180 100% 25% / 0.03) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
