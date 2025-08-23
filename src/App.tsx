import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import MediaCoverage from './components/MediaCoverage';
import AppDownload from './components/AppDownload';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TrustedBy />
      <Testimonials />
      <MediaCoverage />
      <AppDownload />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;