/**
 * ============================================================
 * FOOTER — Premium footer with glass effect
 * ============================================================
 * ── CHANGE LOGO TEXT HERE ──
 * ============================================================
 */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-surface-dark/80 backdrop-blur-xl relative">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold">
              <span className="gradient-text-primary">EDIT</span>
              <span className="text-foreground">CRAFT</span>
            </span>
            <p className="text-xs text-text-muted-custom mt-1">Premium Video Editing Services</p>
          </div>

          <div className="flex gap-6 text-sm text-text-subtle">
            {["About", "Services", "Portfolio", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-text-dim">
            © {year} EditCraft. All rights reserved. Built with passion for creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
