import React from 'react';
import { servicesData } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '../ui/Carousel';

export const ServicesStacked: React.FC = () => {
  return (
    <section className="py-8 bg-[#F8FAFC] relative border-t border-slate-200/80 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Interactive 3D Card Carousel Wrapper */}
        <Carousel className="w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <SectionHeading
              eyebrow="Turnkey Disciplines"
              title="Core Engineering &"
              titleHighlight="Execution."
              description="Comprehensive architecture, structural civil engineering, and turnkey construction services delivered with single-point accountability."
            />
          </div>

          {/* Carousel Deck Container with Side Navigation Indicators */}
          <div className="relative px-1 sm:px-2">
            <CarouselPrevious />
            <CarouselNext />
            
            <CarouselContent>
              {servicesData.map((service) => (
                <CarouselItem key={service.id}>
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>

      </div>
    </section>
  );
};
