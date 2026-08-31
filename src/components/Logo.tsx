import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'header';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 36 }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandIconBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="brandIconNavyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B2038" />
          <stop offset="50%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="brandIconLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      
      {/* Outer Glow / Soft Base */}
      <g transform="translate(6, 6) scale(0.9)">
        {/* Loop 1 - Top Cerulean/Cobalt */}
        <path
          d="M64 12 C82 12, 108 30, 114 46 C119 59, 115 76, 102 90 C88 105, 68 116, 52 116 C34 116, 12 96, 12 76 C12 60, 22 46, 36 34 L48 48 C40 56, 34 66, 34 76 C34 86, 46 96, 56 96 C68 96, 82 86, 90 76 C98 66, 96 56, 90 48 C82 38, 68 32, 56 32 Z"
          fill="url(#brandIconBlueGrad)"
        />

        {/* Loop 2 - Bottom Navy */}
        <path
          d="M64 116 C46 116, 20 98, 14 82 C9 69, 13 52, 26 38 C40 23, 60 12, 76 12 C94 12, 116 32, 116 52 C116 68, 106 82, 92 94 L80 80 C88 72, 94 62, 94 52 C94 42, 82 32, 72 32 C60 32, 46 42, 38 52 C30 62, 32 72, 38 80 C46 90, 60 96, 72 96 Z"
          fill="url(#brandIconNavyGrad)"
        />

        {/* Center Organic Health Leaf */}
        <path
          d="M64 36 C76 48, 80 66, 68 84 C56 72, 52 54, 64 36 Z"
          fill="url(#brandIconLeafGrad)"
        />
        <path
          d="M64 42 Q66 60 62 78"
          stroke="#1E3A8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    const iconSizes = {
      sm: 28,
      md: 36,
      lg: 48,
      xl: 64,
    };
    return <BrandIcon size={iconSizes[size]} className={className} />;
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="bg-white/10 p-1.5 rounded-xl border border-white/20 shadow-sm backdrop-blur-xs">
          <BrandIcon size={34} />
        </div>
        <div className="flex flex-col">
          <span className="serif font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
            Convênio Médico Particular
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#F59E0B] uppercase tracking-widest leading-none mt-0.5">
            Corretora Autorizada
          </span>
        </div>
      </div>
    );
  }

  // Full stacked logo (like the provided image)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <BrandIcon size={size === 'xl' ? 84 : size === 'lg' ? 68 : 52} />
      <div className="mt-3">
        <h2 className={`font-sans font-black text-lg sm:text-xl tracking-wider leading-none ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
          CONVÊNIO MÉDICO
        </h2>
        <span className={`block font-sans text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          PARTICULAR
        </span>
      </div>
    </div>
  );
};
