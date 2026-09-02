import React from 'react';

export interface PrincipleItem {
  num: string;
  title: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
}

interface WhyChooseUsCardProps {
  item: PrincipleItem;
}

export const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${item.title} card`}
      className="relative w-full h-full bg-white border border-slate-200/80 rounded-md p-6 sm:p-7 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group select-none"
    >
      {/* HOVER ACCENT CORNER LINES (Brand Blue Framed Design) */}
      {/* Top-Right L-Frame Line */}
      <div 
        className="absolute -top-1.5 -right-1.5 w-1/2 h-1/2 border-t-[3px] border-r-[3px] border-[#0284C7] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none" 
      />
      {/* Bottom-Left L-Frame Line */}
      <div 
        className="absolute -bottom-1.5 -left-1.5 w-1/2 h-1/2 border-b-[3px] border-l-[3px] border-[#0284C7] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none" 
      />

      {/* Center Icon */}
      <div className="w-12 h-12 text-[#0284C7] group-hover:scale-110 transition-transform duration-300 mb-3.5 flex items-center justify-center shrink-0">
        <Icon className="w-9 h-9 stroke-[1.75]" />
      </div>

      {/* Pillar Title */}
      <h3 className="font-sans text-base sm:text-lg font-bold tracking-wider text-[#0B2545] uppercase mb-2.5 group-hover:text-[#0284C7] transition-colors leading-snug">
        {item.title}
      </h3>

      {/* Pillar Description */}
      <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed font-sans max-w-sm line-clamp-3">
        {item.description}
      </p>

      {/* Compact Tick Mark Footnote */}
      <div className="mt-auto pt-3 border-t border-slate-100 w-full text-xs font-mono text-[#0284C7] font-bold truncate">
        ✓ {item.tagline.split('.')[0]}
      </div>
    </div>
  );
};
