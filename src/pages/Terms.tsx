import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck } from 'lucide-react';

export const Terms: React.FC = () => {
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
            <FileCheck className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-[#0284C7] font-bold">
            Contractual Protocols
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#0B2545] font-semibold mb-4">
          Terms of Engagement
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-12">
          Effective Date: January 1, 2026 • RAM CONSTRUCTIONS Pvt. Ltd.
        </p>

        <div className="space-y-8 text-slate-700 font-normal leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">1. Scope of Turnkey Agreements</h2>
            <p>
              RAM Constructions engages with clients through legally binding Design-Build Turnkey Contracts. All architectural schematics, structural designs, and civil executions are covered under a unified Bill of Quantities (BOQ) with Guaranteed Maximum Price commitments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">2. Stage-Gate Milestone Approvals</h2>
            <p>
              Work progresses across 40+ defined milestone gates. Each phase (foundation casting, slab pouring, brickwork, MEP rough-ins, glazing, and joinery) requires mandatory structural cube lab test verification and formal client sign-off before financial milestone release.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">3. Material Specifications & Warranties</h2>
            <p>
              Only factory-certified materials (TMT FE550D rebar, Ready-Mix Concrete M30/M35, branded CPVC piping, and kiln-seasoned hardwoods) are utilized. We provide a formal 10-Year Comprehensive Structural Warranty and 5-Year Waterproofing Warranty from the date of handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">4. Intellectual Property</h2>
            <p>
              Custom architectural blueprints, 3D BIM assets, and interior joinery schematics created by RAM Constructions remain the intellectual property of the firm until final project settlement, after which full perpetual license for the specific site is granted to the homeowner.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
