import React from 'react';

export function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left + '%',
            width: p.size + 'px',
            height: p.size + 'px',
            background: 'radial-gradient(circle, #e8cfa9, transparent)',
            opacity: 0,
            animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Petals() {
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 10 + 10,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 15,
    isGold: i % 2 === 0,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-10"
          style={{
            left: p.left + '%',
            width: p.size + 'px',
            height: p.size * 1.3 + 'px',
            background: p.isGold
              ? 'radial-gradient(ellipse at 30% 30%, #e8cfa9, #a67c52)'
              : 'radial-gradient(ellipse at 30% 30%, #f0c4c8, #b76e79)',
            borderRadius: '50% 0 50% 50%',
            opacity: 0,
            animation: `fall-petal ${p.duration}s linear ${p.delay}s infinite`,
            filter: `drop-shadow(0 0 3px rgba(${p.isGold ? '201,168,124' : '183,110,121'},0.4))`,
          }}
        />
      ))}
    </div>
  );
}
