
import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onBook: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onBook }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'AI Advisor', id: 'ai-advisor' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="p-2 bg-emerald-500 rounded-lg">
            <Car className="text-zinc-950 w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white hidden sm:block">
            GREENVILLE <span className="text-emerald-400 underline decoration-2 underline-offset-4">ELITE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-zinc-400 hover:text-emerald-400 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+18645088215" className="flex items-center gap-2 text-zinc-300 font-semibold hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-emerald-400" />
            (864) 508-8215
          </a>
          <button
            onClick={onBook}
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2.5 px-6 rounded-lg transition-all transform hover:-translate-y-0.5"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-zinc-300 text-lg font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onBook();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-emerald-500 text-zinc-950 font-bold py-3 rounded-lg"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
