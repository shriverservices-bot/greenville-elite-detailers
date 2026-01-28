
import React from 'react';
import { Car, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-1.5 bg-emerald-500 rounded">
              <Car className="text-zinc-950 w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
              Greenville Elite
            </span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            Providing South Carolina with the highest standard of automotive detailing and protection. Family owned, community focused.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#services" className="hover:text-emerald-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-emerald-400">Portfolio</a></li>
            <li><a href="#ai-advisor" className="hover:text-emerald-400">AI Advisor</a></li>
            <li><a href="#testimonials" className="hover:text-emerald-400">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-emerald-400">FAQs</a></li>
            <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              123 Main St, Greenville, SC 29601
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              (864) 508-8215
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              hello@greenvilleelite.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 uppercase tracking-widest font-bold">
        <p>&copy; 2024 Greenville Elite Detailers. All rights reserved.</p>
        <p>Built for Speed & Shine.</p>
      </div>
    </footer>
  );
};

export default Footer;
