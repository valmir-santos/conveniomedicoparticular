import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'header';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandIcon: React.FC<{ className?: string; size?: number; alt?: string }> = ({
  className = '',
  size = 40,
  alt = 'Logo Convênio Médico Particular'
}) => {
  return (
    <img
      src="/logo.jpg"
      alt={alt}
      width={size}
      height={size}
      className={`object-contain rounded-md shrink-0 bg-white ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  if (variant === 'icon') {
    const iconSizes = {
      sm: 28,
      md: 38,
      lg: 48,
      xl: 64,
    };
    return <BrandIcon size={iconSizes[size]} className={className} />;
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="bg-white p-1 rounded-xl shadow-xs border border-white/40 shrink-0">
          <BrandIcon size={40} />
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

  // Full stacked logo
  const imgSizes = {
    sm: 120,
    md: 160,
    lg: 200,
    xl: 240,
  };

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <img
        src="/logo.jpg"
        alt="Convênio Médico Particular"
        className="rounded-xl shadow-xs max-w-full h-auto object-contain bg-white p-2 border border-gray-200"
        style={{ width: `${imgSizes[size]}px` }}
      />
    </div>
  );
};

