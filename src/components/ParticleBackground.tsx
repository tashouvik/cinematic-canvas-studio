/**
 * ============================================================
 * PARTICLE BACKGROUND — Cinematic floating particles
 * ============================================================
 * Creates a subtle, cinematic particle field that drifts 
 * upward across the viewport. Pure CSS animation for performance.
 * ============================================================
 */

const ParticleBackground = () => {
  /* Generate an array of particles with random positions and delays */
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${8 + Math.random() * 10}s`,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Ambient gradient lights */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.07]"
        style={{ background: "hsl(26 100% 50%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px] opacity-[0.05]"
        style={{ background: "hsl(180 100% 25%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[160px] opacity-[0.04]"
        style={{ background: "hsl(26 100% 50%)" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 3 === 0 ? "hsl(26 100% 50%)" : "hsl(180 100% 25%)",
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
