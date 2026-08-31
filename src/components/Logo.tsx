import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'header';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandIcon: React.FC<{ className?: string; size?: number; alt?: string }> = ({
  className = '',
  size = 48,
  alt = 'Símbolo Convênio Médico Particular'
}) => {
  return (
    <img
      src="/logo-icon.png"
      alt={alt}
      width={size}
      height={size}
      className={`object-contain rounded-lg shrink-0 ${className}`}
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
      sm: 36,
      md: 48,
      lg: 60,
      xl: 72,
    };
    return <BrandIcon size={iconSizes[size]} className={className} />;
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="bg-white p-1.5 rounded-xl shadow-md border border-white/50 shrink-0 flex items-center justify-center">
          <BrandIcon size={50} />
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

