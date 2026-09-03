import React from 'react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { CostEstimator } from '../components/forms/CostEstimator';
import { MapPin, Phone, Mail, Clock, Award, Building2, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-100">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
            <span className="text-xs tracking-widest text-[#0284C7] uppercase font-bold">
              Project Inquiries & Direct Concierge
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] leading-tight">
            Let’s Build Something <br />
            <span className="text-[#0284C7]">Extraordinary Together.</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
            Share your plot details, spatial aspirations, and timeline. Our Senior Project Directors will prepare a feasibility analysis and turnkey roadmap for your build.
          </p>
        </div>
      </section>

      {/* Main Grid: Addresses on Left, Form on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Studio Locations & Direct Contacts (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0284C7] font-bold block mb-1">
                Our Locations & Contacts
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                Studio & Engineering Offices
              </h2>
            </div>

            {/* Hyderabad Flagship Studio */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-2xl space-y-3.5 shadow-sm hover:border-[#0284C7] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-[#0284C7]">
                  <Building2 className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-bold">Headquarters Atelier</span>
                </div>
                <span className="text-[11px] font-bold bg-sky-100 text-[#0284C7] px-2.5 py-0.5 rounded">Hyderabad</span>
              </div>
              <h3 className="text-lg text-[#0B2545] font-bold">Hyderabad Studio</h3>
              
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Road No. 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-[#0B2545] font-semibold">+91 40 6899 4400 / +91 98490 12345</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-[#0284C7] font-semibold">hyd@ramconstructions.in</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 pt-1 border-t border-slate-200/60">
                  <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Mon – Sat: 09:30 AM – 07:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

            {/* Bengaluru Studio */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-2xl space-y-3.5 shadow-sm hover:border-[#0284C7] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-[#0284C7]">
                  <Building2 className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-bold">Southern Atelier</span>
                </div>
                <span className="text-[11px] font-bold bg-sky-100 text-[#0284C7] px-2.5 py-0.5 rounded">Bengaluru</span>
              </div>
              <h3 className="text-lg text-[#0B2545] font-bold">Bengaluru Studio</h3>
              
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-[#0B2545] font-semibold">+91 80 4912 8800</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span className="text-[#0284C7] font-semibold">blr@ramconstructions.in</span>
                </div>
              </div>
            </div>

            {/* Direct VIP Hotline Box */}
            <div className="bg-[#0B2545] text-white p-6 rounded-2xl space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-xs text-[#38BDF8] uppercase tracking-wider font-bold">
                <Award className="w-4 h-4" />
                <span>Executive Client Liaison</span>
              </div>
              <h4 className="text-lg text-white font-bold">Direct Director Hotline</h4>
              <p className="text-xs text-slate-200 font-normal leading-relaxed">
                For urgent plot assessments or fast-track institutional and luxury commissions:
              </p>
              <a
                href="tel:+919849012345"
                className="inline-flex items-center gap-2 text-sm text-[#38BDF8] font-bold hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98490 12345 (VIP Concierge)</span>
              </a>
            </div>

            {/* Accreditations */}
            <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-center gap-3 text-xs text-[#0B2545] font-semibold">
              <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0" />
              <span>COA Registered Practice & ISO 9001:2015 Certified Practice</span>
            </div>

          </div>

          {/* Right Column: Simple & Professional Shadcn UI Form (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl shadow-slate-900/5">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="text-xs uppercase tracking-widest text-[#0284C7] font-bold block mb-1">
                Online Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0B2545] font-bold">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the brief below and our engineering team will respond within 24 hours.
              </p>
            </div>

            <ProjectEnquiryForm />
          </div>

        </div>
      </section>

      {/* Embedded Cost Estimator on Contact Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest text-[#0284C7] font-bold">
            Budget Planning
          </span>
          <h3 className="text-2xl sm:text-3xl text-[#0B2545] mt-1 font-bold">
            Need an immediate ballpark estimate?
          </h3>
        </div>
        <CostEstimator />
      </section>
    </div>
  );
};
