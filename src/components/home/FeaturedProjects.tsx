import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, Calendar, IndianRupee, Sparkles } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const featured = projectsData.filter((p) => {
    if (activeFilter === 'All') return p.featured;
    return p.featured && p.status === activeFilter;
  });

  const filterTabs = ['All', 'Ongoing', 'Completed'] as const;

  return (
    <section className="py-8 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle ambient light grid */}
      <div className="absolute inset-0 bg-light-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <SectionHeading
            eyebrow="Curated Portfolio"
            title="Spaces shaped with"
            titleHighlight="disciplined craft."
            description="A curated collection of bespoke residences and commercial landmarks defined by structural purity, tectonic precision, and premium engineering."
          />

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Filter Tabs Pills (All / Ongoing / Completed) */}
            <div className="flex items-center gap-1.5 bg-[#F8FAFC] p-1.5 rounded-2xl border border-slate-200/90 shadow-xs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFilter === tab
                      ? 'bg-gradient-to-r from-[#001738] via-[#00224D] to-[#0072CE] text-white shadow-md shadow-[#001738]/25'
                      : 'text-slate-600 hover:text-[#0072CE] hover:bg-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-stretch"
          >
            {/* Main Lead Spotlight Project (Col 8) */}
            {featured[0] && (
              <div className="lg:col-span-8 group">
                <div className="block relative h-full min-h-[500px] sm:min-h-[560px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#010B18] text-left">
                  <img
                    src={featured[0].coverImage}
                    alt={featured[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010B18]/95 via-[#001738]/45 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className={`text-[11px] font-sans font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 ${
                      featured[0].status === 'Ongoing'
                        ? 'bg-amber-500 text-white'
                        : 'bg-[#0072CE] text-white'
                    }`}>
                      {featured[0].status === 'Ongoing' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                      {featured[0].status || featured[0].category}
                    </span>
                    <span className="text-xs font-sans font-bold text-sky-200 bg-[#001738]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20">
                      {featured[0].status === 'Ongoing' ? `Delivery ${featured[0].year}` : `${featured[0].year} Handover`}
                    </span>
                  </div>

                  {/* Bottom Information Panel */}
                  <div className="absolute bottom-7 left-7 right-7 z-10 text-white">
                    <div className="flex items-center gap-2 text-xs font-sans font-medium text-sky-300 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{featured[0].location}</span>
                      <span className="mx-1">•</span>
                      <span>{featured[0].area}</span>
                    </div>

                    <h3 className="font-editorial-serif text-2xl sm:text-4xl lg:text-[2.75rem] font-medium text-white transition-colors leading-[1.15] drop-shadow-md">
                      {featured[0].title}
                    </h3>

                    <p className="text-xs sm:text-sm font-normal text-slate-200 mt-2.5 line-clamp-2 max-w-2xl leading-relaxed">
                      {featured[0].tagline}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
                      <span className="text-xs font-sans text-[#38BDF8] font-bold flex items-center gap-1.5">
                        <IndianRupee className="w-3.5 h-3.5" />
                        <span>Budget: {featured[0].budgetRange}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-sky-200 uppercase tracking-wider bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20">
                        <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Turnkey Landmark</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Side Column Stacked Projects (Col 4) */}
            <div className="lg:col-span-4 flex flex-col gap-7 lg:gap-9">
              {featured.slice(1, 3).map((item) => (
                <div key={item.id} className="group flex-1">
                  <div className="block relative h-full min-h-[260px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-500 bg-[#010B18] text-left">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#010B18]/95 via-[#001738]/45 to-transparent" />

                    <div className="absolute top-5 left-5 z-10">
                      <span className={`text-[10px] font-sans font-bold tracking-wider uppercase px-3 py-1 rounded-md border flex items-center gap-1.5 ${
                        item.status === 'Ongoing'
                          ? 'bg-amber-500/95 text-white border-amber-400/40'
                          : 'bg-[#001738]/85 text-[#38BDF8] border-[#38BDF8]/30'
                      }`}>
                        {item.status === 'Ongoing' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                        {item.status || item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                      <div className="flex items-center gap-1.5 text-[11px] font-sans font-medium text-sky-300 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{item.location}</span>
                      </div>

                      <h4 className="font-editorial-serif text-lg sm:text-xl font-medium text-white transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-slate-300">{item.area}</span>
                        <span className="text-[#38BDF8] font-bold flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.year}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row of 2 Secondary Featured Projects */}
            {featured.slice(3, 5).map((item) => (
              <div key={item.id} className="lg:col-span-6 group">
                <div className="block relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-500 bg-[#010B18] text-left">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010B18]/95 via-[#001738]/35 to-transparent" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-sans font-bold tracking-wider uppercase px-3 py-1 rounded-md flex items-center gap-1.5 ${
                        item.status === 'Ongoing'
                          ? 'bg-amber-500 text-white'
                          : 'bg-[#0072CE] text-white'
                      }`}>
                        {item.status === 'Ongoing' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                        {item.status || item.category}
                      </span>
                      <span className="text-xs font-sans text-sky-200">
                        {item.status === 'Ongoing' ? `Delivery ${item.year}` : `${item.year} Handover`}
                      </span>
                    </div>

                    <h4 className="font-editorial-serif text-xl sm:text-2xl font-medium text-white transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-sans">
                      <span className="text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        {item.location} • {item.area}
                      </span>
                      <span className="text-[#38BDF8] font-bold">
                        {item.budgetRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
