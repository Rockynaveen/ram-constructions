import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store/useStore';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu, openConsultationModal } = useAppStore();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/#home', targetId: 'home', subtitle: 'Overview & signature works' },
    { name: 'About', path: '/#about', targetId: 'about', subtitle: 'Philosophy, master builders & lineage' },
    { name: 'Services', path: '/#services', targetId: 'services', subtitle: 'Architecture, engineering & turnkey craft' },
    { name: 'Projects', path: '/#projects', targetId: 'projects', subtitle: 'Selected residential & commercial portfolio' },
    { name: 'Contact', path: '/#contact', targetId: 'contact', subtitle: 'Direct inquiry & studio locations' },
  ];

  const handleMobileNavClick = (targetId?: string) => {
    closeMobileMenu();
    if (targetId && location.pathname === '/') {
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `#${targetId}`);
        }, 100);
      }
    }
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <Logo size="md" theme="light" />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-slate-600 hover:text-[#0284C7] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-sm cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="my-6 space-y-3">
            {links.map((link, index) => {
              const isActive = link.path === '/#home' || link.path === '/'
                ? location.pathname === '/' && (!location.hash || location.hash === '#home')
                : location.pathname.startsWith(link.path.replace('/#', '/')) || location.hash === `#${link.targetId}`;

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => handleMobileNavClick(link.targetId)}
                    className="block group py-1.5 border-b border-slate-100 pb-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-serif text-xl transition-colors ${
                        isActive ? 'text-[#0284C7] font-semibold' : 'text-[#0B2545] group-hover:text-[#0284C7]'
                      }`}>
                        {link.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all" />
                    </div>
                    <span className="text-[11px] font-normal text-slate-500 block mt-0.5">
                      {link.subtitle}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Actions & Contacts */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <Button
              variant="primary"
              size="md"
              icon="arrow-right"
              onClick={() => {
                closeMobileMenu();
                openConsultationModal();
              }}
              className="w-full"
            >
              Start Your Project
            </Button>

            <div className="grid grid-cols-1 gap-2 pt-2 text-xs font-mono text-slate-600">
              <a href="tel:+914068994400" className="flex items-center gap-2 hover:text-[#0284C7]">
                <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>+91 40 6899 4400</span>
              </a>
              <a href="mailto:info@ramconstructions.in" className="flex items-center gap-2 hover:text-[#0284C7]">
                <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>info@ramconstructions.in</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Road 36, Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
