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
    <section className="py-10 sm:py-12 text-white border-t border-b border-slate-200 relative overflow-hidden bg-[#07172A]">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/counting-bg.png"
          alt="RAM Constructions Background"
          className="w-full h-full object-cover object-center scale-100 filter brightness-100 contrast-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80';
          }}
        />

        {/* Soft Light Transparent Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E1C]/60 via-[#0B2545]/45 to-[#050E1C]/60" />
        <div className="absolute inset-0 bg-[#0284C7]/20 mix-blend-overlay" />

        {/* Subtle grid accent */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#38BDF8] uppercase font-bold bg-[#050E1C]/75 px-3 py-0.5 rounded border border-[#38BDF8]/30 shadow-md">
            Proven Track Record
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1.5 drop-shadow-md">
            Statistical Prowess
          </h2>
        </div>

        {/* 4 Clean Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 bg-[#050E1C]/65 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-white/20 shadow-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 md:px-3 flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#38BDF8] tracking-tight drop-shadow-md">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                  duration={2}
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-sans font-bold text-white tracking-wide drop-shadow-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
