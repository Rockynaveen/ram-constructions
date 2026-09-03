import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { Star, MapPin, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonialsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 bg-white text-[#001738] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-slate-200/80 pb-4">
          <SectionHeading
            theme="light"
            eyebrow="Client Endorsements"
            title="Stories of Trust &"
            titleHighlight="Excellence."
            description="Our clients are physicians, technology founders, and design connoisseurs who demanded uncompromising structural fidelity and transparent execution."
          />

          {/* Navigation Arrow Controls & Indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-[#0072CE] font-bold bg-[#F0F9FF] px-3.5 py-1.5 rounded-full border border-sky-200">
              0{activeIndex + 1} / 0{testimonialsData.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous endorsement"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#001738] hover:bg-[#0072CE] hover:text-white hover:border-[#0072CE] transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next endorsement"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#001738] hover:bg-[#0072CE] hover:text-white hover:border-[#0072CE] transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Editorial Spotlight Box (Rich Obsidian/Navy Monolith) */}
        <div className="bg-gradient-to-br from-[#010B18] via-[#001738] to-[#000E24] text-white border border-[#0072CE]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-9 lg:p-12 shadow-2xl shadow-black/25 relative overflow-hidden">
          <Quote className="w-20 h-20 sm:w-28 sm:h-28 text-white/5 absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center"
            >
              {/* Left Column: Client Avatar & Project Tag */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-3.5">
                  <img
                    src={current.image}
                    alt={current.clientName}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#38BDF8] shadow-xl shadow-sky-500/25"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-[#0072CE] text-white p-1 rounded-md shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl text-white font-bold leading-snug">
                  {current.clientName}
                </h3>
                <p className="text-xs text-[#38BDF8] font-semibold mt-0.5">
                  {current.designation}
                </p>

                <div className="mt-3.5 pt-2.5 border-t border-white/15 w-full flex flex-col items-center lg:items-start gap-1 text-xs font-sans text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#38BDF8] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    {current.location}
                  </span>
                  <span>{current.projectTitle} • {current.area}</span>
                  <span className="text-slate-400 font-medium">Handover {current.year}</span>
                </div>
              </div>

              {/* Right Column: Rating & Big Quote */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-mono text-sky-200 ml-2 font-bold tracking-wide">5.0 / 5.0 VERIFIED CLIENT</span>
                </div>

                <blockquote className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-100 leading-relaxed font-normal drop-shadow-sm">
                  "{current.quote}"
                </blockquote>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-sans text-sky-200">
                  <span className="text-[#38BDF8] font-bold">Turnkey Structural Execution</span>
                  <span className="text-white font-semibold">Verified Homeowner</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
