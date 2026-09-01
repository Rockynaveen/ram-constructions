import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const StatsStrip: React.FC = () => {
  const stats = [
    { value: 15, suffix: '+', label: 'Years of Mastery', sublabel: 'Engineering & Construction Excellence' },
    { value: 300, suffix: '+', label: 'Delighted Clients', sublabel: 'Luxury Homeowners & Corporates' },
    { value: 310, suffix: '+', label: 'Landmarks Delivered', sublabel: 'On-Time & On-Budget Handover' },
    { value: 7.2, suffix: 'M+', decimals: 1, label: 'Sq. Ft. Built', sublabel: 'Turnkey Spaces Realized' },
  ];

  return (
    <section className="relative bg-[#F8FAFC] border-y border-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col relative group"
            >
              {/* Stat number in deep navy with sky hover */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B2545] tracking-tight group-hover:text-[#0284C7] transition-colors font-semibold">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>

              {/* Title */}
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-2 font-mono uppercase tracking-wider">
                {stat.label}
              </div>

              {/* Sublabel */}
              <div className="text-[11px] font-normal text-slate-500 mt-1 hidden sm:block">
                {stat.sublabel}
              </div>

              {/* Subtle vertical border on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
