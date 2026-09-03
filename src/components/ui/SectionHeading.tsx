import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const isCenter = align === 'center';
  const isRight = align === 'right';

  const alignStyles = isCenter 
    ? 'text-center items-center mx-auto' 
    : isRight 
    ? 'text-right items-end ml-auto' 
    : 'text-left items-start';

  const eyebrowColor = theme === 'dark' ? 'text-[#38BDF8]' : 'text-[#0072CE]';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#001738]';
  const descColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={cn("flex flex-col max-w-3xl", alignStyles, className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#00224D]/5 border border-[#0072CE]/20 mb-3.5 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0072CE] animate-pulse" />
          <span className={cn("text-[11px] font-sans font-bold tracking-[0.22em] uppercase", eyebrowColor)}>
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className={cn(
          "font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.14] tracking-tight",
          titleColor
        )}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="font-sans font-bold bg-gradient-to-r from-[#001738] via-[#0072CE] to-[#38BDF8] bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className={cn("mt-4 text-sm sm:text-base font-normal leading-relaxed max-w-2xl", descColor)}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
