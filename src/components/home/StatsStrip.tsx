import React from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface SimpleStat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export const StatsStrip: React.FC = () => {
  const stats: SimpleStat[] = [
    {
      value: 15,
      suffix: '+',
      label: 'Years of Mastery'
    },
    {
      value: 300,
      suffix: '+',
      label: 'Delighted Clients'
    },
    {
      value: 310,
      suffix: '+',
      label: 'Landmarks Delivered'
    },
    {
      value: 7.2,
      suffix: 'M+',
      decimals: 1,
      label: 'Sq. Ft. Realized'
    }
  ];

  return (
    <section className="py-8 text-white border-t border-b border-slate-800/80 relative overflow-hidden bg-[#020E1F]">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/counting-bg.png"
          alt="RAM Constructions Background"
          className="w-full h-full object-cover object-center scale-100 filter brightness-95 contrast-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80';
          }}
        />

        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-[#020E1F]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020E1F]/90 via-[#00224D]/60 to-[#020E1F]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020E1F] via-transparent to-[#020E1F]/60 pointer-events-none" />

        {/* Subtle grid accent */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#38BDF8] uppercase font-bold">
              Proven Track Record
            </span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2.5 drop-shadow-md">
            Engineering & Milestone Metrics
          </h2>
        </div>

        {/* 4 Clean Stats Grid with Luminous Typography */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 text-center py-2 sm:py-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col items-center justify-center transition-all hover:bg-white/10">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[#7DD3FC] to-[#0072CE] bg-clip-text text-transparent tracking-tight drop-shadow-md">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                  duration={2.2}
                />
              </div>
              <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm font-sans font-semibold text-slate-200 tracking-wide drop-shadow-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
