import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="cta-final">
      <h3>Ready to Label Smarter?</h3>
      <button onClick={() => alert('Redirecting to app...')}>Get Started</button>
    </section>
  );
}
