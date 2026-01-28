
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIAdvisor from './components/AIAdvisor';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30">
      <Header onNavigate={scrollToSection} onBook={() => setShowBooking(true)} />
      
      <main>
        <Hero onBook={() => setShowBooking(true)} onExplore={() => scrollToSection('services')} />
        
        <section id="services" className="py-24 px-6 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Elite Detailing Packages</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Meticulous care for every inch of your vehicle. Choose the level of perfection you desire.
              </p>
            </div>
            <Services onBook={() => setShowBooking(true)} />
          </div>
        </section>

        <section id="ai-advisor" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-emerald-400 w-6 h-6" />
              <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm">Next-Gen Detailing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-12">AI Visual Detailing Advisor</h2>
            <AIAdvisor />
          </div>
        </section>

        <section id="portfolio" className="py-24 px-6 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">The Greenville Gallery</h2>
              <p className="text-zinc-400 text-lg">Real results from our master detailers.</p>
            </div>
            <Portfolio />
          </div>
        </section>

        <Testimonials />

        <section id="booking" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-12">Secure Your Spot</h2>
            <BookingForm />
          </div>
        </section>
      </main>

      <Footer />

      {/* Persistent CTA for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button 
          onClick={() => scrollToSection('booking')}
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-4 px-8 rounded-full shadow-2xl shadow-emerald-500/20 flex items-center gap-2 transform active:scale-95 transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default App;
