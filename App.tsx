import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Identification } from './components/Identification';
import { Method } from './components/Method';
import { CostOfInaction } from './components/CostOfInaction';
import { Pricing } from './components/Pricing';
import { DigitalProducts } from './components/DigitalProducts';
import { FinalCTA } from './components/FinalCTA';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen selection:bg-rose-500/30 selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-neutral-950/50 backdrop-blur-md border-b border-white/5">
        <div className="text-sm font-light tracking-widest uppercase text-white/80">
          Шарафуллина О.
        </div>
        <button 
          onClick={scrollToContact}
          className="text-xs font-medium tracking-wider border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          ЗАПИСЬ
        </button>
      </nav>

      <main>
        <Hero onCtaClick={scrollToContact} />
        <Identification />
        <Method />
        <Pricing onSelect={scrollToContact} />
        <CostOfInaction />
        <DigitalProducts />
        <FinalCTA id="contact" />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-neutral-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Olga Sharafullina. Private Practice.</p>
        <p className="mt-2">Санкт-Петербург / Online</p>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur text-white transition-all duration-500 z-40 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}