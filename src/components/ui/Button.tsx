import React from 'react';
import { cn } from '../../utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'bronze' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'none',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-[0.14em] uppercase font-bold transition-all duration-300 cursor-pointer relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed rounded-lg active:scale-[0.99]";

  const sizeStyles = {
    sm: "text-[11px] px-4 py-2 gap-2",
    md: "text-[12px] px-5 py-2.5 gap-2.5",
    lg: "text-[13px] px-7 py-3.5 gap-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#001738] via-[#00224D] to-[#0072CE] hover:brightness-110 text-white shadow-sm shadow-[#001738]/25 hover:shadow-md hover:shadow-[#0072CE]/30 hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-white/10 hover:bg-white/18 backdrop-blur-md text-white border border-white/30 hover:border-white/60 shadow-sm hover:-translate-y-0.5",
    outline: "bg-white hover:bg-slate-50 text-[#001738] border border-slate-300 hover:border-[#0072CE] shadow-xs hover:-translate-y-0.5",
    ghost: "bg-transparent text-slate-700 hover:text-[#0072CE] p-0 tracking-[0.14em] uppercase text-[11px]",
    bronze: "bg-[#010B18] text-[#38BDF8] border border-[#0072CE]/30 hover:border-[#38BDF8] hover:bg-[#0072CE]/10",
    navy: "bg-[#00224D] text-white hover:bg-[#001738] border border-[#0072CE]/30 shadow-sm"
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon === 'arrow-right' && (
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
        {icon === 'arrow-up-right' && (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </button>
  );
};
