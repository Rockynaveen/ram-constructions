import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../store/useStore';
import { ArrowRight, Building2, Users, CheckCircle2, Maximize2 } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const Hero: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  const stats = [
    {
      value: 15,
      suffix: '+',
      label: 'YEARS OF EXPERIENCE',
      sub: 'Engineering Excellence',
      icon: Building2
    },
    {
      value: 300,
      suffix: '+',
      label: 'HAPPY CLIENTS',
      sub: 'Turnkey Luxury Homes',
      icon: Users
    },
    {
      value: 310,
      suffix: '+',
      label: 'PROJECTS DELIVERED',
      sub: 'On-Time & On-Budget',
      icon: CheckCircle2
    },
    {
      value: 7,
      suffix: 'M+',
      label: 'SQ. FT. BUILT',
      sub: 'Spaces Realized',
      icon: Maximize2
    }
  ];

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-24 sm:pt-28 overflow-hidden bg-white">
      {/* Background Hero Image from /images/bg-image.png */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 7, ease: 'easeOut' }}
          src="/images/bg-image.png"
          alt="RAM Constructions Architecture Background"
          className="w-full h-full object-cover object-center lg:object-[center_35%]"
        />

        {/* Soft, gentle gradient on the left to ensure crisp text readability while showing the background clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent w-full lg:w-[60%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex items-center py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Direct Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 space-y-6 lg:space-y-8"
          >
            {/* Top Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-sans font-bold tracking-[0.22em] text-[#0B2545] uppercase">
                BUILT ON TRUST. DRIVEN BY DESIGN.
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-bold text-[#0B2545] leading-[1.1] tracking-tight">
                Building More Than <br />
                Structures – <br />
                <span className="text-[#0284C7]">Building Better Lives.</span>
              </h1>
              <div className="w-12 h-[3px] bg-[#0B2545] rounded-full my-5" />
            </div>

            {/* Paragraph (Black Color Font with Semi-Bold) */}
            <p className="text-base sm:text-lg font-semibold text-black max-w-xl leading-relaxed">
              We partner with you at every step to bring your dream space to life with clarity, precision engineering and turnkey master craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Button */}
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0B2545] hover:bg-[#133E70] text-white text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-slate-900/15 cursor-pointer group"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Button */}
              <Link to="/projects">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/90 hover:bg-white text-[#0B2545] border-2 border-slate-300 hover:border-[#0B2545] text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm transition-all duration-200 cursor-pointer shadow-sm"
                >
                  EXPLORE OUR WORK
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Integrated Deep Navy Bottom Statistics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 bg-[#0B2545] text-white w-full border-t border-[#133E70] shadow-2xl"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 sm:gap-5 ${
                    idx > 0 ? 'pt-4 md:pt-0 md:pl-8' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-inner">
                    <Icon className="w-6 h-6 text-[#38BDF8]" />
                  </div>

                  <div>
                    <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-none">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={0}
                      />
                    </div>
                    <div className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.14em] uppercase text-slate-200 mt-1.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-sky-200 font-light hidden sm:block">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
