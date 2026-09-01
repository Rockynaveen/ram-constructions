import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Shield, Eye, Clock, FileCheck, CheckCircle2, Users, Cpu, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      num: '01',
      title: 'End-to-End Turnkey Execution',
      icon: Shield,
      tagline: 'Single source of truth from soil testing to interior millwork and keys.',
      description: 'We eliminate the disputes and finger-pointing typical of fragmented contractor setups. Our unified team coordinates civil, structural, MEP, interior, and landscape engineering under a single contractual guarantee.'
    },
    {
      num: '02',
      title: 'Zero Third-Party Subcontracting',
      icon: Users,
      tagline: 'In-house master tradesmen and full-time resident structural engineers.',
      description: 'Every mason, bar bender, shuttering expert, and carpenter working on your home is trained in our internal quality academy and directly employed, maintaining exacting standards.'
    },
    {
      num: '03',
      title: '100% Transparent Fixed Pricing',
      icon: FileCheck,
      tagline: 'Guaranteed Maximum Price with itemized bill of quantities.',
      description: 'No hidden clauses, no escalation clauses midway through the build. What we estimate based on approved architectural drawings is the exact amount you pay.'
    },
    {
      num: '04',
      title: 'Dedicated Senior Project Director',
      icon: Award,
      tagline: 'One seasoned point of contact with complete site authority.',
      description: 'You will never have to chase site supervisors. Your dedicated project director manages daily logistics, material approvals, and conducts weekly executive reviews with you.'
    },
    {
      num: '05',
      title: 'Quality-Assured Materials & Testing',
      icon: CheckCircle2,
      tagline: 'Mandatory 3rd-party lab testing on every single steel & concrete batch.',
      description: 'We perform 7-day and 28-day concrete cube compressive tests, ultrasonic pulse velocity checks, and timber moisture validation. Reports are uploaded directly to your portal.'
    },
    {
      num: '06',
      title: 'Real-Time Digital Project Tracking',
      icon: Cpu,
      tagline: 'Daily 360° photo feeds, milestone meters, and live cloud documentation.',
      description: 'Whether you are in Hyderabad, Bengaluru, or overseas, follow your home’s build in real time through our private client portal accessible from any phone or browser.'
    },
    {
      num: '07',
      title: 'Strict On-Time Delivery Discipline',
      icon: Clock,
      tagline: 'Backed by contractual commitments for on-schedule milestone completion.',
      description: 'We utilize Critical Path Method (CPM) project scheduling in Primavera and MS Project to ensure material logistics and curing times never cause idle days on site.'
    },
    {
      num: '08',
      title: '10-Year Structural & Waterproofing Warranty',
      icon: Eye,
      tagline: 'Enduring peace of mind long after you have moved in.',
      description: 'Our relationship does not end at handover. We back our foundations and RCC frames with a formal 10-year structural guarantee alongside quarterly post-handover inspections.'
    }
  ];

  return (
    <section className="py-10 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="The RAM Constructions Difference"
            title="Built on eight non-negotiable"
            titleHighlight="pillars of excellence."
            description="We have redesigned the client construction experience to provide complete transparency, engineering rigor, and structural peace of mind."
          />
        </div>

        {/* Editorial Composition: List of 8 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const isHovered = activePrinciple === index;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setActivePrinciple(index)}
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 relative group flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? 'bg-sky-50/50 border-[#0284C7] shadow-lg shadow-sky-500/10'
                    : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#0284C7]">
                      {item.num}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isHovered ? 'bg-[#0284C7] text-white shadow-md' : 'bg-white text-[#0284C7] border border-slate-200'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg text-[#0B2545] font-semibold group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-normal text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-500 font-medium">
                  <span className="text-[#0284C7] font-bold">✓</span> {item.tagline.split('.')[0]}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
