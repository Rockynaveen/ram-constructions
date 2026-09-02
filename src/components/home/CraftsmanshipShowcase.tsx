import React from 'react';
import { motion } from 'framer-motion';
import { materialsData } from '../../data/materials';
import { SectionHeading } from '../ui/SectionHeading';

export const CraftsmanshipShowcase: React.FC = () => {
  return (
    <section className="py-10 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Materiality & Tectonics"
            title="Details make the"
            titleHighlight="lasting difference."
            description="We build with authentic natural materials that improve with time—stone that deepens in sunlight, timber with natural oils, and raw concrete that weathers with dignity."
          />
        </div>

        {/* Interactive Material Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materialsData.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:border-[#0284C7] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl shadow-slate-900/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#0284C7] border border-slate-200 font-bold shadow-sm">
                    {item.origin}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284C7] block mb-1 font-bold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#0B2545] font-semibold group-hover:text-[#0284C7] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-normal text-slate-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
