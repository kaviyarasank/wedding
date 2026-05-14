import React, { useState } from 'react';

const initialBlessings = [
  { name: 'Family', message: 'May your life together be filled with endless love and happiness. Wishing you both a beautiful journey ahead!' },
  { name: 'Friends', message: 'Two wonderful people finding their forever — nothing could make us happier. Cheers to love!' },
];

export default function BlessingsSection() {
  const [blessings, setBlessings] = useState(initialBlessings);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setBlessings([{ name: name.trim(), message: message.trim() }, ...blessings]);
      const whatsappText = encodeURIComponent(
        `Wedding Blessing from ${name.trim()}:\n\n"${message.trim()}"\n\nSent from Kavi & Subha's Wedding Invitation`
      );
      window.open(`https://wa.me/916383285528?text=${whatsappText}`, '_blank');
      setName('');
      setMessage('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="blessings" className="relative py-24 px-6 z-10">
      {/* Divider */}
      <div className="text-center mb-12 reveal">
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
        <span className="inline-block mx-4 text-gold text-lg">❤</span>
        <span className="inline-block w-16 h-px bg-gold opacity-50 align-middle" />
      </div>

      <h2 className="section-title text-center mb-2 reveal">Send Your Blessings</h2>
      <p className="font-elegant text-sm text-text-muted text-center tracking-[0.3rem] uppercase mb-12 reveal">
        Share your love and wishes
      </p>

      {/* Form */}
      <form className="max-w-lg mx-auto reveal" onSubmit={handleSubmit}>
        <input
          className="blessings-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="blessings-input resize-y min-h-[120px]"
          placeholder="Write your blessings and wishes..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-rose to-gold text-dark font-elegant text-lg font-semibold tracking-widest border-none rounded-xl cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(183,110,121,0.3)] transition-all duration-400"
        >
          {submitted ? '✓ Blessings Sent!' : '✦ Send Blessings ✦'}
        </button>
      </form>

      {/* Blessings List */}
      <div className="max-w-lg mx-auto mt-8">
        {blessings.map((b, i) => (
          <div
            key={i}
            className="bg-dark-card/50 border border-gold/10 rounded-2xl p-6 mb-4 backdrop-blur-lg reveal"
            style={{ transitionDelay: `${i * 0.1}s`, animation: 'fade-up 0.5s ease-out' }}
          >
            <div className="font-display text-base text-gold mb-1">✦ {b.name}</div>
            <div className="text-sm text-text-muted italic leading-relaxed">"{b.message}"</div>
          </div>
        ))}
      </div>
    </section>
  );
}
