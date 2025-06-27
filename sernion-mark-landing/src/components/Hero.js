import React from 'react';

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <h2>Label Smarter. Build Faster.</h2>
      <p>An AI-powered annotation tool for images, text, audio, and video — designed for scale.</p>
      <div className="cta-buttons">
        <button onClick={scrollToCTA}>Start Free</button>
        <button className="secondary">Book a Demo</button>
      </div>
    </section>
  );
}
