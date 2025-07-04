import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import BackedBySection from "@/components/home/BackedBySection";
import IntegrationSection from "@/components/home/IntegrationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DemoRequestSection from "@/components/home/DemoRequestSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');

        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-sans text-foreground bg-background">
      <Helmet>
        <title>TwinTry™ - AI-Powered Virtual Try-On Platform | Twinverse</title>
        <meta
          name="description"
          content="Transform your fashion retail with TwinTry™, India's first AI-powered 2D virtual try-on platform that enhances customer confidence and drives conversions."
        />
      </Helmet>

      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <BackedBySection />
      <IntegrationSection />
      {/* <TestimonialsSection /> */}
      <DemoRequestSection />
      <Footer />
    </div>
  );
}
