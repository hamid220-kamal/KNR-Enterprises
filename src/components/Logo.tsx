import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-9 w-auto",
  variant = 'dark',
  showTagline = false,
  onClick,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0F172A';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none ${onClick ? 'cursor-pointer' : ''}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Precision Stylized Geometric Orange Chevron Icon */}
      <svg
        viewBox="0 0 48 40"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="knr-orange-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="knr-orange-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
        </defs>

        {/* Outer dynamic angled chevron ribbon */}
        <path
          d="M6 34 L18 8 L26 8 L14 34 Z"
          fill="url(#knr-orange-1)"
        />
        {/* Right angled chevron arrow (chevron pointing up-right) */}
        <path
          d="M22 34 L32 20 L44 8 L36 8 L25 18 L16 34 Z"
          fill="url(#knr-orange-2)"
        />
        <path
          d="M32 20 L44 34 L36 34 L26 23 Z"
          fill="url(#knr-orange-1)"
        />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            style={{ color: textColor }}
            className="text-base sm:text-lg font-black tracking-wider uppercase font-sans"
          >
            KNR
          </span>
          <span
            style={{ color: textColor }}
            className="text-[11px] sm:text-xs font-bold tracking-widest uppercase font-sans opacity-95"
          >
            ENTERPRISES
          </span>
        </div>
        {showTagline && (
          <span
            style={{ color: subtextColor }}
            className="text-[10px] tracking-wide mt-0.5 font-medium"
          >
            Quality. Trust. Growth.
          </span>
        )}
      </div>
    </div>
  );
};
