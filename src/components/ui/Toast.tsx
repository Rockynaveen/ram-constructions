import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store/useStore';
import { CheckCircle2, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useAppStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3.5 bg-[#15181F] border border-[#C5A880]/30 text-[#F9F8F5] px-5 py-4 shadow-2xl rounded-sm max-w-md"
        >
          <div className="w-8 h-8 rounded-full bg-[#C5A880]/15 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
          </div>
          <p className="text-sm font-light text-[#EAE8E3] leading-snug flex-1">
            {toastMessage}
          </p>
          <button
            onClick={clearToast}
            className="text-stone-400 hover:text-white transition-colors p-1"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
