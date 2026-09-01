import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '../../data/faqs';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { useAppStore } from '../../store/useStore';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);
  const { openConsultationModal } = useAppStore();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Title & Concierge Callout */}
          <div className="lg:col-span-5 space-y-5">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clarity before"
              titleHighlight="a single brick is laid."
              description="Transparent answers regarding contracts, milestone gates, architectural bylaws, and construction quality assurance."
            />

            <div className="bg-[#F0F9FF] border border-sky-200 p-5 rounded-xl space-y-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0284C7] border border-sky-200 shadow-sm">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#0B2545] font-semibold">Have a Specific Question?</h4>
                  <p className="text-xs text-slate-500 font-normal">Speak directly with a Senior Project Director</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Whether you have an atypical plot shape, municipal sanction query, or specific timeline constraints, our directors provide instant feasibility guidance.
              </p>

              <button
                onClick={() => openConsultationModal()}
                className="w-full py-2.5 px-4 bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-bold shadow-md shadow-slate-900/10"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Feasibility Callback</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-2.5">
            {faqsData.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-xl transition-all duration-200 ${
                    isOpen ? 'border-[#0284C7] bg-[#F8FAFC] shadow-md shadow-sky-500/5' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-serif text-base sm:text-lg font-normal transition-colors ${
                      isOpen ? 'text-[#0284C7]' : 'text-[#0B2545]'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen ? 'border-[#0284C7] bg-[#0284C7] text-white rotate-180' : 'border-slate-200 text-slate-400 bg-white'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm font-normal text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer.replace(/Atelier Vera/g, 'RAM Constructions')}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
