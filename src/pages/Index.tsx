/**
 * ============================================================
 * INDEX PAGE — Full portfolio with 3D scene + particle bg
 * ============================================================
 */

import { lazy, Suspense } from "react";
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

const Scene3D = lazy(() => import("@/components/Scene3D"));

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
    <ParticleBackground />
    <Suspense fallback={null}>
      <Scene3D />
    </Suspense>
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
