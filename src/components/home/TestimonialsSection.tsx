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
    <section className="py-7 sm:py-10 lg:py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Architectural Image & Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80"
          alt="RAM Constructions Completed Luxury Residence Architecture"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Transparent Black Overlays */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

        {/* Subtle grid accent */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header (Compacted) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5 border-b border-white/10 pb-4">
          <SectionHeading
            theme="dark"
            eyebrow="Client Endorsements"
            title="Stories of Trust &"
            titleHighlight="Excellence."
            description="Our clients are physicians, technology founders, and design connoisseurs who demanded uncompromising structural fidelity and transparent execution."
          />

          {/* Navigation Arrow Controls & Indicator */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-xs font-mono text-sky-300 font-bold bg-[#0B2545] px-2.5 py-0.5 rounded border border-[#38BDF8]/30">
              0{activeIndex + 1} / 0{testimonialsData.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous endorsement"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next endorsement"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Editorial Spotlight Box (Reduced Height & Padding) */}
        <div className="bg-[#0B2545]/80 backdrop-blur-xl border border-[#0EA5E9]/30 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-2xl relative overflow-hidden">
          <Quote className="w-14 h-14 sm:w-16 sm:h-16 text-[#38BDF8]/10 absolute top-3 right-3 sm:top-5 sm:right-5 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center"
            >
              {/* Left Column: Client Avatar & Project Tag */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-2.5">
                  <img
                    src={current.image}
                    alt={current.clientName}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-[#38BDF8] shadow-md shadow-sky-500/20"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-[#0284C7] text-white p-0.5 rounded shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="text-base sm:text-lg text-white font-bold">
                  {current.clientName}
                </h3>
                <p className="text-xs text-sky-300 font-semibold mt-0.5">
                  {current.designation}
                </p>

                <div className="mt-2.5 pt-2 border-t border-white/10 w-full flex flex-col items-center lg:items-start gap-0.5 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1 text-[#38BDF8] font-bold">
                    <MapPin className="w-3 h-3" />
                    {current.location}
                  </span>
                  <span>{current.projectTitle} • {current.area}</span>
                  <span className="text-slate-400">Handover {current.year}</span>
                </div>
              </div>

              {/* Right Column: Rating & Big Quote */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-mono text-sky-200 ml-2 font-bold">5.0 / 5.0 Verified Review</span>
                </div>

                <blockquote className="text-sm sm:text-base lg:text-lg text-white leading-relaxed font-normal tracking-tight drop-shadow-md">
                  "{current.quote}"
                </blockquote>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-mono text-sky-300">
                  <span>Turnkey Structural Execution</span>
                  <span className="text-white font-bold">Verified Homeowner</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
