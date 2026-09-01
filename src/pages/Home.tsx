import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSplit } from '../components/home/AboutSplit';
import { ServicesStacked } from '../components/home/ServicesStacked';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CraftsmanshipShowcase } from '../components/home/CraftsmanshipShowcase';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { LatestInsights } from '../components/home/LatestInsights';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { CtaBanner } from '../components/home/CtaBanner';

export const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section with Integrated Stats Strip */}
      <Hero />

      {/* 2. About Split Story */}
      <AboutSplit />

      {/* 3. Core Disciplines / Services */}
      <ServicesStacked />

      {/* 4. Selected Portfolio Works */}
      <FeaturedProjects />

      {/* 5. 6-Phase Process Timeline */}
      <div id="process">
        <ProcessTimeline />
      </div>

      {/* 6. Why Choose Us (8 Principles) */}
      <WhyChooseUs />

      {/* 7. Craftsmanship & Tectonics Showcase */}
      <CraftsmanshipShowcase />

      {/* 8. Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Latest Journal / Articles */}
      <LatestInsights />

      {/* 10. FAQ Section */}
      <FaqAccordion />

      {/* 11. Cost Estimator / CTA Section */}
      <CtaBanner />
    </div>
  );
};
