import React from 'react';

export default function Pricing() {
  const plans = [
    { title: "Free", desc: "Start with 500 tasks" },
    { title: "Pro", desc: "$99/month, unlimited projects", featured: true },
    { title: "Enterprise", desc: "Custom SLA, SSO, support" },
  ];

  return (
    <section id="pricing" className="pricing">
      <h3>Simple, Transparent Pricing</h3>
      <div className="grid">
        {plans.map((plan, i) => (
          <div className={`price-card ${plan.featured ? 'featured' : ''}`} key={i}>
            <h4>{plan.title}</h4>
            <p>{plan.desc}</p>
            <button>{plan.title === "Enterprise" ? "Contact" : "Select"}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
