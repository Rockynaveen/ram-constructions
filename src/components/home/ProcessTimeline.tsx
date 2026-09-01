import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Compass, FileText, CheckCircle, Hammer, Key, ShieldCheck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Consultation & Site Discovery',
      duration: 'Week 1–2',
      icon: Compass,
      description: 'Comprehensive topographical survey, soil bearing capacity testing, microclimate solar study, and client lifestyle discovery.',
      keyDeliverables: ['Geotechnical soil testing report', 'Site boundary & contour mapping', 'Spatial brief document']
    },
    {
      number: '02',
      title: 'Concept & 3D BIM Architecture',
      duration: 'Week 3–6',
      icon: FileText,
      description: 'Developing iterative architectural floor plans, 3D photorealistic visualization, and full Level-of-Development 350 BIM modeling to eliminate site clashes.',
      keyDeliverables: ['3D architectural renders & VR walk', 'Structural framing schematics', 'Preliminary material boards']
    },
    {
      number: '03',
      title: 'Planning & Statutory Approvals',
      duration: 'Week 7–10',
      icon: CheckCircle,
      description: 'In-house municipal liaison managing GHMC/HMDA/DTCP sanctions, fire department NOCs, and structural safety peer certifications.',
      keyDeliverables: ['Government approved sanction sets', 'Environmental & fire NOCs', 'Structural stability certificate']
    },
    {
      number: '04',
      title: 'Fixed Cost & Milestone Scheduling',
      duration: 'Week 11–12',
      icon: ShieldCheck,
      description: 'Locking guaranteed turnkey pricing with a line-item Bill of Quantities (BOQ), defining 40+ stage-gate quality milestones and escrow release terms.',
      keyDeliverables: ['Guaranteed Maximum Price contract', '40-stage critical path timeline', 'Client portal digital access']
    },
    {
      number: '05',
      title: 'Master Construction & QA Testing',
      duration: 'Month 4–15',
      icon: Hammer,
      description: 'Execution led by dedicated resident structural engineers. Daily 360° photographic updates, independent concrete cube testing, and zero subcontracting.',
      keyDeliverables: ['Daily 360° site photo logs', '7 & 28-day concrete cube lab tests', 'MEP pressure test reports']
    },
    {
      number: '06',
      title: 'Handover & 10-Year Warranty',
      duration: 'Final Month',
      icon: Key,
      description: 'Zero-snag final delivery, full as-built drawings dossier, smart home automation commissioning, and 10-year structural warranty certificate.',
      keyDeliverables: ['120-point quality audit clearance', 'As-built BIM drawings & manuals', '10-Year structural warranty card']
    }
  ];

  return (
    <section className="py-10 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionHeading
            align="center"
            eyebrow="Our Process Flow"
            title="Six disciplined phases from"
            titleHighlight="conception to keys."
            description="RAM Constructions replaces the uncertainty of conventional contracting with a transparent, engineered lifecycle."
          />
        </div>

        {/* Desktop Step Numbers / Horizontal Progress Strip */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-8 relative">
          {/* Background Connecting Line */}
          <div className="absolute top-7 left-8 right-8 h-[2px] bg-slate-200 z-0" />
          
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isCompleted = index < activeStep;
            const Icon = step.icon;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`w-13 h-13 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#0284C7] border-[#0284C7] text-white shadow-lg shadow-sky-500/25 scale-110' 
                    : isCompleted
                    ? 'bg-white border-[#0284C7] text-[#0284C7]'
                    : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <span className={`font-mono text-xs mt-2.5 uppercase tracking-wider transition-colors font-bold ${
                  isActive ? 'text-[#0284C7]' : 'text-slate-500 group-hover:text-slate-700'
                }`}>
                  {step.number} — {step.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="hidden lg:block bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg shadow-slate-900/5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-12 gap-8 items-center"
            >
              <div className="col-span-7 space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl text-[#0284C7] font-bold">
                    {steps[activeStep].number}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 bg-sky-50 border border-sky-200 text-[#0284C7] rounded-sm font-bold">
                    {steps[activeStep].duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                  {steps[activeStep].title}
                </h3>

                <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold block mb-2">
                    Key Milestone Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {steps[activeStep].keyDeliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Navigation Actions */}
              <div className="col-span-5 flex flex-col justify-between h-full bg-[#F8FAFC] border border-slate-200 p-5 rounded-lg">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-widest text-[#0284C7] uppercase font-bold">
                    Stage Accountability
                  </span>
                  <h4 className="font-serif text-base text-[#0B2545] font-semibold">
                    Integrated Stage-Gate Protocol
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Work advances to subsequent phases strictly after formal client sign-off and independent lab structural audit testing.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-4">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-mono text-slate-500 hover:text-[#0B2545] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-medium"
                  >
                    ← Previous Phase
                  </button>

                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="text-xs font-mono text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Vertical Process Layout */}
        <div className="lg:hidden space-y-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-slate-200 p-4 rounded-lg space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#0284C7] border border-sky-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#0284C7]">{step.number}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>

                <h4 className="font-serif text-base text-[#0B2545] font-semibold">{step.title}</h4>
                <p className="text-xs font-normal text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
