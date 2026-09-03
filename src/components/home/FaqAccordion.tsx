import React from 'react';
import { motion } from 'framer-motion';
import { faqsData } from '../../data/faqs';
import { SectionHeading } from '../ui/SectionHeading';
import { HelpCircle, PhoneCall } from 'lucide-react';
import { useAppStore } from '../../store/useStore';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/Accordion';

export const FaqAccordion: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  return (
    <section className="py-10 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Title & Concierge Callout */}
          <div className="lg:col-span-5 space-y-5">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clarity Before"
              titleHighlight="a single brick is laid."
              description="Transparent answers regarding contracts, milestone gates, architectural bylaws, and construction quality assurance."
            />

            <div className="bg-[#F0F9FF] border border-sky-200 p-5 sm:p-6 rounded-2xl space-y-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0284C7] border border-sky-200 shadow-sm">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base text-[#0B2545] font-bold">Have a Specific Question?</h4>
                  <p className="text-xs text-slate-500 font-normal">Speak directly with a Senior Project Director</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Whether you have an atypical plot shape, municipal sanction query, or specific timeline constraints, our directors provide instant feasibility guidance.
              </p>

              <button
                onClick={() => openConsultationModal()}
                className="w-full py-3 px-4 bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-bold shadow-md shadow-slate-900/10"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Feasibility Callback</span>
              </button>
            </div>
          </div>

          {/* Right Column: Shadcn UI Accordion List */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue={faqsData[0].id}>
              {faqsData.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <AccordionItem value={faq.id}>
                    <AccordionTrigger>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
  );
};
