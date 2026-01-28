
import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { analyzeCarCondition } from '../services/geminiService';
import { AnalysisResult } from '../types';

const AIAdvisor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setAnalyzing(true);
    setError(null);
    try {
      const analysis = await analyzeCarCondition(image);
      setResult(analysis);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Interaction */}
        <div className="space-y-6">
          <div className="bg-zinc-950 aspect-video rounded-2xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
               onClick={() => fileInputRef.current?.click()}>
            {image ? (
              <>
                <img src={image} alt="Upload" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white font-semibold">Change Photo</span>
                </div>
              </>
            ) : (
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-800">
                  <Camera className="text-zinc-500 w-8 h-8" />
                </div>
                <p className="text-zinc-400 font-medium">Click to upload a car photo</p>
                <p className="text-zinc-600 text-xs mt-2 italic">Interior or Exterior shots work best</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept="image/*" 
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!image || analyzing}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-black rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/10"
          >
            {analyzing ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                Analyzing Condition...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Run AI Detailing Scan
              </>
            )}
          </button>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 text-red-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}
        </div>

        {/* Right: Results */}
        <div className="flex flex-col justify-center min-h-[300px]">
          {!result && !analyzing && (
            <div className="text-center space-y-4 opacity-50">
              <Sparkles className="w-12 h-12 text-zinc-700 mx-auto" />
              <p className="text-zinc-400">Our AI Detailing Expert is ready. <br/>Upload a photo to see the analysis.</p>
            </div>
          )}

          {analyzing && (
            <div className="space-y-6 animate-pulse">
              <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
              <div className="h-20 bg-zinc-800 rounded"></div>
              <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                  result.urgency === 'high' ? 'bg-red-500/20 text-red-400' : 
                  result.urgency === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  Condition Level: {result.urgency}
                </span>
                <h4 className="text-xl font-bold text-white mt-4 mb-2">Detailed Condition</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">{result.condition}</p>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Expert Recommendation
                </div>
                <p className="text-zinc-200 text-sm italic">"{result.recommendation}"</p>
                <div className="mt-4 pt-4 border-t border-emerald-500/10">
                  <span className="text-zinc-500 text-xs block mb-1">Recommended Package:</span>
                  <span className="text-white font-bold text-lg">{result.suggestedPackage}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
