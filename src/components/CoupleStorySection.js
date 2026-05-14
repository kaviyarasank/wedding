import React from 'react';

const stories = [
  { year: 'The Beginning', title: 'When Stars Aligned', desc: 'Two souls destined to be together found each other, and from the very first moment, something magical sparked between them.' },
  { year: 'The Journey', title: 'Growing Together', desc: 'Through shared dreams and countless memories, their bond grew stronger with every passing day, building a foundation of trust and love.' },
  { year: 'The Promise', title: 'A Beautiful Proposal', desc: 'Under a sky painted with stars, a promise was made — to walk together through every season of life, hand in hand.' },
  { year: '28 May 2026', title: 'Forever Begins', desc: 'Now they embark on the most beautiful chapter yet, a lifetime of togetherness blessed by family and friends.' },
];

export default function CoupleStorySection() {
  return (
    <section id="story" className="relative py-24 px-6 z-10">
      {/* Divider */}
      <div className="text-center mb-12 reveal">
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
        <span className="inline-block mx-4 text-gold text-lg">♥</span>
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
      </div>

      <h2 className="section-title text-center mb-2 reveal">Our Love Story</h2>
      <p className="font-elegant text-sm text-text-muted text-center tracking-[0.3rem] uppercase mb-12 reveal">
        A journey written in the stars
      </p>

      {/* Timeline */}
      <div className="timeline relative max-w-3xl mx-auto py-8">
        {stories.map((s, i) => (
          <div
            key={i}
            className={`relative mb-12 ${
              i % 2 === 0
                ? 'w-[45%] ml-0 text-right pr-10 reveal-left sm:w-[45%]'
                : 'w-[45%] ml-[55%] text-left pl-10 reveal-right sm:w-[45%]'
            } max-sm:!w-[calc(100%-50px)] max-sm:!ml-[50px] max-sm:!text-left max-sm:!pl-6 max-sm:!pr-0`}
          >
            {/* Dot */}
            <div
              className={`absolute top-6 w-3.5 h-3.5 bg-gold rounded-full shadow-[0_0_20px_rgba(212,168,83,0.5)] z-[2] ${
                i % 2 === 0 ? 'right-[-7px]' : 'left-[-7px]'
              } max-sm:!left-[-37px] max-sm:!right-auto`}
            />

            {/* Card */}
            <div className="bg-dark-card/60 backdrop-blur-md border border-gold/[0.12] rounded-2xl p-6 hover:border-gold/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-400">
              <div className="font-display text-xs text-gold tracking-widest mb-2">{s.year}</div>
              <div className="font-display text-lg text-cream mb-2">{s.title}</div>
              <div className="text-sm text-text-muted leading-relaxed">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
