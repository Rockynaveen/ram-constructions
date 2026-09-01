import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import type { Service, Project } from '../types';
import { Button } from '../components/ui/Button';
import { useAppStore } from '../store/useStore';
import { CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultationModal } = useAppStore();

  const service: Service | undefined = servicesData.find((s: Service) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = projectsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-[#0284C7] transition-colors uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Disciplines</span>
        </Link>
      </div>

      {/* Main Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-black/45 to-black/20" />

          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-serif text-3xl sm:text-4xl text-[#38BDF8] font-bold">
                {service.number}
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-sky-200 border-l border-white/30 pl-3 font-semibold">
                Discipline Blueprint
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12]">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base font-light text-slate-200 mt-3 max-w-2xl">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2-Column Detail Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-semibold">
                Discipline Overview
              </h2>
              <p className="text-base font-normal text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* 4-Phase Step-by-Step Workflow */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                Structured Execution Workflow
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.workflow.map((w) => (
                  <div key={w.phase} className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl space-y-2 shadow-sm">
                    <span className="text-xs font-mono text-[#0284C7] uppercase tracking-wider font-bold block">
                      {w.phase}
                    </span>
                    <h4 className="font-serif text-lg text-[#0B2545] font-semibold">{w.title}</h4>
                    <p className="text-xs font-normal text-slate-600 leading-relaxed">{w.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Standards */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                Engineering Protocols & Quality Benchmarks
              </h3>
              <div className="space-y-3">
                {service.engineeringStandards.map((std: string) => (
                  <div key={std} className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-slate-200 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-normal text-slate-700">{std}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                Contractual Deliverables Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((del: string) => (
                  <div key={del} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA Column (Col 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              
              <div className="bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-lg shadow-slate-900/5 space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#0284C7] uppercase font-bold block mb-1">
                    Direct Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                    Commission {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                    Request a private project consultation with the discipline director.
                  </p>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-700 border-y border-slate-200 py-4 font-medium">
                  <div className="flex justify-between">
                    <span>Delivered Projects:</span>
                    <span className="text-[#0284C7] font-bold">{service.featuredProjectsCount}+ Built</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Structural Warranty:</span>
                    <span className="text-[#0B2545] font-bold">10 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subcontracting:</span>
                    <span className="text-emerald-600 font-bold">Zero (100% In-House)</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  icon="arrow-right"
                  onClick={() => openConsultationModal(service.title)}
                  className="w-full shadow-md shadow-sky-600/20"
                >
                  Book Feasibility Session
                </Button>
              </div>

              {/* Related Selected Works */}
              <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-4 shadow-sm">
                <h4 className="font-serif text-lg text-[#0B2545] font-semibold">Related Landmark Works</h4>
                <div className="space-y-3">
                  {relatedProjects.map((rp: Project) => (
                    <Link
                      key={rp.id}
                      to={`/projects/${rp.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <img
                        src={rp.coverImage}
                        alt={rp.title}
                        className="w-12 h-12 object-cover rounded-lg border border-slate-200"
                      />
                      <div>
                        <span className="font-serif text-sm text-[#0B2545] group-hover:text-[#0284C7] transition-colors block font-medium">
                          {rp.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {rp.location} • {rp.area}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
