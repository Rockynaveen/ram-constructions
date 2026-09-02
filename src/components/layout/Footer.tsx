import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../store/useStore';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openConsultationModal } = useAppStore();

  return (
    <footer className="bg-[#0B2545] border-t border-[#133E70] text-slate-300 font-sans relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="relative border-b border-white/10 py-12 sm:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ram-skyline-estate.jpg"
            alt="Luxury Residence Architecture"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';
            }}
          />
          {/* Deeper transparent black overlay */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 w-full pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[2px] bg-[#38BDF8]" />
                <span className="text-xs tracking-[0.25em] text-[#38BDF8] uppercase font-bold">
                  Start Your Build
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-md">
                Have a residence or landmark in mind? <span className="text-[#38BDF8]">Let’s talk.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base font-normal text-slate-200 max-w-xl leading-relaxed drop-shadow-sm">
                We accept a limited number of premium residential and commercial commissions each year to ensure rigorous executive oversight on every square foot.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <Button
                variant="primary"
                size="md"
                icon="arrow-right"
                onClick={() => openConsultationModal()}
              >
                Schedule Private Consultation
              </Button>
              <Link to="/#projects">
                <Button variant="secondary" size="md" icon="arrow-up-right">
                  View Selected Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <Logo size="lg" theme="dark" />
            </Link>

            <p className="text-xs sm:text-sm font-normal text-slate-300 max-w-sm leading-relaxed">
              RAM Constructions is an engineering-driven architecture and modern turnkey home construction firm. We merge visionary structural engineering with in-house master construction craftsmanship.
            </p>

            <div className="pt-1 text-xs font-mono text-[#38BDF8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>COA Registered & ISO 9001:2015 Certified Practice</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#38BDF8] font-bold mb-3">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <Link to="/services/residential-construction" className="hover:text-white transition-colors">Residential Villas</Link>
              </li>
              <li>
                <Link to="/services/commercial-construction" className="hover:text-white transition-colors">Commercial Studios</Link>
              </li>
              <li>
                <Link to="/services/architecture-and-structural-design" className="hover:text-white transition-colors">Architecture & 3D BIM</Link>
              </li>
              <li>
                <Link to="/services/interior-architecture-and-design" className="hover:text-white transition-colors">Bespoke Interiors</Link>
              </li>
              <li>
                <Link to="/services/renovation-and-restoration" className="hover:text-white transition-colors">Historic Restorations</Link>
              </li>
              <li>
                <Link to="/services/turnkey-project-management" className="hover:text-white transition-colors">Turnkey Execution</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Offices */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#38BDF8] font-bold mb-3">
              Offices & Studio
            </h4>
            <div className="space-y-3 text-xs font-light text-slate-300">
              <div>
                <strong className="text-white block font-mono text-[11px] uppercase mb-0.5">Hyderabad Head Office</strong>
                <p>Road No. 36, Jubilee Hills, Hyderabad 500033</p>
                <p className="font-mono text-slate-200 mt-0.5">+91 40 6899 4400</p>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] uppercase mb-0.5">Bengaluru Office</strong>
                <p>Lavelle Road, Shanthala Nagar, Bengaluru 560001</p>
                <p className="font-mono text-slate-200 mt-0.5">+91 80 4912 8800</p>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] uppercase mb-0.5">Client Inquiries</strong>
                <a href="mailto:info@ramconstructions.in" className="text-[#38BDF8] hover:underline font-mono">
                  info@ramconstructions.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} RAM CONSTRUCTIONS Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms of Engagement</Link>
            <span className="text-[#38BDF8]">Architecture • Engineering • Craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
