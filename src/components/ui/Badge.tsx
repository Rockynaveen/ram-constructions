import React from 'react';
import { cn } from '../../utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'sky' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-gradient-to-r from-[#002D62] to-[#0072CE] text-white',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
    outline: 'border border-[#0072CE]/30 text-[#002D62] bg-white',
    sky: 'bg-sky-50 text-[#0072CE] border border-sky-200/80',
    accent: 'bg-gradient-to-r from-[#0072CE] to-[#38BDF8] text-white shadow-sm shadow-sky-500/20',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};
