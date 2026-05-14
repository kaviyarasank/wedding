import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'Story', id: 'story' },
  { label: 'Events', id: 'events' },
  { label: 'Venue', id: 'venue' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Blessings', id: 'blessings' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center gap-4 sm:gap-6 flex-wrap transition-all duration-400 ${
        scrolled ? 'nav-scrolled py-2 px-4' : 'py-4 px-6'
      }`}
    >
      {links.map((l) => (
        <button
          key={l.id}
          onClick={() => scrollTo(l.id)}
          className="font-elegant text-xs sm:text-sm text-text-muted hover:text-gold tracking-widest uppercase transition-colors duration-300 bg-transparent border-none cursor-pointer"
        >
          {l.label}
        </button>
      ))}
    </nav>
  );
}
