
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-12 rounded-[2rem] text-center">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/30">
          <CheckCircle className="text-zinc-950 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-4">Request Received!</h3>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Our team will contact you within 2 hours to finalize your appointment and give you a firm quote.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-emerald-400 font-bold underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-[2rem] shadow-2xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-zinc-400 text-sm font-bold uppercase tracking-widest ml-1">Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-zinc-400 text-sm font-bold uppercase tracking-widest ml-1">Phone</label>
          <input 
            required
            type="tel" 
            placeholder="(864) 508-8215"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-zinc-400 text-sm font-bold uppercase tracking-widest ml-1">Vehicle Info</label>
          <input 
            required
            type="text" 
            placeholder="2023 Tesla Model Y"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-zinc-400 text-sm font-bold uppercase tracking-widest ml-1">Service Package</label>
          <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
            <option>Elite Full Detail ($350+)</option>
            <option>Express Shine ($125+)</option>
            <option>Ceramic Pro Shield ($899+)</option>
            <option>Custom Paint Correction</option>
          </select>
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-zinc-400 text-sm font-bold uppercase tracking-widest ml-1">Additional Notes</label>
          <textarea 
            rows={4}
            placeholder="Describe any specific concerns or issues..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={loading}
          className="md:col-span-2 w-full py-5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 text-zinc-950 font-black rounded-xl transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-emerald-500/10"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin"></div>
          ) : (
            <>
              Request Free Estimate
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
        <p className="md:col-span-2 text-center text-zinc-500 text-xs mt-2">
          By clicking submit, you agree to be contacted via phone or email. No spam, ever.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
