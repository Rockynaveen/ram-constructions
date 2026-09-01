import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-[#0284C7] transition-colors uppercase tracking-wider mb-8 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#0284C7] border border-sky-200">
            <Shield className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-[#0284C7] font-bold">
            Data Governance & NDA
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#0B2545] font-semibold mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-12">
          Effective Date: January 1, 2026 • RAM CONSTRUCTIONS Pvt. Ltd.
        </p>

        <div className="space-y-8 text-slate-700 font-normal leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">1. Commitment to Client Confidentiality</h2>
            <p>
              RAM Constructions recognizes that residential architectural projects involve sensitive financial, spatial, and landholding information. We enforce strict Non-Disclosure Agreements (NDAs) covering all floor plans, plot geo-coordinates, budgets, and security infrastructure specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">2. Information We Collect</h2>
            <p>
              When you submit a consultation request, cost estimation form, or enter into a turnkey design-build agreement with RAM Constructions, we collect your name, contact information, project location, budget parameters, and architectural aspirations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">3. Use of Project Photography</h2>
            <p>
              Architectural photography and videography of commissioned residences are published solely with explicit, written homeowner authorization. Where anonymity is requested, all recognizable exterior contexts and geographical markers are obfuscated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">4. Data Security & Storage</h2>
            <p>
              Project files, 3D BIM models, structural engineering calculations, and financial milestone invoices are stored on encrypted servers with multi-factor authentication. We never sell, lease, or monetize client data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">5. Contact Our Privacy Officer</h2>
            <p>
              For questions regarding privacy, NDA execution, or data deletion, contact our legal counsel at <a href="mailto:legal@ramconstructions.in" className="text-[#0284C7] underline font-semibold">legal@ramconstructions.in</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
