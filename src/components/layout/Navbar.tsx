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
      if (window.scrollY > 20) {
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
    { name: 'PROCESS', path: '/#process', targetId: 'process' },
    { name: 'BLOG', path: '/#insights', targetId: 'insights' },
    { name: 'CONTACT', path: '/contact' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-0.5 sm:py-1 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm py-1 sm:py-1.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with exact official iconography */}
        <Link to="/" className="flex items-center group -ml-2 sm:-ml-4 lg:-ml-6">
          <Logo size="md" theme="light" />
        </Link>

        {/* Center / Right Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => {
            const isActive = link.path === '/#home' || link.path === '/'
              ? location.pathname === '/' && (!location.hash || location.hash === '#home')
              : location.pathname.startsWith(link.path.replace('/#', '/')) || location.hash === `#${link.targetId}`;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-[12px] font-sans tracking-[0.14em] uppercase transition-colors relative py-1 font-semibold ${
                  isActive ? 'text-[#0B2545]' : 'text-slate-600 hover:text-[#0B2545]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0B2545] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => openConsultationModal()}
            className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#133E70] text-white text-[12px] font-sans font-bold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm transition-all duration-200 shadow-md shadow-slate-900/10 cursor-pointer group"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => openConsultationModal()}
            className="text-[11px] font-bold tracking-wider uppercase bg-[#0B2545] text-white px-3.5 py-2 rounded-sm"
          >
            Inquire
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-slate-700 hover:text-[#0B2545] bg-slate-100 hover:bg-slate-200 rounded-sm focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
