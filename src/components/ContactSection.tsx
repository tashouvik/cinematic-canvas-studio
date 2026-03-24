/**
 * ============================================================
 * CONTACT SECTION — Split layout with neon glass cards
 * ============================================================
 */

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Connect a form service to make this work)");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.05] bg-primary pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.05] bg-secondary pointer-events-none" />

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
              <motion.a
                href="mailto:hello@editcraft.com"
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card-enhanced p-5 flex items-center gap-4 neon-card-primary group block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.2)]">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">Email</div>
                  <div className="text-xs text-text-muted-custom">hello@editcraft.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card-enhanced p-5 flex items-center gap-4 neon-card-secondary group block"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all group-hover:shadow-[0_0_25px_hsl(var(--secondary)/0.2)]">
                  <MessageCircle size={20} className="text-secondary" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">WhatsApp</div>
                  <div className="text-xs text-text-muted-custom">+1 (234) 567-890</div>
                </div>
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="glass-card-enhanced p-6 space-y-4 neon-card-primary">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-dark/80 border border-border text-foreground text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all backdrop-blur-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-dark/80 border border-border text-foreground text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all backdrop-blur-sm"
              />
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-surface-dark/80 border border-border text-foreground text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all resize-none backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
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
