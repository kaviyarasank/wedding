import React from 'react';

const venues = [
  {
    icon: '🛕',
    title: 'Wedding Hall',
    subtitle: 'Where we tie the knot',
    desc: 'Join us at the wedding venue for the sacred ceremony and reception celebrations.',
    mapUrl: 'https://maps.app.goo.gl/zFrPcUSfrV1AG7rJ8',
    btnText: 'Open Wedding Hall Map',
  },
  {
    icon: '🏠',
    title: 'Home Location',
    subtitle: 'Where the celebrations continue',
    desc: 'Visit our home for traditional pre-wedding festivities and family gatherings.',
    mapUrl: 'https://maps.app.goo.gl/NEvF8gm1UH1E5CAY9',
    btnText: 'Open Home Location',
  },
];

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-24 px-6 z-10">
      {/* Divider */}
      <div className="text-center mb-12 reveal">
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
        <span className="inline-block mx-4 text-gold text-lg">✧</span>
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
      </div>

      <h2 className="section-title text-center mb-2 reveal">Venue</h2>
      <p className="font-elegant text-sm text-text-muted text-center tracking-[0.3rem] uppercase mb-12 reveal">
        Where love finds its home
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {venues.map((v, i) => (
          <div
            key={i}
            className="glass-card text-center reveal"
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div
              className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-gold/[0.15] to-rose/[0.15] border border-gold/20 flex items-center justify-center text-3xl mx-auto mb-6"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              {v.icon}
            </div>

            <h3 className="font-display text-xl text-cream mb-1">{v.title}</h3>
            <p className="font-elegant text-base text-gold italic mb-4">{v.subtitle}</p>
            <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>

            <a
              href={v.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-map-btn mt-6"
            >
              📍 {v.btnText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
