import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/useStore';
import { Logo } from '../ui/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openConsultationModal, toggleMobileMenu, isMobileMenuOpen } = useAppStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/#home', targetId: 'home' },
    { name: 'ABOUT', path: '/#about', targetId: 'about' },
    { name: 'SERVICES', path: '/#services', targetId: 'services' },
    { name: 'PROJECTS', path: '/#projects', targetId: 'projects' },
    { name: 'CONTACT', path: '/#contact', targetId: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, targetId?: string) => {
    if (targetId && location.pathname === '/') {
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-18 h-[72px] flex items-center ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_30px_rgba(0,34,77,0.06)]'
        : 'bg-white/75 backdrop-blur-md'
        }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-full">
        {/* Brand Logo with zero extra padding */}
        <Link to="/" className="flex items-center group p-0 m-0 transition-transform hover:scale-[1.01]">
          <Logo size="md" theme="light" />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = link.path === '/#home' || link.path === '/'
              ? location.pathname === '/' && (!location.hash || location.hash === '#home')
              : location.hash === `#${link.targetId}`;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-[12px] font-sans tracking-[0.16em] uppercase transition-all duration-200 relative py-1 font-semibold ${isActive ? 'text-[#002D62] font-bold' : 'text-slate-600 hover:text-[#0072CE]'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#002D62] to-[#0072CE] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Compact Height) */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => openConsultationModal()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00224D] via-[#002D62] to-[#0072CE] hover:brightness-110 text-white text-[11px] font-sans font-bold tracking-[0.14em] uppercase px-5 py-2 rounded-lg transition-all duration-300 shadow-sm shadow-[#00224D]/20 hover:shadow-md hover:shadow-[#0072CE]/25 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => openConsultationModal()}
            className="text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#00224D] to-[#0072CE] text-white px-3.5 py-2 rounded-lg shadow-sm"
          >
            Inquire
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-slate-700 hover:text-[#0072CE] bg-slate-100 hover:bg-slate-200 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
