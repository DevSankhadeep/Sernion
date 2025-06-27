import React from 'react';

export default function Features() {
  const features = [
    "AI Labeling",
    "Image Annotation",
    "Text & NLP",
    "Audio/Video Support",
    "Collaboration",
    "Review & QA"
  ];

  return (
    <section id="features" className="features">
      <h3>Core Features</h3>
      <div className="grid">
        {features.map((f, i) => <div className="feature-card" key={i}>{f}</div>)}
      </div>
    </section>
  );
}
