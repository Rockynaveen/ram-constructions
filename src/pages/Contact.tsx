import React from 'react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { CostEstimator } from '../components/forms/CostEstimator';
import { MapPin, Phone, Mail, Clock, Award, Building } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-bold">
              Project Inquiries & Concierge
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#0B2545] leading-[1.12]">
            Let’s build something <br />
            <span className="italic text-brand-gradient">extraordinary together.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
            Share your plot coordinates, spatial aspirations, and timeline. Our Senior Directors will prepare a bespoke feasibility analysis and project roadmap.
          </p>
        </div>
      </section>

      {/* Main Inquiry Form & Studio Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 rounded-xl shadow-lg shadow-slate-900/5">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold block mb-1">
                Step 01 — Project Brief Submission
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-semibold">
                Consultation Brief
              </h2>
            </div>

            <ProjectEnquiryForm />
          </div>

          {/* Right Column: Studio Locations & Direct Contacts (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hyderabad Flagship Studio */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6 rounded-xl space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#0284C7]">
                <Building className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">Headquarters Atelier</span>
              </div>
              <h3 className="font-serif text-xl text-[#0B2545] font-semibold">Hyderabad Studio</h3>
              
              <div className="space-y-2.5 text-xs font-normal text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Road No. 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-slate-800 font-semibold">+91 40 6899 4400 / +91 98490 12345</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-[#0284C7] font-semibold">hyd@ramconstructions.in</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500">
                  <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Mon – Sat: 09:30 AM – 07:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

            {/* Bengaluru Studio */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6 rounded-xl space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-[#0284C7]">
                <Building className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">Southern Atelier</span>
              </div>
              <h3 className="font-serif text-xl text-[#0B2545] font-semibold">Bengaluru Studio</h3>
              
              <div className="space-y-2.5 text-xs font-normal text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-slate-800 font-semibold">+91 80 4912 8800</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-[#0284C7] font-semibold">blr@ramconstructions.in</span>
                </div>
              </div>
            </div>

            {/* Direct VIP Hotline Box */}
            <div className="bg-[#0B2545] text-white p-5 rounded-xl space-y-2.5 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-bold">
                <Award className="w-4 h-4" />
                <span>Executive Client Liaison</span>
              </div>
              <h4 className="font-serif text-base text-white font-semibold">Direct Director Hotline</h4>
              <p className="text-xs text-slate-200 font-light leading-relaxed">
                For urgent plot acquisitions or fast-track institutional commissions:
              </p>
              <a
                href="tel:+919849012345"
                className="inline-block font-mono text-xs text-[#38BDF8] font-bold hover:underline"
              >
                +91 98490 12345 (VIP Concierge)
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Cost Estimator on Contact Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono tracking-widest text-[#0284C7] uppercase font-bold">
            Ballpark Planning
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B2545] mt-1 font-semibold">
            Need an immediate budgetary estimate?
          </h3>
        </div>
        <CostEstimator />
      </section>
    </div>
  );
};
