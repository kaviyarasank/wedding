import React from 'react';

export default function LoadingScreen({ visible }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center transition-all duration-700 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div
        className="w-16 h-16 rounded-full border-2 border-transparent border-t-gold border-r-gold-light"
        style={{ animation: 'spin 1s linear infinite' }}
      />
      <div
        className="mt-5 font-script text-2xl text-gold"
        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
      >
        Kavi & Subha
      </div>
    </div>
  );
}
