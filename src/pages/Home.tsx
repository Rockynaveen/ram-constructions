import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSplit } from '../components/home/AboutSplit';
import { ServicesStacked } from '../components/home/ServicesStacked';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { StatsStrip } from '../components/home/StatsStrip';

export const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* 2. About Split Story */}
      <div id="about">
        <AboutSplit />
      </div>

      {/* 3. Core Disciplines / Services */}
      <div id="services">
        <ServicesStacked />
      </div>

      {/* 4. Standalone Count Section with Architectural Background & Countable Stats */}
      <StatsStrip />

      {/* 5. Selected Portfolio Works */}
      <div id="projects">
        <FeaturedProjects />
      </div>

      {/* 6. Why Choose Us (8 Principles) */}
      <div id="why-us">
        <WhyChooseUs />
      </div>

      {/* 7. Client Testimonials */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>


    </div>
  );
};
