
import React, { useState } from 'react';

const portfolioItems = [
  {
    before: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    title: 'Porsche 911 Restoration',
    type: 'Full Paint Correction'
  },
  {
    before: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury SUV Interior',
    type: 'Elite Interior Package'
  },
  {
    before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    title: 'Modern Sportscar',
    type: 'Ceramic Coating'
  }
];

const Portfolio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {portfolioItems.map((item, idx) => (
        <div 
          key={idx}
          className="relative rounded-3xl overflow-hidden group h-[400px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src={hoveredIndex === idx ? item.after : item.before} 
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6">
            <div className="inline-block px-2 py-0.5 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase mb-2 rounded">
              {hoveredIndex === idx ? 'AFTER' : 'BEFORE'}
            </div>
            <h4 className="text-xl font-bold text-white">{item.title}</h4>
            <p className="text-zinc-400 text-sm">{item.type}</p>
          </div>

          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/20">
              Hover to see results
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
