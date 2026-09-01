import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import type { Service } from '../types';
import { Button } from '../components/ui/Button';
import { useAppStore } from '../store/useStore';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  return (
    <div className="min-h-screen bg-white pt-24 pb-10">
      {/* Services Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-bold">
              Integrated Disciplines
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#0B2545] leading-[1.12]">
            Comprehensive mastery from <br />
            <span className="italic text-brand-gradient">groundwork to handover.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
            Our specialized divisions operate as a seamless whole. Discover how RAM Constructions brings architectural visions to life with turnkey engineering mastery.
          </p>
        </div>
      </section>

      {/* 6 Services Deep Dive List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-10">
        {servicesData.map((service: Service, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden p-6 sm:p-8 lg:p-10 hover:border-[#0284C7] transition-all shadow-md shadow-slate-900/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 group shadow-sm">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#0284C7] border border-slate-200 font-bold shadow-sm">
                      {service.featuredProjectsCount}+ Delivered Projects
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl sm:text-4xl text-[#0284C7] font-bold">
                      {service.number}
                    </span>
                    <span className="text-xs font-mono tracking-widest uppercase text-slate-500 border-l border-slate-300 pl-3 font-semibold">
                      Core Discipline
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-semibold">
                    {service.title}
                  </h2>

                  <p className="text-xs font-mono text-[#0284C7] font-bold">
                    {service.tagline}
                  </p>

                  <p className="text-sm font-normal text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-700 block mb-1 font-bold">
                      Key Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-normal text-slate-600">
                      {service.deliverables.slice(0, 4).map((d: string) => (
                        <div key={d} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-3">
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="primary" size="sm" icon="arrow-up-right">
                        Explore Full Discipline Specs
                      </Button>
                    </Link>
                    <button
                      onClick={() => openConsultationModal(service.title)}
                      className="text-xs font-mono text-slate-600 hover:text-[#0B2545] uppercase tracking-wider transition-colors cursor-pointer font-bold"
                    >
                      Inquire Directly →
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Direct Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center py-10 border-t border-slate-200">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-semibold">
          Need a multi-disciplinary turnkey proposal?
        </h3>
        <p className="text-sm font-normal text-slate-600 mt-2">
          Our senior engineers will review your site drawings and deliver a comprehensive feasibility study and BOQ.
        </p>
        <div className="mt-5">
          <Button
            variant="primary"
            size="md"
            icon="arrow-right"
            onClick={() => openConsultationModal()}
          >
            Request Feasibility Review
          </Button>
        </div>
      </section>
    </div>
  );
};
