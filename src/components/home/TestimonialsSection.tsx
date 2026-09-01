import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { Quote, Star, ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="Client Endorsements"
            title="Stories of craft,"
            titleHighlight="trust and living."
            description="Our clients are physicians, technology founders, and design connoisseurs who demanded uncompromising structural fidelity."
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0284C7] hover:border-[#0284C7] hover:bg-sky-50 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0284C7] hover:border-[#0284C7] hover:bg-sky-50 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Editorial Quote Showcase */}
        <div className="relative bg-[#F0F9FF] border border-sky-200/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-md shadow-sky-900/5">
          <Quote className="w-12 h-12 text-[#0284C7]/20 absolute top-6 right-6 sm:top-8 sm:right-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 max-w-4xl"
            >
              {/* Star Rating & Project Tag */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-600 border-l border-sky-200 pl-4 font-semibold">
                  {current.projectTitle} ({current.area}) • Handover {current.year}
                </span>
              </div>

              {/* Big Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0B2545] font-normal leading-[1.3] tracking-tight">
                "{current.quote.replace(/Atelier Vera/g, 'RAM Constructions')}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-3 border-t border-sky-200">
                <img
                  src={current.image}
                  alt={current.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0284C7]"
                />
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[#0B2545] font-semibold">
                    {current.clientName}
                  </h4>
                  <p className="text-xs font-mono text-[#0284C7] mt-0.5 font-bold">
                    {current.designation}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#0284C7]" />
                    {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-sky-200/60">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-7 bg-[#0284C7]' : 'w-2 bg-sky-300 hover:bg-sky-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
