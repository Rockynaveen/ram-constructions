import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useAppStore } from '../store/useStore';
import type { ProjectCategory, Project } from '../types';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const Projects: React.FC = () => {
  const { selectedProjectCategory, setProjectCategory } = useAppStore();

  const categories: ProjectCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Architecture',
    'Interior',
    'Renovation'
  ];

  const filteredProjects = selectedProjectCategory === 'All'
    ? projectsData
    : projectsData.filter((p: Project) => p.category === selectedProjectCategory);

  return (
    <div className="min-h-screen bg-white pt-24 pb-10">
      {/* Portfolio Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-bold">
              Curated Portfolio
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#0B2545] leading-[1.12]">
            Selected works of <br />
            <span className="italic text-brand-gradient">architectural permanence.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
            Every project represents a tailored dialogue between client lifestyle, site topography, and engineering excellence.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5 pb-4 border-b border-slate-200">
          {categories.map((cat) => {
            const count = cat === 'All'
              ? projectsData.length
              : projectsData.filter((p: Project) => p.category === cat).length;
            const isActive = selectedProjectCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setProjectCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#0284C7] text-white font-bold shadow-md shadow-sky-600/20'
                    : 'bg-[#F8FAFC] text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-[#0B2545]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:border-[#0284C7] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl shadow-slate-900/5"
              >
                <div>
                  {/* Image Container */}
                  <Link to={`/projects/${project.slug}`} className="block relative aspect-[16/11] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#0284C7] border border-slate-200 uppercase tracking-wider font-bold shadow-sm">
                      {project.category}
                    </div>

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 group-hover:bg-[#0284C7] group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{project.location}</span>
                    </div>

                    <Link to={`/projects/${project.slug}`} className="block group-hover:text-[#0284C7] transition-colors">
                      <h2 className="font-serif text-xl text-[#0B2545] font-semibold leading-snug">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="text-xs font-normal text-slate-600 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Specs Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
                  <span>{project.area}</span>
                  <span className="text-slate-300">•</span>
                  <span>{project.year}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#0284C7] font-bold">{project.duration}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};
