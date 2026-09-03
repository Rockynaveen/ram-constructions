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
    sm: 'h-11 sm:h-12 w-auto',
    md: 'h-13 sm:h-14 lg:h-15 max-h-[62px] w-auto',
    lg: 'h-18 h-[72px] w-auto',
    xl: 'h-24 sm:h-28 w-auto'
  };

  const currentSize = sizeMap[size];

  if (theme === 'dark') {
    return (
      <div className={`inline-flex items-center p-0 m-0 select-none ${className}`}>
        <img
          src="/images/final.png"
          alt="RAM Construction"
          className={`${currentSize} max-w-none object-contain p-0 m-0 block brightness-0 invert transition-transform duration-300 group-hover:scale-[1.02]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center p-0 m-0 select-none ${className}`}>
      <img
        src="/images/final.png"
        alt="RAM Construction"
        className={`${currentSize} max-w-none object-contain p-0 m-0 block transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </div>
  );
};
