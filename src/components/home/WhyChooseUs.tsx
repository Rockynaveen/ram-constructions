import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { WhyChooseUsCard, type PrincipleItem } from './WhyChooseUsCard';
import { Shield, Eye, Clock, FileCheck, CheckCircle2, Users, Cpu, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const principles: PrincipleItem[] = [
    {
      num: '01',
      title: 'End-to-End Turnkey Execution',
      icon: Shield,
      tagline: 'Single source of truth from soil testing to interior millwork and keys.',
      description: 'We eliminate the disputes and finger-pointing typical of fragmented contractor setups. Our unified team coordinates civil, structural, MEP, interior, and landscape engineering under a single contractual guarantee.'
    },
    {
      num: '02',
      title: 'Zero Subcontracting',
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
      title: 'Dedicated Senior Director',
      icon: Award,
      tagline: 'One seasoned point of contact with complete site authority.',
      description: 'You will never have to chase site supervisors. Your dedicated project director manages daily logistics, material approvals, and conducts weekly executive reviews with you.'
    },
    {
      num: '05',
      title: 'Quality-Assured Testing',
      icon: CheckCircle2,
      tagline: 'Mandatory 3rd-party lab testing on every single steel & concrete batch.',
      description: 'We perform 7-day and 28-day concrete cube compressive tests, ultrasonic pulse velocity checks, and timber moisture validation. Reports are uploaded directly to your portal.'
    },
    {
      num: '06',
      title: 'Real-Time Digital Tracking',
      icon: Cpu,
      tagline: 'Daily 360° photo feeds, milestone meters, and live cloud documentation.',
      description: 'Whether you are in Hyderabad, Bengaluru, or overseas, follow your home’s build in real time through our private client portal accessible from any phone or browser.'
    },
    {
      num: '07',
      title: 'Strict On-Time Delivery',
      icon: Clock,
      tagline: 'Backed by contractual commitments for on-schedule milestone completion.',
      description: 'We utilize Critical Path Method (CPM) project scheduling in Primavera and MS Project to ensure material logistics and curing times never cause idle days on site.'
    },
    {
      num: '08',
      title: '10-Year Structural Warranty',
      icon: Eye,
      tagline: 'Enduring peace of mind long after you have moved in.',
      description: 'Our relationship does not end at handover. We back our foundations and RCC frames with a formal 10-year structural guarantee alongside quarterly post-handover inspections.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]/60 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="The RAM Constructions Difference"
            title="Built on eight non-negotiable"
            titleHighlight="pillars of excellence."
            description="We have redesigned the client construction experience to provide complete transparency, engineering rigor, and structural peace of mind."
          />
        </div>

        {/* Hover Corner Accent Line Framed Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 items-stretch">
          {principles.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="h-full"
            >
              <WhyChooseUsCard item={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
