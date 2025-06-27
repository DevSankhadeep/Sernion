import React from 'react';

export default function UseCases() {
  const usecases = [
    "Autonomous Vehicles",
    "Healthcare Imaging",
    "Surveillance",
  ];

  return (
    <section id="usecases" className="usecases">
      <h3>Powering Leading Industries</h3>
      <div className="grid">
        {usecases.map((u, i) => <div className="use-card" key={i}>{u}</div>)}
      </div>
    </section>
  );
}
