
import React from 'react';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onBook: () => void;
}

const services: Service[] = [
  {
    id: 'express',
    name: 'Express Shine',
    price: '$125+',
    description: 'Perfect for regular maintenance and a quick glow-up.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800',
    features: ['Eco-Friendly Hand Wash', 'Spray Wax Application', 'Wheel & Tire Polish', 'Light Interior Vacuum'],
  },
  {
    id: 'elite',
    name: 'Elite Full Detail',
    price: '$350+',
    description: 'Our signature deep-clean transformation for interior and exterior.',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=800',
    features: ['Clay Bar Decontamination', 'One-Step Machine Polish', 'Hot Water Carpet Extraction', 'Leather Condition & Protect'],
  },
  {
    id: 'ceramic',
    name: 'Ceramic Pro Shield',
    price: '$899+',
    description: 'Ultimate long-term protection and insane levels of gloss.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800',
    features: ['Multi-Year Ceramic Coating', 'Full Paint Correction', 'Wheel Off Coating', 'Glass Rain Repellent'],
  },
];

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div 
          key={service.id} 
          className={`relative group bg-zinc-900 border transition-all duration-300 rounded-3xl overflow-hidden ${
            service.isPopular ? 'border-emerald-500/50 scale-105 shadow-2xl shadow-emerald-500/10 z-10' : 'border-zinc-800 hover:border-zinc-700'
          }`}
        >
          {service.isPopular && (
            <div className="absolute top-4 right-4 z-20 bg-emerald-500 text-zinc-950 text-xs font-black uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Zap className="w-3 h-3 fill-current" />
              Most Requested
            </div>
          )}

          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-display font-bold text-white">{service.name}</h3>
              <span className="text-emerald-400 font-bold text-xl">{service.price}</span>
            </div>
            <p className="text-zinc-400 mb-8 line-clamp-2">{service.description}</p>
            
            <ul className="space-y-4 mb-10">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Check className="text-emerald-400 w-3 h-3" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={onBook}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                service.isPopular 
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950' 
                  : 'bg-zinc-800 hover:bg-zinc-700 text-white'
              }`}
            >
              Select Package
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
