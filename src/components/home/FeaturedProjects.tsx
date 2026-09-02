import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const featured = projectsData.filter((p) => {
    if (activeFilter === 'All') return p.featured;
    return p.featured && p.status === activeFilter;
  });

  const filterTabs = ['All', 'Ongoing', 'Completed'] as const;

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]/50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Selected Portfolio"
            title="Spaces shaped with"
            titleHighlight="disciplined craft."
            description="A curated collection of bespoke residences and commercial landmarks defined by structural purity, tectonic precision, and premium engineering."
          />

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Filter Tabs Pills (All / Ongoing / Completed) */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                    activeFilter === tab
                      ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/20'
                      : 'text-slate-600 hover:text-[#0B2545] hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#0284C7] uppercase hover:text-[#0B2545] transition-colors group font-bold ml-2"
            >
              <span>Full Portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            {/* Main Lead Spotlight Project (Col 8) */}
            {featured[0] && (
              <div className="lg:col-span-8 group">
                <Link
                  to={`/projects/${featured[0].slug}`}
                  className="block relative h-full min-h-[460px] sm:min-h-[520px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#050E1C]"
                >
                  <img
                    src={featured[0].coverImage}
                    alt={featured[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/95 via-[#0B2545]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-md shadow-md flex items-center gap-1.5 ${
                      featured[0].status === 'Ongoing'
                        ? 'bg-amber-500 text-white'
                        : 'bg-[#0284C7] text-white'
                    }`}>
                      {featured[0].status === 'Ongoing' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                      {featured[0].status || featured[0].category}
                    </span>
                    <span className="text-xs font-mono font-bold text-sky-200 bg-[#050E1C]/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                      {featured[0].status === 'Ongoing' ? `Delivery ${featured[0].year}` : `${featured[0].year} Handover`}
                    </span>
                  </div>

                  {/* Bottom Information Panel */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-300 mb-2">
                      <MapPin className="w-4 h-4 text-[#38BDF8]" />
                      <span>{featured[0].location}</span>
                      <span className="mx-1">•</span>
                      <span>{featured[0].area}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold group-hover:text-sky-200 transition-colors leading-snug">
                      {featured[0].title}
                    </h3>

                    <p className="text-xs sm:text-sm font-normal text-slate-300 mt-2 line-clamp-2 max-w-2xl leading-relaxed">
                      {featured[0].tagline}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#38BDF8] font-bold">
                        Budget: {featured[0].budgetRange}
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-[#38BDF8] uppercase tracking-wider transition-colors">
                        <span>Explore Specs</span>
                        <div className="w-8 h-8 rounded-full bg-[#0284C7] group-hover:bg-[#0EA5E9] text-white flex items-center justify-center transition-all shadow-md">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Side Column Stacked Projects (Col 4) */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
              {featured.slice(1, 3).map((item) => (
                <div key={item.id} className="group flex-1">
                  <Link
                    to={`/projects/${item.slug}`}
                    className="block relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-500 bg-[#050E1C]"
                  >
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/95 via-[#0B2545]/45 to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded border flex items-center gap-1.5 ${
                        item.status === 'Ongoing'
                          ? 'bg-amber-500/90 text-white border-amber-400/40'
                          : 'bg-[#050E1C]/80 text-[#38BDF8] border-[#38BDF8]/30'
                      }`}>
                        {item.status === 'Ongoing' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                        {item.status || item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sky-300 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{item.location}</span>
                      </div>

                      <h4 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-sky-200 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-300">{item.area}</span>
                        <span className="text-[#38BDF8] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          View <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Row of 2 Secondary Featured Projects */}
            {featured.slice(3, 5).map((item) => (
              <div key={item.id} className="lg:col-span-6 group">
                <Link
                  to={`/projects/${item.slug}`}
                  className="block relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-500 bg-[#050E1C]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/95 via-[#0B2545]/35 to-transparent" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded flex items-center gap-1.5 ${
                        item.status === 'Ongoing'
                          ? 'bg-amber-500 text-white'
                          : 'bg-[#0284C7] text-white'
                      }`}>
                        {item.status === 'Ongoing' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                        {item.status || item.category}
                      </span>
                      <span className="text-xs font-mono text-sky-200">
                        {item.status === 'Ongoing' ? `Delivery ${item.year}` : `${item.year} Handover`}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-sky-200 transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        {item.location} • {item.area}
                      </span>
                      <span className="text-[#38BDF8] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Case Study <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
