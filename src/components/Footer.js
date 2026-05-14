import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-16 px-6 relative z-10 border-t border-rose/15">
      <div className="font-script text-4xl sm:text-5xl mb-4 reveal" style={{
        background: 'linear-gradient(135deg, #f0d48a, #d4a853)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Kavi & Subha
      </div>

      <p className="font-elegant text-lg text-text-muted italic max-w-md mx-auto mb-8 leading-relaxed reveal">
        Waiting to celebrate this beautiful moment with you
      </p>

      <div className="text-2xl reveal" style={{ animation: 'heartbeat 2s ease-in-out infinite', display: 'inline-block' }}>
        ❤️
      </div>

      <p className="text-text-muted text-xs tracking-widest mt-8 reveal">
        28 · MAY · 2026
      </p>
    </footer>
  );
}
