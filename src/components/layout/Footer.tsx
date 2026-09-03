import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../store/useStore';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  return (
    <footer className="bg-[#001738] border-t border-[#0072CE]/30 text-slate-300 font-sans relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />

      {/* Main Footer Links & Information */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              to="/" 
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.replaceState(null, '', '/#home');
                }
              }}
              className="inline-block group cursor-pointer"
              aria-label="RAM Constructions Home"
            >
              <Logo size="lg" theme="dark" />
            </Link>

            <p className="text-xs sm:text-sm font-normal text-slate-300 max-w-sm leading-relaxed">
              RAM Constructions is an engineering-driven architecture and modern turnkey home construction firm. We merge visionary structural engineering with in-house master construction craftsmanship.
            </p>

            <div className="pt-1 text-xs font-sans text-[#38BDF8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>COA Registered & ISO 9001:2015 Certified Practice</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#38BDF8] font-bold mb-3.5">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <button 
                  onClick={() => openConsultationModal('Residential Villas')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Residential Villas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openConsultationModal('Commercial Studios')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Commercial Studios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openConsultationModal('Architecture & 3D BIM')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Architecture & 3D BIM
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openConsultationModal('Bespoke Interiors')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Bespoke Interiors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openConsultationModal('Historic Restorations')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Historic Restorations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openConsultationModal('Turnkey Execution')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Turnkey Execution
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Offices */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#38BDF8] font-bold mb-3.5">
              Offices & Studio
            </h4>
            <div className="space-y-3.5 text-xs font-light text-slate-300">
              <div>
                <strong className="text-white block font-sans text-[11px] uppercase mb-0.5 font-bold">Hyderabad Head Office</strong>
                <p>Road No. 36, Jubilee Hills, Hyderabad 500033</p>
                <p className="font-sans text-slate-200 mt-0.5">+91 40 6899 4400</p>
              </div>

              <div>
                <strong className="text-white block font-sans text-[11px] uppercase mb-0.5 font-bold">Bengaluru Office</strong>
                <p>Lavelle Road, Shanthala Nagar, Bengaluru 560001</p>
                <p className="font-sans text-slate-200 mt-0.5">+91 80 4912 8800</p>
              </div>

              <div>
                <strong className="text-white block font-sans text-[11px] uppercase mb-0.5 font-bold">Client Inquiries</strong>
                <a href="mailto:info@ramconstructions.in" className="text-[#38BDF8] hover:underline font-sans">
                  info@ramconstructions.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip with Center Designed by Sunseaz */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400 font-sans text-center md:text-left">
          <p>© {new Date().getFullYear()} RAM CONSTRUCTIONS Pvt. Ltd. All rights reserved.</p>

          <p className="text-slate-300">
            Designed by{' '}
            <span
              onClick={() => window.open('https://www.sunseaz.com/', '_blank', 'noopener,noreferrer')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open('https://www.sunseaz.com/', '_blank', 'noopener,noreferrer');
                }
              }}
              className="text-[#38BDF8] hover:text-white transition-colors font-semibold underline underline-offset-4 decoration-[#38BDF8]/60 hover:decoration-white cursor-pointer select-none"
            >
              sunseaz
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="text-slate-400">Privacy Policy</span>
            <span className="text-slate-400">Terms of Engagement</span>
            <span className="text-[#38BDF8]">Architecture • Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
