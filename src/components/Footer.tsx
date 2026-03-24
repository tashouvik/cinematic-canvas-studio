/**
 * ============================================================
 * FOOTER — Premium footer with branding and links
 * ============================================================
 * ── CHANGE LOGO TEXT HERE ──
 * ============================================================
 */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            {/* CHANGE LOGO TEXT HERE */}
            <span className="font-display text-xl font-bold">
              <span className="gradient-text-primary">EDIT</span>
              <span className="text-foreground">CRAFT</span>
            </span>
            <p className="text-xs text-text-muted-custom mt-1">
              Premium Video Editing Services
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-text-subtle">
            {["About", "Services", "Portfolio", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-dim">
            © {year} EditCraft. All rights reserved. Built with passion for creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
