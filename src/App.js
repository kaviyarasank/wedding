import React, { useState, useEffect } from 'react';
import './App.css';

import LoadingScreen from './components/LoadingScreen';
import { Particles, Petals } from './components/Particles';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import CoupleStorySection from './components/CoupleStorySection';
import EventScheduleSection from './components/EventScheduleSection';
import VenueSection from './components/VenueSection';
import GallerySection from './components/GallerySection';
import BlessingsSection from './components/BlessingsSection';
import Footer from './components/Footer';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();

  return (
    <>
      <LoadingScreen visible={loading} />
      <Particles />
      <Petals />
      <Nav />
      <HeroSection />
      <CoupleStorySection />
      <EventScheduleSection />
      <VenueSection />
      <GallerySection />
      <BlessingsSection />
      <Footer />
    </>
  );
}

export default App;
