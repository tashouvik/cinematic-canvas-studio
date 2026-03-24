/**
 * ============================================================
 * INDEX PAGE — Full portfolio composition
 * ============================================================
 * All sections assembled in order with particle background.
 * ============================================================
 */

import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SoftwareSection from "@/components/SoftwareSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SignatureCard from "@/components/SignatureCard";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
    <ParticleBackground />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SoftwareSection />
      <PortfolioSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <SignatureCard />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
