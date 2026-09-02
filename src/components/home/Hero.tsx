import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../store/useStore';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-site.jpg',
    title: 'Precision Civil & Structural Engineering',
    alt: 'RAM Constructions Active Commercial Development Site'
  },
  {
    id: 2,
    image: '/images/hero-site-2.jpg',
    title: 'Large-Scale Institutional & Landmark Infrastructure',
    alt: 'RAM Constructions Dual Towers Concrete Infrastructure with Cranes'
  },
  {
    id: 3,
    image: '/images/hero-site-3.jpg',
    title: 'Master Engineers & On-Site Quality Leadership',
    alt: 'RAM Constructions Site Engineers & Project Leadership on Active High-Rise Site'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openConsultationModal } = useAppStore();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pb-10 overflow-hidden bg-slate-950">
      {/* Background Hero Carousel Images with Cinematic Overlapping Ken-Burns Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.06 : 1.0,
                x: isActive ? '0%' : '2%'
              }}
              transition={{
                opacity: { duration: 1.2, ease: 'easeInOut' },
                scale: { duration: 4.5, ease: 'easeOut' },
                x: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          );
        })}

        {/* Lite transparent black overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        {/* Soft directional gradient for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent w-full lg:w-[65%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Direct Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 space-y-6 lg:space-y-8"
          >
            {/* Top Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-sans font-bold tracking-[0.22em] text-[#38BDF8] uppercase drop-shadow">
                BUILT ON TRUST. DRIVEN BY DESIGN.
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-md">
                Building More Than <br />
                Structures – <br />
                <span className="text-[#38BDF8]">Building Better Lives.</span>
              </h1>
              <div className="w-12 h-[3px] bg-[#38BDF8] rounded-full my-5" />
            </div>

            {/* Paragraph */}
            <p className="text-base sm:text-lg font-medium text-slate-100 max-w-xl leading-relaxed drop-shadow">
              We partner with you at every step to bring your dream space to life with clarity, precision engineering and turnkey master craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Button */}
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-sky-950/40 cursor-pointer group"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Button */}
              <Link to="/#projects">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/50 hover:border-white text-xs sm:text-[13px] font-sans font-bold tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm transition-all duration-200 cursor-pointer shadow-sm"
                >
                  EXPLORE OUR WORK
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Hero Carousel Navigation Controls & Indicators */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full flex items-center justify-between pt-4">
        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlide === idx
                  ? 'w-10 bg-[#38BDF8] shadow-lg shadow-sky-400/50'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="text-xs font-mono text-slate-300 ml-2 font-bold tracking-wider">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 hover:border-white/50 flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 hover:border-white/50 flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
