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

  const eyebrowColor = theme === 'dark' ? 'text-[#38BDF8]' : 'text-[#0284C7]';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#0B2545]';
  const descColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={cn("flex flex-col max-w-3xl", alignStyles, className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-6 h-[2px] bg-[#0284C7]" />
          <span className={cn("text-[11px] font-mono font-bold tracking-[0.25em] uppercase", eyebrowColor)}>
            {eyebrow}
          </span>
          {isCenter && <span className="w-6 h-[2px] bg-[#0284C7]" />}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.18] tracking-tight",
          titleColor
        )}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="font-bold text-[#0284C7]">
            {titleHighlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn("mt-4 text-base sm:text-lg font-normal leading-relaxed max-w-2xl", descColor)}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
