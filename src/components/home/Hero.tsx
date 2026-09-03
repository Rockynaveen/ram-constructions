import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store/useStore';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  return (
    <section className="relative min-h-[65vh] sm:min-h-[78vh] lg:h-screen lg:min-h-[100vh] flex items-center pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-12 lg:pb-0 overflow-hidden bg-[#010B18]">
      {/* 1. Architectural Hero Image with Cinematic Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.07 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/images/hero final.png"
            alt="RAM Construction Architecture & Civil Engineering"
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.06]"
          />
        </motion.div>

        {/* Reduced & Balanced Overlays */}
        <div className="absolute inset-0 bg-[#010B18]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010B18]/70 via-[#010B18]/40 to-transparent w-full lg:w-[60%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010B18]/50 via-transparent to-[#010B18]/20 pointer-events-none" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 w-full">
        <div className="max-w-3xl">
          
          {/* Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Prestige Eyebrow Badge */}
            <div className="pt-0 sm:pt-2 lg:pt-[50px]">
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/25">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#38BDF8] uppercase">
                  PREMIER CIVIL & ARCHITECTURAL ENGINEERING
                </span>
              </div>
            </div>

            {/* Main Headline with Normal Sans Font */}
            <div>
              <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-white leading-[1.15] sm:leading-[1.14] tracking-tight drop-shadow-xl">
                Building More Than <br />
                Structures — <br />
                <span className="font-bold bg-gradient-to-r from-white via-[#93C5FD] to-[#38BDF8] bg-clip-text text-transparent">
                  Engineering Legacies.
                </span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0072CE] to-transparent rounded-full mt-3 sm:mt-5" />
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-xs sm:text-sm md:text-base font-normal text-slate-200 max-w-2xl leading-relaxed drop-shadow-md">
              We partner with visionary homeowners and enterprises to execute bespoke residences and landmark spaces with mathematical precision, zero subcontracting, and turnkey mastery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              {/* Primary Button */}
              <button
                onClick={() => openConsultationModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0072CE] via-[#0284C7] to-[#0072CE] hover:from-[#005fb0] hover:to-[#0284C7] text-white text-xs sm:text-[12px] font-sans font-bold tracking-[0.14em] uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg border border-[#38BDF8]/50 transition-all duration-300 shadow-lg shadow-[#0072CE]/35 hover:shadow-xl hover:shadow-[#0072CE]/50 hover:-translate-y-0.5 cursor-pointer group active:scale-[0.99]"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => {
                  const elem = document.getElementById('projects');
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' });
                    window.history.replaceState(null, '', '#projects');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/18 backdrop-blur-md text-white border border-white/30 hover:border-white/60 text-xs sm:text-[12px] font-sans font-bold tracking-[0.14em] uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm active:scale-[0.99]"
              >
                EXPLORE PORTFOLIO
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
