import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import type { Project, GalleryItem } from '../types';
import { Button } from '../components/ui/Button';
import { useAppStore } from '../store/useStore';
import { ArrowLeft, MapPin, Quote, ArrowRight } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultationModal } = useAppStore();

  const currentIndex = projectsData.findIndex((p: Project) => p.slug === slug);
  const project: Project | undefined = projectsData[currentIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-[#0284C7] transition-colors uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Works</span>
        </Link>

        <span className="text-xs font-mono text-slate-400">
          Project {currentIndex + 1} of {projectsData.length}
        </span>
      </div>

      {/* Project Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-black/40 to-black/20" />

          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#0284C7] text-white rounded font-bold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-sky-200 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                {project.location}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12]">
              {project.title}
            </h1>

            <p className="text-sm sm:text-lg font-light text-slate-200 mt-2 max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Project Metadata Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl shadow-sm">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1 font-bold">
              Built-Up Area
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">
              {project.area}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1 font-bold">
              Handover Year
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">
              {project.year}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1 font-bold">
              Execution Duration
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#0B2545] font-semibold">
              {project.duration}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1 font-bold">
              Budget Class
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#0284C7] font-semibold">
              {project.budgetRange}
            </span>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Concept (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] block mb-2 font-bold">
                Architectural Concept
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0B2545] font-normal leading-snug">
                {project.overview}
              </h2>
            </div>

            <p className="text-base font-normal text-slate-600 leading-relaxed">
              {project.architecturalConcept}
            </p>

            {/* Spatial Features */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                Signature Spatial Interventions
              </h3>
              <div className="space-y-3">
                {project.spatialFeatures.map((feat: string) => (
                  <div key={feat} className="flex items-start gap-3 p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7] mt-2 shrink-0" />
                    <span className="text-sm font-normal text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Materials (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Materials Palette */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 rounded-xl space-y-5 shadow-sm">
              <h3 className="font-serif text-2xl text-[#0B2545] font-semibold">
                Material Palette & Tectonics
              </h3>
              <div className="space-y-4">
                {project.materials.map((mat) => (
                  <div key={mat.name} className="border-b border-slate-200 pb-3">
                    <strong className="text-sm font-serif text-[#0284C7] block">
                      {mat.name}
                    </strong>
                    <p className="text-xs font-normal text-slate-600 mt-0.5 leading-relaxed">
                      {mat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Specifications */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 rounded-xl space-y-4 shadow-sm">
              <h3 className="font-serif text-xl text-[#0B2545] font-semibold">
                Structural & Systems Specs
              </h3>
              <div className="space-y-3 text-xs font-mono">
                {project.specifications.map((spec) => (
                  <div key={spec.label} className="flex flex-col border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-[#0B2545] font-bold mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Magazine Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] block mb-1 font-bold">
            Visual Documentation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B2545] font-normal">
            Architectural Photography
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img: GalleryItem, idx: number) => (
            <div
              key={img.url}
              className={`rounded-xl overflow-hidden border border-slate-200 group shadow-md hover:shadow-xl transition-all ${
                idx === 0 || idx === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
                <span>{img.caption}</span>
                <span className="text-[#0284C7] font-bold">Plate 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial Callout */}
      {project.clientTestimonial && (
        <section className="max-w-4xl mx-auto px-4 mt-20">
          <div className="bg-[#F0F9FF] border border-sky-200 p-8 sm:p-12 rounded-2xl relative text-center shadow-lg shadow-sky-900/5">
            <Quote className="w-10 h-10 text-[#0284C7]/20 mx-auto mb-4" />
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-normal italic leading-snug">
              "{project.clientTestimonial.quote.replace(/Atelier Vera/g, 'RAM Constructions')}"
            </blockquote>
            <div className="mt-6">
              <span className="font-serif text-lg text-[#0284C7] font-bold block">
                {project.clientTestimonial.author}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                {project.clientTestimonial.role}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Next Project & Consultation Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 text-slate-600 hover:text-[#0284C7] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono uppercase block text-slate-400 font-bold">Previous Landmark</span>
              <span className="font-serif text-lg text-[#0B2545]">{prevProject.title}</span>
            </div>
          </Link>

          <Button
            variant="primary"
            size="md"
            icon="arrow-right"
            onClick={() => openConsultationModal(project.title)}
          >
            Commission Similar Residence
          </Button>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 text-slate-600 hover:text-[#0284C7] transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase block text-slate-400 font-bold">Next Landmark</span>
              <span className="font-serif text-lg text-[#0B2545]">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
