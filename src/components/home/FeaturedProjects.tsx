import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Selected Portfolio"
            title="Spaces shaped with"
            titleHighlight="disciplined craft."
            description="A curated collection of bespoke residences and landmarks defined by structural purity, tectonic precision, and premium engineering."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#0284C7] uppercase hover:text-[#0B2545] transition-colors group shrink-0 font-bold"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Varied Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Project 1: Large Wide Lead Project (Col 12) */}
          {featured[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-12 group"
            >
              <Link to={`/projects/${featured[0].slug}`} className="block relative overflow-hidden rounded-xl border border-slate-200 hover:border-sky-300 transition-all shadow-lg hover:shadow-2xl shadow-slate-900/5">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={featured[0].coverImage}
                    alt={featured[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#0284C7] text-white rounded font-bold">
                        {featured[0].category}
                      </span>
                      <span className="text-xs font-mono text-sky-100 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        {featured[0].location}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-normal group-hover:text-sky-200 transition-colors">
                      {featured[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-slate-200 mt-1.5 line-clamp-2">
                      {featured[0].tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 shrink-0 text-right">
                    <div className="hidden sm:block text-xs font-mono text-sky-100">
                      <div>{featured[0].area}</div>
                      <div className="text-slate-300">{featured[0].year} Handover</div>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#0284C7] text-white flex items-center justify-center group-hover:bg-[#0369A1] shadow-lg shadow-sky-900/40 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Project 2: Tall Left Card (Col 7) */}
          {featured[1] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-7 group"
            >
              <Link to={`/projects/${featured[1].slug}`} className="block relative overflow-hidden rounded-xl border border-slate-200 hover:border-sky-300 transition-all h-full shadow-md hover:shadow-xl shadow-slate-900/5">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={featured[1].coverImage}
                    alt={featured[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase font-bold">
                      {featured[1].category} • {featured[1].location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-sky-200 transition-colors">
                    {featured[1].title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-sky-100 pt-3 border-t border-white/20">
                    <span>{featured[1].area}</span>
                    <span className="flex items-center gap-1 text-[#38BDF8] group-hover:translate-x-1 transition-transform font-bold">
                      Explore Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Project 3: Medium Right Card (Col 5) */}
          {featured[2] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-5 group"
            >
              <Link to={`/projects/${featured[2].slug}`} className="block relative overflow-hidden rounded-xl border border-slate-200 hover:border-sky-300 transition-all h-full shadow-md hover:shadow-xl shadow-slate-900/5">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={featured[2].coverImage}
                    alt={featured[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase font-bold">
                      {featured[2].category} • {featured[2].location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-sky-200 transition-colors">
                    {featured[2].title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-sky-100 pt-3 border-t border-white/20">
                    <span>{featured[2].area}</span>
                    <span className="flex items-center gap-1 text-[#38BDF8] group-hover:translate-x-1 transition-transform font-bold">
                      Explore Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
