import React from 'react';

export function BrideIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 350" className={className} width="160" height="280">
      <defs>
        <radialGradient id="brideGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a853" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sareeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d48a" />
          <stop offset="50%" stopColor="#d4a853" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
        <linearGradient id="sareeRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c0392b" />
          <stop offset="100%" stopColor="#922B21" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="175" rx="90" ry="160" fill="url(#brideGlow)" />
      {/* Saree */}
      <path d="M70 130 Q60 200 55 300 Q100 320 145 300 Q140 200 130 130 Z" fill="url(#sareeRed)" opacity="0.9" />
      <path d="M130 130 Q150 180 145 240 Q135 250 125 240 Q130 180 120 140 Z" fill="url(#sareeGold)" opacity="0.8" />
      <path d="M55 295 Q100 315 145 295 Q100 310 55 295" fill="#f0d48a" opacity="0.7" />
      {/* Blouse */}
      <path d="M78 100 Q100 95 122 100 L130 130 Q100 135 70 130 Z" fill="url(#sareeGold)" />
      {/* Neck */}
      <rect x="92" y="82" width="16" height="20" rx="8" fill="#D4A574" />
      {/* Head */}
      <ellipse cx="100" cy="65" rx="25" ry="28" fill="#D4A574" />
      {/* Hair */}
      <path d="M75 55 Q75 30 100 28 Q125 30 125 55 Q120 42 100 40 Q80 42 75 55Z" fill="#1a1a2e" />
      <circle cx="100" cy="30" r="12" fill="#1a1a2e" />
      {/* Flowers in hair */}
      <circle cx="88" cy="32" r="4" fill="#f0d48a" opacity="0.9" />
      <circle cx="100" cy="19" r="4" fill="#fff" opacity="0.8" />
      <circle cx="112" cy="32" r="4" fill="#f0d48a" opacity="0.9" />
      {/* Maang tikka */}
      <circle cx="100" cy="42" r="3" fill="#f0d48a" />
      <line x1="100" y1="30" x2="100" y2="42" stroke="#f0d48a" strokeWidth="1" />
      {/* Eyes */}
      <ellipse cx="91" cy="62" rx="3" ry="2" fill="#1a1a2e" />
      <ellipse cx="109" cy="62" rx="3" ry="2" fill="#1a1a2e" />
      {/* Smile */}
      <path d="M94 72 Q100 77 106 72" fill="none" stroke="#a0522d" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bindi */}
      <circle cx="100" cy="55" r="2.5" fill="#c0392b" />
      {/* Nose ring */}
      <circle cx="102" cy="67" r="1.5" fill="#f0d48a" />
      {/* Necklace */}
      <path d="M82 98 Q100 115 118 98" fill="none" stroke="#f0d48a" strokeWidth="2.5" />
      <circle cx="100" cy="112" r="4" fill="#c0392b" stroke="#f0d48a" strokeWidth="1" />
      {/* Earrings */}
      <path d="M75 65 L72 78 L78 78 Z" fill="#f0d48a" />
      <path d="M125 65 L122 78 L128 78 Z" fill="#f0d48a" />
      {/* Bangles */}
      <ellipse cx="62" cy="200" rx="6" ry="3" fill="none" stroke="#f0d48a" strokeWidth="2" />
      <ellipse cx="62" cy="206" rx="6" ry="3" fill="none" stroke="#c0392b" strokeWidth="2" />
      <ellipse cx="138" cy="200" rx="6" ry="3" fill="none" stroke="#f0d48a" strokeWidth="2" />
      <ellipse cx="138" cy="206" rx="6" ry="3" fill="none" stroke="#c0392b" strokeWidth="2" />
      {/* Arms */}
      <path d="M78 130 Q60 160 60 210" fill="none" stroke="#D4A574" strokeWidth="8" strokeLinecap="round" />
      <path d="M122 130 Q140 160 140 210" fill="none" stroke="#D4A574" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function GroomIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 350" className={className} width="160" height="280">
      <defs>
        <radialGradient id="groomGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a853" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="veshtiWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8ee" />
          <stop offset="100%" stopColor="#ede0cc" />
        </linearGradient>
        <linearGradient id="shirtSilk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d48a" />
          <stop offset="50%" stopColor="#d4a853" />
          <stop offset="100%" stopColor="#f0d48a" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="175" rx="90" ry="160" fill="url(#groomGlow)" />
      {/* Veshti */}
      <path d="M72 170 Q68 230 65 300 Q100 315 135 300 Q132 230 128 170 Z" fill="url(#veshtiWhite)" />
      <path d="M65 295 Q100 310 135 295" fill="none" stroke="#d4a853" strokeWidth="3" />
      <path d="M67 288 Q100 303 133 288" fill="none" stroke="#d4a853" strokeWidth="1" />
      <path d="M100 170 Q97 230 95 300" fill="none" stroke="#d4c9a8" strokeWidth="1" opacity="0.5" />
      {/* Shirt */}
      <path d="M75 100 Q100 92 125 100 L128 170 Q100 175 72 170 Z" fill="url(#shirtSilk)" />
      <line x1="100" y1="100" x2="100" y2="168" stroke="#b8860b" strokeWidth="1" opacity="0.4" />
      {/* Angavastram */}
      <path d="M75 105 Q60 130 55 170 Q50 175 55 175 Q62 140 80 110 Z" fill="#f0d48a" opacity="0.6" />
      {/* Neck + Head */}
      <rect x="92" y="82" width="16" height="20" rx="8" fill="#C89B6E" />
      <ellipse cx="100" cy="62" rx="25" ry="27" fill="#C89B6E" />
      {/* Hair */}
      <path d="M75 52 Q75 32 100 30 Q125 32 125 52 Q122 40 100 38 Q78 40 75 52Z" fill="#1a1a2e" />
      {/* Eyes */}
      <ellipse cx="91" cy="60" rx="3" ry="2" fill="#1a1a2e" />
      <ellipse cx="109" cy="60" rx="3" ry="2" fill="#1a1a2e" />
      {/* Eyebrows */}
      <path d="M86 55 Q91 53 96 55" fill="none" stroke="#1a1a2e" strokeWidth="1.5" />
      <path d="M104 55 Q109 53 114 55" fill="none" stroke="#1a1a2e" strokeWidth="1.5" />
      {/* Nose */}
      <path d="M100 60 Q98 68 100 68" fill="none" stroke="#a0825a" strokeWidth="1" />
      {/* Smile */}
      <path d="M93 73 Q100 78 107 73" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
      {/* Mustache */}
      <path d="M92 70 Q96 72 100 70 Q104 72 108 70" fill="none" stroke="#1a1a2e" strokeWidth="1.5" />
      {/* Tilak */}
      <path d="M97 48 L100 44 L103 48" fill="#c0392b" opacity="0.8" />
      {/* Turban */}
      <path d="M73 50 Q70 35 85 28 Q100 22 115 28 Q130 35 127 50 Q120 38 100 35 Q80 38 73 50Z" fill="#d4a853" />
      <path d="M80 35 Q100 25 120 35" fill="none" stroke="#b8860b" strokeWidth="2" />
      <circle cx="100" cy="32" r="4" fill="#c0392b" stroke="#f0d48a" strokeWidth="1" />
      <circle cx="100" cy="32" r="1.5" fill="#f0d48a" />
      <path d="M100 28 Q105 15 100 8 Q102 15 100 28" fill="#f0d48a" opacity="0.7" />
      {/* Earrings */}
      <circle cx="75" cy="65" r="2.5" fill="#f0d48a" />
      <circle cx="125" cy="65" r="2.5" fill="#f0d48a" />
      {/* Necklace */}
      <path d="M82 96 Q100 108 118 96" fill="none" stroke="#f0d48a" strokeWidth="2" />
      {/* Arms */}
      <path d="M75 108 Q58 140 58 200" fill="none" stroke="#C89B6E" strokeWidth="8" strokeLinecap="round" />
      <path d="M125 108 Q142 140 142 200" fill="none" stroke="#C89B6E" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function CoupleIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 350" className={className} width="320" height="280">
      <defs>
        <radialGradient id="coupleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a853" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="175" rx="180" ry="160" fill="url(#coupleGlow)" />
      {/* Groom */}
      <g transform="translate(30, 0)">
        <path d="M72 170 Q68 230 65 300 Q100 315 135 300 Q132 230 128 170 Z" fill="#fff8ee" />
        <path d="M65 295 Q100 310 135 295" fill="none" stroke="#d4a853" strokeWidth="3" />
        <path d="M75 100 Q100 92 125 100 L128 170 Q100 175 72 170 Z" fill="#d4a853" />
        <rect x="92" y="82" width="16" height="20" rx="8" fill="#C89B6E" />
        <ellipse cx="100" cy="62" rx="24" ry="26" fill="#C89B6E" />
        <path d="M76 52 Q76 32 100 30 Q124 32 124 52 Q120 40 100 38 Q80 40 76 52Z" fill="#1a1a2e" />
        <path d="M74 50 Q71 35 86 28 Q100 22 114 28 Q129 35 126 50 Q120 38 100 35 Q80 38 74 50Z" fill="#d4a853" />
        <circle cx="100" cy="32" r="4" fill="#c0392b" stroke="#f0d48a" strokeWidth="1" />
        <ellipse cx="91" cy="60" rx="2.5" ry="2" fill="#1a1a2e" />
        <ellipse cx="109" cy="60" rx="2.5" ry="2" fill="#1a1a2e" />
        <path d="M93 73 Q100 77 107 73" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M125 108 Q155 140 170 180" fill="none" stroke="#C89B6E" strokeWidth="8" strokeLinecap="round" />
        <path d="M75 108 Q58 140 58 200" fill="none" stroke="#C89B6E" strokeWidth="8" strokeLinecap="round" />
      </g>
      {/* Bride */}
      <g transform="translate(170, 0)">
        <path d="M70 130 Q60 200 55 300 Q100 320 145 300 Q140 200 130 130 Z" fill="#c0392b" opacity="0.9" />
        <path d="M130 130 Q150 180 145 240 Q135 250 125 240 Q130 180 120 140 Z" fill="#d4a853" opacity="0.8" />
        <path d="M55 295 Q100 315 145 295" fill="none" stroke="#f0d48a" strokeWidth="3" />
        <path d="M78 100 Q100 95 122 100 L130 130 Q100 135 70 130 Z" fill="#d4a853" />
        <rect x="92" y="82" width="16" height="20" rx="8" fill="#D4A574" />
        <ellipse cx="100" cy="65" rx="24" ry="27" fill="#D4A574" />
        <path d="M76 55 Q76 30 100 28 Q124 30 124 55 Q120 42 100 40 Q80 42 76 55Z" fill="#1a1a2e" />
        <circle cx="100" cy="30" r="12" fill="#1a1a2e" />
        <circle cx="88" cy="32" r="4" fill="#f0d48a" />
        <circle cx="112" cy="32" r="4" fill="#f0d48a" />
        <ellipse cx="91" cy="62" rx="2.5" ry="2" fill="#1a1a2e" />
        <ellipse cx="109" cy="62" rx="2.5" ry="2" fill="#1a1a2e" />
        <path d="M94 72 Q100 77 106 72" fill="none" stroke="#a0522d" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="55" r="2.5" fill="#c0392b" />
        <path d="M82 98 Q100 112 118 98" fill="none" stroke="#f0d48a" strokeWidth="2.5" />
        <path d="M70 130 Q40 160 30 180" fill="none" stroke="#D4A574" strokeWidth="8" strokeLinecap="round" />
        <path d="M122 130 Q140 160 140 210" fill="none" stroke="#D4A574" strokeWidth="8" strokeLinecap="round" />
      </g>
      {/* Hands together */}
      <ellipse cx="200" cy="182" rx="12" ry="8" fill="#D4A574" opacity="0.9" />
      {/* Garland */}
      <path d="M150 105 Q200 130 250 105" fill="none" stroke="#f0d48a" strokeWidth="2" strokeDasharray="4 4" />
      {/* Sparkles */}
      <circle cx="200" cy="90" r="3" fill="#f0d48a" opacity="0.7" />
      <circle cx="180" cy="75" r="2" fill="#f0d48a" opacity="0.5" />
      <circle cx="220" cy="75" r="2" fill="#f0d48a" opacity="0.5" />
      <circle cx="200" cy="60" r="1.5" fill="#fff" opacity="0.6" />
    </svg>
  );
}

