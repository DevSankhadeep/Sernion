import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
