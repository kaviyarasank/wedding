import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/30685770/pexels-photo-30685770.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Together Forever',
    alt: 'Traditional South Indian wedding couple embracing in Tamil Nadu',
  },
  {
    image: 'https://images.pexels.com/photos/30171219/pexels-photo-30171219.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Sacred Ceremony',
    alt: 'Traditional Indian wedding ceremony portrait with bride and groom',
  },
  {
    image: 'https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Eternal Bond',
    alt: 'Portrait of Indian wedding couple in traditional attire',
  },
  {
    image: 'https://images.pexels.com/photos/19230329/pexels-photo-19230329.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Celebration of Love',
    alt: 'Young couple at a traditional Indian wedding celebration',
  },
  {
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Beautiful Beginnings',
    alt: 'Indian bride in traditional red and gold wedding saree',
  },
  {
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Blessed Union',
    alt: 'Traditional Indian wedding couple with garlands and jewelry',
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [touchStart, setTouchStart] = useState(null);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIdx = (current + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIdx].image;
  }, [current]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  const slide = slides[current];

  return (
    <section id="gallery" className="relative py-24 px-6 z-10">
      {/* Divider */}
      <div className="text-center mb-12 reveal">
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
        <span className="inline-block mx-4 text-gold text-lg">✨</span>
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
      </div>

      <h2 className="section-title text-center mb-2 reveal">Bride & Groom</h2>
      <p className="font-elegant text-sm text-text-muted text-center tracking-[0.3rem] uppercase mb-12 reveal">
        Traditional Tamil Nadu elegance
      </p>

      {/* Gallery Container */}
      <div
        className="relative max-w-lg mx-auto overflow-hidden rounded-3xl border border-gold/[0.15] reveal shadow-[0_0_60px_rgba(212,168,83,0.08)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="w-full relative overflow-hidden bg-dark-card"
          style={{ aspectRatio: '3/4' }}
        >
          {/* Image */}
          <img
            key={current}
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: loaded[current] ? 1 : 0,
            }}
            onLoad={() => setLoaded((prev) => ({ ...prev, [current]: true }))}
          />

          {/* Loading placeholder */}
          {!loaded[current] && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-card">
              <div
                className="w-10 h-10 rounded-full border-2 border-transparent border-t-gold border-r-gold-light"
                style={{ animation: 'spin 1s linear infinite' }}
              />
            </div>
          )}

          {/* Gradient overlay at bottom for caption */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="font-script text-3xl text-gold-light drop-shadow-lg">{slide.caption}</p>
            <p className="font-elegant text-sm text-white/60 mt-1 tracking-widest uppercase">
              {current + 1} / {slides.length}
            </p>
          </div>

          {/* Decorative corner ornaments */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
          <div className="absolute bottom-20 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
          <div className="absolute bottom-20 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
        </div>

        {/* Nav Buttons */}
        <button className="gallery-nav absolute left-3" onClick={prev}>‹</button>
        <button className="gallery-nav absolute right-3" onClick={next}>›</button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              i === current
                ? 'bg-gold border-gold shadow-[0_0_10px_rgba(212,168,83,0.5)] scale-125'
                : 'bg-gold/20 border-gold/30 hover:bg-gold/40'
            }`}
          />
        ))}
      </div>

      {/* Photo credit */}
      <p className="text-center text-text-muted/50 text-xs mt-4 font-body">
        Photos courtesy of Pexels
      </p>
    </section>
  );
}
