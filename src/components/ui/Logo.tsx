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
    sm: 'h-10 sm:h-12 w-auto min-w-[110px]',
    md: 'h-14 sm:h-16 lg:h-18 w-auto min-w-[150px] sm:min-w-[180px]',
    lg: 'h-18 sm:h-22 lg:h-24 w-auto min-w-[200px] sm:min-w-[240px]',
    xl: 'h-24 sm:h-32 w-auto min-w-[260px]'
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
