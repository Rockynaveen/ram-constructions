import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only';
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light'
}) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9 w-auto min-w-[90px]',
    md: 'h-11 sm:h-13 lg:h-14 w-auto min-w-[130px] sm:min-w-[160px]',
    lg: 'h-16 sm:h-18 lg:h-20 w-auto min-w-[180px] sm:min-w-[220px]',
    xl: 'h-22 sm:h-28 w-auto min-w-[240px]'
  };

  const currentSize = sizeMap[size];

  if (theme === 'dark') {
    return (
      <div className={`inline-flex items-center bg-white rounded-lg p-1.5 shadow-md border border-white/20 select-none transition-transform duration-300 group-hover:scale-105 ${className}`}>
        <img
          src="/images/logo.png"
          alt="RAM Construction"
          className={`${currentSize} max-w-none object-contain p-0 m-0 block`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center p-0 m-0 select-none ${className}`}>
      <img
        src="/images/logo.png"
        alt="RAM Construction"
        className={`${currentSize} max-w-none object-contain p-0 m-0 block transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
};
