import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Check, Sparkles } from 'lucide-react';

export const AboutSplit: React.FC = () => {
  return (
    <section className="py-8 bg-[#FCFDFE] relative overflow-hidden">
      {/* Ambient background light grid */}
      <div className="absolute inset-0 bg-light-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Asymmetric Architectural Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/90 group shadow-2xl shadow-slate-900/10 bg-[#001738]">
              <img
                src="/images/who-we-are.jpg"
                alt="Architects and Engineers on site - RAM Constructions"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001738]/95 via-[#00224D]/35 to-transparent" />
              
              <div className="absolute bottom-7 left-7 right-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#001738]/85 backdrop-blur-md border border-white/20 mb-2.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[11px] tracking-widest text-sky-200 uppercase font-bold">
                    Executive Atelier Philosophy
                  </span>
                </div>
                <p className="text-xl sm:text-2xl text-white font-editorial-serif italic font-medium leading-snug drop-shadow-md">
                  "Every millimeter matters when engineering a landmark home."
                </p>
              </div>
            </div>

            {/* Decorative Ambient Under-Glow */}
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#0072CE]/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 lg:pl-3">
            <SectionHeading
              eyebrow="Architectural Lineage"
              title="We don’t just build structures."
              titleHighlight="We shape how people live."
              description="Founded on a singular conviction: every residence should be an enduring work of architectural art, executed by in-house master engineers with mathematical precision and structural discipline."
            />

            {/* Core Tenets Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="flex items-start gap-3.5 p-4 bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#0072CE]/35 shadow-xs hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-[#0072CE]/10 flex items-center justify-center shrink-0 border border-[#0072CE]/25 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 text-[#0072CE]" />
                </div>
                <div>
                  <strong className="text-xs font-sans text-[#001738] block uppercase tracking-wider font-bold">Integrated 3D BIM</strong>
                  <span className="text-xs text-slate-500 font-normal mt-0.5 block">Zero on-site structural clashes</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#0072CE]/35 shadow-xs hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-[#0072CE]/10 flex items-center justify-center shrink-0 border border-[#0072CE]/25 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 text-[#0072CE]" />
                </div>
                <div>
                  <strong className="text-xs font-sans text-[#001738] block uppercase tracking-wider font-bold">Guaranteed Pricing</strong>
                  <span className="text-xs text-slate-500 font-normal mt-0.5 block">Strict zero budget escalations</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#0072CE]/35 shadow-xs hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-[#0072CE]/10 flex items-center justify-center shrink-0 border border-[#0072CE]/25 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 text-[#0072CE]" />
                </div>
                <div>
                  <strong className="text-xs font-sans text-[#001738] block uppercase tracking-wider font-bold">In-House Trades</strong>
                  <span className="text-xs text-slate-500 font-normal mt-0.5 block">Zero third-party subcontracting</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#0072CE]/35 shadow-xs hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-[#0072CE]/10 flex items-center justify-center shrink-0 border border-[#0072CE]/25 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 text-[#0072CE]" />
                </div>
                <div>
                  <strong className="text-xs font-sans text-[#001738] block uppercase tracking-wider font-bold">Live 360° Portal</strong>
                  <span className="text-xs text-slate-500 font-normal mt-0.5 block">Daily 360° cloud progress logs</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                variant="primary" 
                size="md" 
                icon="arrow-right"
                onClick={() => {
                  const elem = document.getElementById('services');
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' });
                    window.history.replaceState(null, '', '#services');
                  }
                }}
              >
                Discover Our Disciplines & Craft
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
