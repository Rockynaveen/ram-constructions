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
  variant = 'full',
  theme = 'light'
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', textRam: 'text-base', textConst: 'text-[7.5px] tracking-[0.24em]' },
    md: { icon: 'w-10 h-10', textRam: 'text-xl', textConst: 'text-[9px] tracking-[0.28em]' },
    lg: { icon: 'w-14 h-14', textRam: 'text-2xl', textConst: 'text-[11px] tracking-[0.3em]' },
    xl: { icon: 'w-20 h-20', textRam: 'text-4xl', textConst: 'text-sm tracking-[0.35em]' }
  };

  const currentSize = sizeMap[size];

  const ramColor = theme === 'dark' ? 'text-white' : 'text-[#0B2545]';
  const tagColor = theme === 'dark' ? 'text-slate-400' : 'text-[#0284C7]';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric SVG matching the official RAM Construction emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.icon} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        {/* Left Building (Sky Blue) */}
        <path
          d="M20 40L38 28V76H20V40Z"
          fill="#0EA5E9"
        />
        {/* Left Building Shadow Facet */}
        <path
          d="M20 40L28 35V76H20V40Z"
          fill="#0284C7"
        />

        {/* Center Tall Building (Deep Navy / Royal Blue) */}
        <path
          d="M40 18L58 6V76H40V18Z"
          fill="#0B2545"
        />
        {/* Center Building Highlight Facet */}
        <path
          d="M58 6L68 15V76H58V6Z"
          fill="#0369A1"
        />
        {/* Center Building Cutout Trim */}
        <path
          d="M48 20L58 13V76H48V20Z"
          fill="#1E3E62"
        />

        {/* Right Building (Cyan Sky Blue) */}
        <path
          d="M60 38L78 26V76H60V38Z"
          fill="#38BDF8"
        />
        {/* Right Building Side Facet */}
        <path
          d="M70 31L78 26V76H70V31Z"
          fill="#0284C7"
        />

        {/* Bottom Gable / House Arch Silhouette */}
        <path
          d="M34 76L50 68L66 76"
          stroke="#0284C7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4-Pane Modern Window Grid */}
        <rect x="46" y="73" width="3.5" height="3.5" rx="0.5" fill="#0284C7" />
        <rect x="51.5" y="73" width="3.5" height="3.5" rx="0.5" fill="#0284C7" />
        <rect x="46" y="78.5" width="3.5" height="3.5" rx="0.5" fill="#0284C7" />
        <rect x="51.5" y="78.5" width="3.5" height="3.5" rx="0.5" fill="#0284C7" />
      </svg>

      {variant !== 'icon-only' && (
        <div className="flex flex-col">
          <span className={`font-sans font-black leading-none uppercase ${currentSize.textRam}`}>
            <span className={ramColor}>RAM </span>
            <span className="text-[#0284C7]">CONSTRUCTIONS</span>
          </span>
          <span className={`font-mono font-bold uppercase ${tagColor} ${currentSize.textConst} mt-1`}>
            Architecture • Engineering • Craft
          </span>
        </div>
      )}
    </div>
  );
};
