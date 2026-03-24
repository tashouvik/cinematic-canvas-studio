/**
 * ============================================================
 * SECTION HEADING — Reusable heading with label + title + subtitle
 * ============================================================
 */

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => (
  <div className="text-center mb-16 md:mb-20">
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
      {label}
    </span>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-text-subtle text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
