
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Tesla Model S Owner',
    content: 'Absolutely stunning work. My car looks better now than the day I picked it up from the dealer. The ceramic coating finish is like glass.',
    rating: 5,
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'James Reynolds',
    role: 'BMW M3 Enthusiast',
    content: 'Best detailers in Greenville. Their attention to detail on the interior is unmatched. Every vent, every stitch—completely spotless.',
    rating: 5,
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: '3',
    name: 'Amanda Brooks',
    role: 'Classic Car Collector',
    content: 'I trust Greenville Elite with my entire collection. Professional, punctual, and passionate about automotive care. Truly elite.',
    rating: 5,
    avatar: 'https://picsum.photos/id/66/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">5-Star Reputation</h2>
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
            <span className="text-zinc-300 font-bold ml-2">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative group">
              <Quote className="absolute top-6 right-8 text-zinc-800 w-12 h-12 group-hover:text-emerald-500/10 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-emerald-500/20" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="text-emerald-400 w-3 h-3 fill-current" />)}
              </div>
              <p className="text-zinc-300 leading-relaxed italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
