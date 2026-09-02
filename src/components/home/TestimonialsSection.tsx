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
    <section className="py-20 sm:py-28 bg-[#050E1C] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Architectural Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
          <SectionHeading
            theme="dark"
            eyebrow="Client Endorsements"
            title="Stories of Trust &"
            titleHighlight="Excellence."
            description="Our clients are physicians, technology founders, and design connoisseurs who demanded uncompromising structural fidelity and transparent execution."
          />

          {/* Navigation Arrow Controls & Indicator */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs font-mono text-sky-300 font-bold bg-[#0B2545] px-3 py-1 rounded border border-[#38BDF8]/30">
              0{activeIndex + 1} / 0{testimonialsData.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous endorsement"
                className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next endorsement"
                className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Editorial Spotlight Box */}
        <div className="bg-[#0B2545]/80 backdrop-blur-xl border border-[#0EA5E9]/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <Quote className="w-28 h-28 text-[#38BDF8]/10 absolute top-8 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Client Avatar & Project Tag */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-6">
                  <img
                    src={current.image}
                    alt={current.clientName}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#38BDF8] shadow-xl shadow-sky-500/20"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-[#0284C7] text-white p-1.5 rounded-lg shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                  {current.clientName}
                </h3>
                <p className="text-xs font-sans text-sky-300 font-semibold mt-1">
                  {current.designation}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 w-full flex flex-col items-center lg:items-start gap-1 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#38BDF8] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    {current.location}
                  </span>
                  <span>{current.projectTitle} • {current.area}</span>
                  <span className="text-slate-400 font-semibold">Handover {current.year}</span>
                </div>
              </div>

              {/* Right Column: Rating & Big Quote */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-xs font-mono text-sky-200 ml-2 font-bold">5.0 / 5.0 Verified Review</span>
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-normal tracking-tight drop-shadow-md">
                  "{current.quote.replace(/Atelier Vera/g, 'RAM Constructions')}"
                </blockquote>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-sky-300">
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
