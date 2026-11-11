import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-9 sm:h-11 w-auto", onClick }) => {
  return (
    <svg
      viewBox="0 0 1024 559"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* KNR Text */}
      <text
        x="256"
        y="320"
        fontSize="280"
        fontWeight="bold"
        fill="#001F3F"
        fontFamily="Arial, sans-serif"
        letterSpacing="-10"
      >
        KNR
      </text>

      {/* Orange Wave/Swoosh */}
      <path
        d="M 220 280 Q 350 200, 520 240 T 760 260"
        stroke="#FF9500"
        strokeWidth="60"
        fill="none"
        strokeLinecap="round"
      />

      {/* Water Drop */}
      <circle cx="780" cy="160" r="35" fill="#FF9500" />
      <path
        d="M 780 160 Q 765 200, 760 240"
        stroke="#001F3F"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* ENTERPRISES Text */}
      <text
        x="256"
        y="420"
        fontSize="80"
        fontWeight="600"
        fill="#001F3F"
        fontFamily="Arial, sans-serif"
        letterSpacing="8"
      >
        ENTERPRISES
      </text>
    </svg>
  );
};
