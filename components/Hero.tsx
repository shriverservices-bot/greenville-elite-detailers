
import React from 'react';
import { ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';

interface HeroProps {
  onBook: () => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook, onExplore }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2000" 
          alt="Clean Black Mercedes Benz" 
          className="w-full h-full object-cover opacity-60 blur-[4px] scale-110"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-6 animate-pulse">
            <Award className="w-4 h-4" />
            Voted #1 Detailer in Greenville, SC
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] mb-6 tracking-tighter">
            THE ART OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              VEHICLE REBIRTH
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Experience showroom perfection. We combine master craftsmanship with 
            cutting-edge technology to protect and enhance your automotive investment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBook}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold py-5 px-10 rounded-xl text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-500/20"
            >
              Book My Detail
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onExplore}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-5 px-10 rounded-xl text-lg transition-all flex items-center justify-center"
            >
              View Packages
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 border-t border-zinc-800/50 pt-10 max-w-2xl">
            <div className="flex flex-col gap-1">
              <ShieldCheck className="text-emerald-400 w-6 h-6 mb-1" />
              <span className="text-white font-bold">5-Year Warranty</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest">Ceramic Coating</span>
            </div>
            <div className="flex flex-col gap-1">
              <Clock className="text-emerald-400 w-6 h-6 mb-1" />
              <span className="text-white font-bold">Same-Day Service</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest">Express Packages</span>
            </div>
            <div className="flex flex-col gap-1">
              <Award className="text-emerald-400 w-6 h-6 mb-1" />
              <span className="text-white font-bold">Certified Pros</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest">IDA Recognized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
