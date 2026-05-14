import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-05-28T04:00:00').getTime();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const items = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center flex-wrap my-8" style={{ animation: 'fade-up 1.5s ease-out 1s both' }}>
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-rose/15 border border-gold/15 backdrop-blur-lg rounded-2xl px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[80px] text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(183,110,121,0.15)] hover:border-gold/30 transition-all duration-300"
        >
          <div className="font-display text-3xl sm:text-4xl font-bold text-gold-light leading-none">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-[0.65rem] sm:text-xs text-text-muted tracking-widest uppercase mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
