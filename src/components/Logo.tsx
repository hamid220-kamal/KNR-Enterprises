import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-9 sm:h-11 w-auto", onClick }) => {
  return (
    <svg
      viewBox="0 0 800 300"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>{`
          .knr-text { font-family: Arial, sans-serif; font-weight: bold; font-size: 120px; fill: #001F3F; }
          .enterprises-text { font-family: Arial, sans-serif; font-weight: 600; font-size: 40px; fill: #001F3F; letter-spacing: 3px; }
        `}</style>
      </defs>
      
      {/* KNR Text */}
      <text x="20" y="100" className="knr-text">KNR</text>
      
      {/* Orange Swoosh/Wave */}
      <path
        d="M 180 80 Q 250 50 350 65 Q 450 80 520 95"
        stroke="#FF9500"
        strokeWidth="25"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Water Drop */}
      <circle cx="540" cy="50" r="20" fill="#FF9500" />
      <path
        d="M 540 70 L 535 95"
        stroke="#001F3F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* ENTERPRISES Text */}
      <text x="20" y="150" className="enterprises-text">ENTERPRISES</text>
    </svg>
  );
};
