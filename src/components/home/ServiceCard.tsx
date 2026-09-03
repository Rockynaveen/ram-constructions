import React, { useState } from 'react';
import { useAppStore } from '../../store/useStore';
import { 
  Home, 
  Building2, 
  Compass, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const renderServiceIcon = (name: string, className: string = "w-5 h-5") => {
  switch (name) {
    case 'Home':
      return <Home className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    default:
      return <Layers className={className} />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { openConsultationModal } = useAppStore();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${service.title} service card. Tap or press enter to flip.`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className="relative w-full h-[440px] perspective-1000 group focus:outline-none select-none cursor-pointer"
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#00224D]/25 ${
          isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180 group-focus-within:rotate-y-180'
        }`}
      >
        {/* CARD FRONT / DEFAULT STATE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden border border-slate-200/90 bg-[#020E1F]">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Luxury dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020E1F]/95 via-[#00224D]/40 to-transparent" />

          {/* Top Bar: Icon Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-10 h-10 rounded-xl bg-[#001738]/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#38BDF8] shadow-md">
              {renderServiceIcon(service.iconName, "w-5 h-5")}
            </div>
          </div>

          {/* Bottom Card Title & Highlight */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] inline-block animate-pulse" />
              <span className="text-[10px] font-sans tracking-widest text-[#38BDF8] uppercase font-bold">
                {service.featuredProjectsCount}+ Delivered Projects
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl text-white font-bold leading-snug drop-shadow-sm group-hover:text-sky-100 transition-colors">
              {service.title}
            </h3>

            {/* Specifications hint */}
            <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-end text-[11px] font-sans">
              <span className="text-[#38BDF8] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Specifications <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* CARD BACK SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl p-6 bg-[#00224D] border border-[#0072CE]/40 text-white flex flex-col justify-between backface-hidden rotate-y-180 shadow-2xl overflow-hidden">
          {/* Subtle architectural grid pattern background */}
          <div className="absolute inset-0 bg-light-grid opacity-15 pointer-events-none" />

          {/* Top Row: Icon */}
          <div className="relative z-10 flex items-center justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#0072CE]/20 border border-[#0072CE]/40 flex items-center justify-center text-[#38BDF8] shadow-inner">
              {renderServiceIcon(service.iconName, "w-6 h-6")}
            </div>
          </div>

          {/* Content Middle: Title & Short Description */}
          <div className="relative z-10 my-auto py-2">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
              {service.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-3 mb-4">
              {service.shortDescription}
            </p>

            {/* Key Deliverables Highlights */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-white/15">
                {service.deliverables.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-sky-200">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row: CTA Button */}
          <div className="relative z-10 pt-3 border-t border-white/15">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openConsultationModal(`Inquiry: ${service.title}`);
              }}
              className="inline-flex items-center justify-between w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#001738] via-[#00224D] to-[#0072CE] hover:brightness-110 active:scale-[0.99] text-white text-[11px] font-sans font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-sm shadow-[#001738]/25 hover:shadow-md hover:shadow-[#0072CE]/30 hover:-translate-y-0.5 group/btn cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
