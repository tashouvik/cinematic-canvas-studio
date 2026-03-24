/**
 * ============================================================
 * CONTACT SECTION — Email, WhatsApp, and form
 * ============================================================
 */

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Replace with your form handler (e.g., EmailJS, Formspree) */
    alert("Message sent! (Connect a form service to make this work)");
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            subtitle="Ready to elevate your content? Reach out via email, WhatsApp, or the form below."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <AnimatedSection>
            <div className="space-y-4">
              <a
                href="mailto:hello@editcraft.com"
                className="glass-card p-5 flex items-center gap-4 glow-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">Email</div>
                  <div className="text-xs text-text-muted-custom">hello@editcraft.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 glow-border hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MessageCircle size={20} className="text-secondary" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">WhatsApp</div>
                  <div className="text-xs text-text-muted-custom">+1 (234) 567-890</div>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
