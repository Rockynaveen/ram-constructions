import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Check } from 'lucide-react';

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
    <Card className="group relative h-full flex flex-col justify-between overflow-hidden border border-slate-200/90 bg-white hover:border-[#0072CE]/60 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 rounded-xl">
      {/* Top Accent Gradient Line that reveals on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D62] via-[#0072CE] to-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <CardHeader className="p-6 pb-3 space-y-3.5">
          <div className="flex items-center justify-between">
            {/* Modern Frosted Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100/80 flex items-center justify-center text-[#0072CE] group-hover:bg-gradient-to-br group-hover:from-[#002D62] group-hover:to-[#0072CE] group-hover:text-white group-hover:border-[#002D62] transition-all duration-300 shadow-xs">
              <Icon className="w-6 h-6 stroke-[1.8]" />
            </div>

            {/* Shadcn UI Pill Badge */}
            <Badge variant="sky" className="text-[11px] font-mono tracking-wider font-bold">
              PILLAR {item.num}
            </Badge>
          </div>

          <CardTitle className="text-base sm:text-[17px] font-bold text-[#002D62] group-hover:text-[#0072CE] transition-colors leading-snug pt-1">
            {item.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pt-0 pb-4">
          <CardDescription className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
            {item.description}
          </CardDescription>
        </CardContent>
      </div>

      <CardFooter className="px-6 py-3 border-t border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-700 font-medium w-full">
          <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[2.5]" />
          </div>
          <span className="truncate text-[11px] sm:text-xs text-slate-700 font-semibold">{item.tagline.split('.')[0]}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
