/**
 * ============================================================
 * FAQ SECTION — Collapsible Q&A with glass & neon
 * ============================================================
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What types of videos do you edit?", a: "I specialize in educational videos, explainer content, long-form YouTube videos, short-form clips (Reels, Shorts, TikTok), podcast clips, and talking head edits." },
  { q: "What is your editing workflow like?", a: "I follow a 5-step process: Brief → Review Footage → Editing → Polish → Delivery. I keep you updated throughout and ensure your vision is fully realized." },
  { q: "How long does an edit typically take?", a: "Turnaround depends on the project. Short-form edits take 1-2 days. Long-form YouTube videos take 3-5 days. Complex projects are scoped individually." },
  { q: "How many revisions are included?", a: "Every project includes 2 rounds of revisions. Additional revisions can be arranged if needed. I aim to get it right on the first pass." },
  { q: "What software do you use?", a: "My primary tools are Adobe Premiere Pro for editing and Adobe After Effects for motion graphics. I'm also learning DaVinci Resolve and Adobe Illustrator." },
  { q: "Do you work with international clients?", a: "Absolutely. I work remotely with clients worldwide. Communication is handled via email, WhatsApp, or video calls — whatever works best for you." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before we work together."
          />
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className={`glass-card-enhanced overflow-hidden transition-all duration-300 ${
                openIndex === i ? "neon-card-primary" : ""
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className="font-display text-sm font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} className="text-text-muted-custom shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm text-text-subtle leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
