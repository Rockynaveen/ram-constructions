import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { useAppStore } from '../store/useStore';

export const About: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  const leadership = [
    {
      name: 'Er. R. Ramachandra Rao',
      role: 'Founder & Managing Director',
      bio: 'Over 22 years of civil engineering and infrastructure mastery. Pioneer in post-tensioned residential slabs and turnkey quality control.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Ar. Vikramaditya Sen',
      role: 'Principal Design Director',
      bio: 'Alumnus of Architectural Association (AA), London. Over 18 years shaping landmark residences defined by tectonic honesty and biophilic light wells.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Ar. Ananya Reddy',
      role: 'Head of Spatial & Interior Architecture',
      bio: 'Leading our bespoke millwork and natural stone curation. Passionate about tactile textures, acoustic serenity, and handcrafted finishes.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const milestones = [
    { year: '2011', title: 'The Genesis', desc: 'Founded as a specialized engineering and residential construction firm focused on high-quality homes.' },
    { year: '2015', title: 'Integrated 3D BIM & Architecture', desc: 'Integrated full-time architectural design division to eliminate contractor quality compromises.' },
    { year: '2019', title: 'Joinery & Testing Lab', desc: 'Inaugurated our dedicated concrete compressive lab and 20,000 sft joinery fabrication center.' },
    { year: '2023', title: 'Digital Telemetry Portal', desc: 'Launched our proprietary client portal providing daily 360° photographic site telemetry.' },
    { year: '2026', title: '7.2M+ Sq. Ft. Delivered', desc: 'Recognized as the premier benchmark for high-end luxury architecture and turnkey construction.' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-10">
      {/* Page Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-bold">
              Our Lineage & Philosophy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#0B2545] leading-[1.12]">
            Engineering with soul. <br />
            <span className="italic text-brand-gradient">Built with mathematical precision.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
            RAM Constructions is an integrated collective of structural engineers, architects, and master builders united by a commitment to structural permanence and transparent client delivery.
          </p>
        </div>
      </section>

      {/* Large Visual Section with Split Story */}
      <section className="border-y border-slate-200 bg-[#F8FAFC] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-900/5">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="RAM Constructions Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                eyebrow="The Founding Ethos"
                title="Eliminating the friction between"
                titleHighlight="vision and execution."
                description="Most residential construction projects suffer from an adversarial divide: the architect creates an ambitious concept, and a separate general contractor struggles to interpret the details."
              />

              <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
                RAM Constructions was established to eradicate this disconnect. By uniting the architectural drafting table with on-site concrete testing and joinery workbench, every drawing detail is built with millimeter precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <span className="font-mono text-xs text-[#0284C7] uppercase font-bold block mb-1">01 / Single Accountability</span>
                  <p className="text-xs text-slate-600 font-normal">One contract. One design and execution custodian.</p>
                </div>
                <div className="p-3.5 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <span className="font-mono text-xs text-[#0284C7] uppercase font-bold block mb-1">02 / Material Honesty</span>
                  <p className="text-xs text-slate-600 font-normal">Direct quarry sourcing of authentic travertine & certified steel.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <SectionHeading
            align="center"
            eyebrow="Leadership & Master Builders"
            title="Guided by engineers and"
            titleHighlight="architectural pioneers."
            description="Our company directors personally oversee every project from soil excavation to final key handover."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden group hover:border-[#0284C7] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent" />
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="font-serif text-xl text-[#0B2545] font-semibold group-hover:text-[#0284C7] transition-colors">
                  {leader.name}
                </h3>
                <span className="text-xs font-mono text-[#0284C7] block uppercase tracking-wider font-bold">
                  {leader.role}
                </span>
                <p className="text-xs font-normal text-slate-600 pt-1 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline of Milestones */}
      <section className="py-10 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Evolution"
            title="Fifteen years of"
            titleHighlight="disciplined growth."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white border border-slate-200 p-5 rounded-xl space-y-2 shadow-sm">
                <span className="font-serif text-2xl text-[#0284C7] font-bold block">
                  {m.year}
                </span>
                <h4 className="font-serif text-base text-[#0B2545] font-semibold">{m.title}</h4>
                <p className="text-xs font-normal text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-center max-w-4xl mx-auto px-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-semibold">
          Experience our craft firsthand at our office studio.
        </h3>
        <p className="text-sm font-normal text-slate-600 mt-2 max-w-xl mx-auto">
          We welcome prospective patrons to explore our material library, 3D BIM visualization suite, and active site works.
        </p>
        <div className="mt-6">
          <Button
            variant="primary"
            size="md"
            icon="arrow-right"
            onClick={() => openConsultationModal()}
          >
            Schedule Studio Visit
          </Button>
        </div>
      </section>
    </div>
  );
};
