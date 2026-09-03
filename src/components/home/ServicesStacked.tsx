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
    <section className="py-10 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shadcn UI Interactive 3D Card Carousel Wrapper */}
        <Carousel className="w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Our Services"
              title="Core"
              titleHighlight="Disciplines."
              description="Comprehensive architecture, engineering, and turnkey construction services delivered with single-point accountability."
            />

            {/* No external navigation link - all services accessible in interactive carousel */}
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
