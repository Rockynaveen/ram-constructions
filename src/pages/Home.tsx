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
import { StatsStrip } from '../components/home/StatsStrip';

export const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Split Story */}
      <AboutSplit />

      {/* 3. Core Disciplines / Services */}
      <ServicesStacked />

      {/* 4. Standalone Count Section with Architectural Background & Countable Stats */}
      <StatsStrip />

      {/* 5. Selected Portfolio Works */}
      <FeaturedProjects />

      {/* 6. 6-Phase Process Timeline */}
      <div id="process">
        <ProcessTimeline />
      </div>

      {/* 7. Why Choose Us (8 Principles) */}
      <WhyChooseUs />

      {/* 8. Craftsmanship & Tectonics Showcase */}
      <CraftsmanshipShowcase />

      {/* 9. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Latest Journal / Articles */}
      <LatestInsights />

      {/* 11. FAQ Section */}
      <FaqAccordion />
    </div>
  );
};
