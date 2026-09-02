import React from 'react';
import { Link } from 'react-router-dom';
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
import { ArrowUpRight } from 'lucide-react';

export const ServicesStacked: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] relative border-t border-slate-200">
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

            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#0284C7] uppercase hover:text-[#0B2545] transition-colors group font-bold"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
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
