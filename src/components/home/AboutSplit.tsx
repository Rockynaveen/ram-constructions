import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Check, Award } from 'lucide-react';

export const AboutSplit: React.FC = () => {
  return (
    <section className="min-h-screen lg:h-screen lg:max-h-screen flex items-center bg-white relative overflow-hidden py-8 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Asymmetric Architectural Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-xl border border-slate-200 group shadow-xl shadow-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural Craftsmanship by RAM Constructions"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase block mb-1 font-bold">
                  RAM Constructions Philosophy
                </span>
                <p className="font-serif text-base sm:text-lg text-white font-normal">
                  "Every millimeter matters when engineering a landmark home."
                </p>
              </div>
            </div>

            {/* Floating Accent Badge in Clean Navy/White */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 z-20 bg-white border border-slate-200 p-4 rounded-xl shadow-xl shadow-slate-900/10 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center border border-sky-100 shrink-0">
                  <Award className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <span className="text-lg font-serif text-[#0B2545] font-bold block leading-tight">15+ Years</span>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider font-semibold">
                    Engineering Lineage
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-4 lg:pl-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="We don’t just build structures."
              titleHighlight="We shape how people live."
              description="Founded on a singular conviction: every residence should be an enduring work of architectural art, executed by in-house master engineers with structural discipline."
            />

            {/* Core Tenets Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 p-2.5 bg-[#F8FAFC] rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 border border-sky-200">
                  <Check className="w-3 h-3 text-[#0284C7]" />
                </div>
                <div>
                  <strong className="text-xs font-mono text-[#0B2545] block uppercase tracking-wide">Integrated 3D BIM</strong>
                  <span className="text-[11px] text-slate-500 font-light">Zero on-site clashes</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 bg-[#F8FAFC] rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 border border-sky-200">
                  <Check className="w-3 h-3 text-[#0284C7]" />
                </div>
                <div>
                  <strong className="text-xs font-mono text-[#0B2545] block uppercase tracking-wide">Guaranteed Fixed Pricing</strong>
                  <span className="text-[11px] text-slate-500 font-light">No budget escalations</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 bg-[#F8FAFC] rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 border border-sky-200">
                  <Check className="w-3 h-3 text-[#0284C7]" />
                </div>
                <div>
                  <strong className="text-xs font-mono text-[#0B2545] block uppercase tracking-wide">In-House Master Trades</strong>
                  <span className="text-[11px] text-slate-500 font-light">Zero third-party subcontracting</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 bg-[#F8FAFC] rounded-lg border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 border border-sky-200">
                  <Check className="w-3 h-3 text-[#0284C7]" />
                </div>
                <div>
                  <strong className="text-xs font-mono text-[#0B2545] block uppercase tracking-wide">Live Digital Portal</strong>
                  <span className="text-[11px] text-slate-500 font-light">Daily 360° progress logs</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link to="/about">
                <Button variant="primary" size="md" icon="arrow-right">
                  Discover Our Lineage & Philosophy
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
