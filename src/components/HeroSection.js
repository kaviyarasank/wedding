import React from 'react';
import Countdown from './Countdown';

function smoothScrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,17,24,0.85)_100%)]" />

      <div className="relative z-10 text-center px-6" style={{ animation: 'fade-up 1.5s ease-out' }}>
        {/* Ornament */}
        <div className="text-2xl text-gold mb-4 tracking-[0.5rem]" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
          ✧ ✦ ✧
        </div>

        {/* Subtitle */}
        <div
          className="font-elegant text-sm sm:text-base text-text-muted tracking-[0.4rem] uppercase mb-6"
          style={{ animation: 'fade-up 1.5s ease-out 0.2s both' }}
        >
          Together with our families
        </div>

        {/* Names */}
        <h1 className="hero-names" style={{ animation: 'shimmer 4s ease-in-out infinite, fade-up 1.5s ease-out 0.4s both' }}>
          Kavi <span className="hero-heart">❤</span> Subha
        </h1>

        {/* Tagline */}
        <p
          className="font-elegant text-base sm:text-lg text-text-muted max-w-xl mx-auto mt-6 leading-relaxed italic"
          style={{ animation: 'fade-up 1.5s ease-out 0.6s both' }}
        >
          We invite you to celebrate the beginning of our forever as we unite in love, laughter, and joy
        </p>

        {/* Date */}
        <div
          className="font-elegant text-lg sm:text-xl text-gold tracking-[0.3rem] mt-6"
          style={{ animation: 'fade-up 1.5s ease-out 0.8s both' }}
        >
          ✦ 28 · MAY · 2026 ✦
        </div>

        {/* Countdown */}
        <Countdown />

        {/* CTA */}
        <button
          onClick={() => smoothScrollTo('events')}
          className="cta-button mt-6"
          style={{ animation: 'fade-up 1.5s ease-out 1.2s both, shimmer 3s ease-in-out infinite' }}
        >
          ✦ Celebrate With Us ✦
        </button>
      </div>
    </section>
  );
}
