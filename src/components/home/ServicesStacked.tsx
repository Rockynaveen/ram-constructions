import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

export const ServicesStacked: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = servicesData[activeServiceIndex];

  return (
    <section className="py-10 bg-[#F8FAFC] relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Core Disciplines"
            title="Disciplines designed for"
            titleHighlight="effortless execution."
            description="From initial geotechnical soil tests to precision structural casting and bespoke interior joinery, our six integrated divisions ensure single-point accountability."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#0284C7] uppercase hover:text-[#0B2545] transition-colors group shrink-0 font-bold"
          >
            <span>View All Disciplines</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Interactive Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Service Items */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {servicesData.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  className={`group transition-all duration-300 py-5 cursor-pointer ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Link to={`/services/${service.slug}`} className="block">
                    <div className="flex items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                        <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isActive ? 'text-[#0284C7]' : 'text-slate-400 group-hover:text-slate-600'
                        }`}>
                          {service.number}
                        </span>
                        <div>
                          <h3 className={`font-serif text-xl sm:text-2xl font-normal transition-colors ${
                            isActive ? 'text-[#0B2545] font-medium' : 'text-slate-800 group-hover:text-[#0B2545]'
                          }`}>
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-normal text-slate-500 mt-1 line-clamp-2 max-w-lg">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'border-[#0284C7] bg-[#0284C7] text-white shadow-md shadow-sky-500/20 translate-x-1' 
                          : 'border-slate-200 text-slate-400 group-hover:border-[#0284C7] group-hover:text-[#0284C7] bg-white'
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Image Display */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-900/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    src={activeService.heroImage}
                    alt={activeService.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-black/20 to-transparent" />

                {/* Floating Service Metadata Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <span className="text-[10px] font-mono tracking-widest text-sky-200 uppercase font-bold">
                      {activeService.number} — Active Discipline
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl text-white">
                    {activeService.title}
                  </h4>
                  <p className="text-xs font-light text-slate-200 mt-1 line-clamp-2">
                    {activeService.tagline}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-sky-100">
                    <span>Delivered Projects:</span>
                    <span className="text-white font-bold">{activeService.featuredProjectsCount}+ Built</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
