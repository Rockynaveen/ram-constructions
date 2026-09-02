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
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 font-semibold cursor-pointer relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed rounded-sm";

  const sizeStyles = {
    sm: "text-xs px-4 py-2.5 gap-2",
    md: "text-sm px-6 py-3.5 gap-2.5",
    lg: "text-base px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary: "bg-[#0284C7] hover:bg-[#0EA5E9] text-white active:scale-[0.99] shadow-md shadow-[#0284C7]/25 font-bold border border-[#38BDF8]/40 hover:shadow-[#0EA5E9]/40",
    secondary: "bg-[#0F1C31] text-[#F0F9FF] hover:bg-[#152642] border border-[#0EA5E9]/25 hover:border-[#0EA5E9]/60 active:scale-[0.99]",
    outline: "bg-transparent text-[#38BDF8] border border-[#0EA5E9]/50 hover:border-[#38BDF8] hover:text-white hover:bg-[#0EA5E9]/15 active:scale-[0.99]",
    ghost: "bg-transparent text-[#E2E8F0] hover:text-[#38BDF8] p-0 hover:bg-transparent tracking-widest uppercase text-xs",
    bronze: "bg-[#0A1322] text-[#38BDF8] border border-[#0EA5E9]/30 hover:border-[#38BDF8] hover:bg-[#0EA5E9]/10",
    navy: "bg-[#0B2545] text-white hover:bg-[#134B70] border border-[#0EA5E9]/30"
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
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
        {icon === 'arrow-up-right' && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </button>
  );
};
