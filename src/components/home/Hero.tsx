import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store/useStore';
import { ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#021226]">
      {/* 1. Single Premium Architectural Hero Image with Light Transparent Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/images/hero-aura-tower.jpg"
            alt="RAM Construction Landmark Tower Infrastructure"
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04]"
          />
        </motion.div>

        {/* Black transparent overlays for enhanced depth and rich text contrast */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent w-full lg:w-[70%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Ambient Subtle Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <div className="max-w-3xl">
          
          {/* Editorial & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Prestige Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00224D]/80 backdrop-blur-md border border-[#38BDF8]/40 shadow-lg shadow-sky-950/30">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase">
                PREMIER CIVIL & ARCHITECTURAL ENGINEERING
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-white leading-[1.08] tracking-tight drop-shadow-lg">
                Building More Than <br />
                Structures — <br />
                <span className="bg-gradient-to-r from-white via-[#7DD3FC] to-[#0072CE] bg-clip-text text-transparent">
                  Engineering Legacies.
                </span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#0072CE] rounded-full mt-5" />
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg font-normal text-slate-200 max-w-2xl leading-relaxed drop-shadow">
              We partner with visionary homeowners and enterprises to execute bespoke residences and landmark spaces with mathematical precision, zero subcontracting, and turnkey mastery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Button */}
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#002D62] via-[#0072CE] to-[#0284C7] hover:brightness-110 text-white text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-sky-950/50 hover:shadow-sky-500/25 hover:scale-[1.02] cursor-pointer group"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 hover:border-white text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm transition-all duration-200 cursor-pointer shadow-md"
              >
                EXPLORE PORTFOLIO
              </button>
            </div>

            {/* Key Trust Micro-Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/15 max-w-2xl">
              <div className="flex items-center gap-2 text-slate-200 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>10-Yr Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-xs font-mono">
                <Award className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>100% Fixed Cost Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-xs font-mono col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>In-House Master Trades</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