export function MangalsutraIllustration({ className }) {
  return (
    <svg viewBox="0 0 300 350" className={className} width="250" height="280">
      <defs>
        <radialGradient id="mgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a853" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="150" cy="175" rx="120" ry="150" fill="url(#mgGlow)" />
      {/* Chain */}
      <path d="M80 60 Q75 80 85 120 Q100 180 150 200 Q200 180 215 120 Q225 80 220 60" fill="none" stroke="#f0d48a" strokeWidth="2.5" />
      {Array.from({ length: 20 }, (_, i) => {
        const t = i / 19;
        const x = 80 + t * 140;
        const y = 60 + Math.sin(t * Math.PI) * 140;
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#f0d48a" opacity="0.8" />;
      })}
      {/* Main pendant */}
      <circle cx="150" cy="205" r="18" fill="#c0392b" stroke="#f0d48a" strokeWidth="3" />
      <circle cx="150" cy="205" r="10" fill="#f0d48a" />
      <circle cx="150" cy="205" r="5" fill="#c0392b" />
      {/* Side pendants */}
      <circle cx="115" cy="170" r="8" fill="#f0d48a" stroke="#b8860b" strokeWidth="1" />
      <circle cx="185" cy="170" r="8" fill="#f0d48a" stroke="#b8860b" strokeWidth="1" />
      <path d="M130 225 Q150 250 170 225" fill="none" stroke="#f0d48a" strokeWidth="1.5" />
      <text x="150" y="280" textAnchor="middle" fill="#d4a853" fontFamily="Great Vibes, cursive" fontSize="24">Forever</text>
      {/* Sparkles */}
      <circle cx="130" cy="100" r="2" fill="#fff" opacity="0.6" />
      <circle cx="170" cy="90" r="2" fill="#fff" opacity="0.5" />
      <circle cx="150" cy="70" r="1.5" fill="#fff" opacity="0.7" />
    </svg>
  );
}
