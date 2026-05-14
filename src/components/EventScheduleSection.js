import React from 'react';

const events = [
  {
    icon: '🕉',
    name: 'Muhurtham',
    time: '4:00 AM – 6:00 AM',
    desc: 'The sacred wedding ceremony performed according to traditional South Indian customs with vedic rituals and blessings.',
  },
  {
    icon: '🎉',
    name: 'Reception',
    time: '7:00 AM – 11:00 AM',
    desc: 'Join us for a grand celebration with music, feast, and heartfelt moments as we begin our journey together.',
  },
];

export default function EventScheduleSection() {
  return (
    <section id="events" className="relative py-24 px-6 z-10">
      {/* Divider */}
      <div className="text-center mb-12 reveal">
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
        <span className="inline-block mx-4 text-gold text-lg">✦</span>
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
      </div>

      <h2 className="section-title text-center mb-2 reveal">Wedding Events</h2>
      <p className="font-elegant text-sm text-text-muted text-center tracking-[0.3rem] uppercase mb-12 reveal">
        Celebrate each sacred moment
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {events.map((e, i) => (
          <div
            key={i}
            className="glass-card text-center reveal"
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            {/* Icon */}
            <div
              className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-gold/[0.15] to-rose/[0.15] border border-gold/20 flex items-center justify-center text-3xl mx-auto mb-6"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              {e.icon}
            </div>

            <div className="font-elegant text-2xl text-cream mb-2">{e.name}</div>
            <div className="font-display text-xl text-gold-light mb-1">{e.time}</div>
            <div className="text-sm text-text-muted leading-relaxed mt-4">{e.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
