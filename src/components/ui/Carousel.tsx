import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils';

interface CarouselContextProps {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  activeIndex: number;
  totalItems: number;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    return {
      scrollPrev: () => {},
      scrollNext: () => {},
      canScrollPrev: false,
      canScrollNext: false,
      containerRef: { current: null },
      activeIndex: 0,
      totalItems: 0,
    };
  }
  return context;
};

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const updateScrollState = () => {
      const el = containerRef.current;
      if (!el) return;

      const { scrollLeft, children: childNodes } = el;
      setCanScrollPrev(true);
      setCanScrollNext(true);
      setTotalItems(childNodes.length);

      if (childNodes.length > 0 && childNodes[0] instanceof HTMLElement) {
        const itemWidth = childNodes[0].getBoundingClientRect().width + 24; // item width + gap
        const index = Math.round(scrollLeft / itemWidth);
        setActiveIndex(Math.max(0, Math.min(index, childNodes.length - 1)));
      }
    };

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      updateScrollState();
      el.addEventListener('scroll', updateScrollState, { passive: true });
      window.addEventListener('resize', updateScrollState);

      return () => {
        el.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }, []);

    const scrollPrev = () => {
      const el = containerRef.current;
      if (!el) return;
      if (el.scrollLeft <= 5) {
        el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
      } else {
        const scrollAmount = el.clientWidth * 0.75;
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };

    const scrollNext = () => {
      const el = containerRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const scrollAmount = el.clientWidth * 0.75;
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <CarouselContext.Provider
        value={{
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          containerRef,
          activeIndex,
          totalItems,
        }}
      >
        <div
          ref={ref}
          className={cn("relative w-full group/carousel", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { containerRef } = useCarousel();

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className={cn(
        "flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "snap-start shrink-0 w-[88%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        scrollPrev();
      }}
      aria-label="Previous slide"
      className={cn(
        "hidden sm:flex absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-800 hover:text-white hover:bg-[#0072CE] hover:border-[#0072CE] shadow-xl shadow-slate-900/15 transition-all duration-200 items-center justify-center cursor-pointer active:scale-95 pointer-events-auto",
        className
      )}
      {...props}
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        scrollNext();
      }}
      aria-label="Next slide"
      className={cn(
        "hidden sm:flex absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-800 hover:text-white hover:bg-[#0072CE] hover:border-[#0072CE] shadow-xl shadow-slate-900/15 transition-all duration-200 items-center justify-center cursor-pointer active:scale-95 pointer-events-auto",
        className
      )}
      {...props}
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';
