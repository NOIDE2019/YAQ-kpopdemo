
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAIRecommendations, AIRecommendation } from '../services/geminiService';

export const Recommendations: React.FC = () => {
  const navigate = useNavigate();
  const category = new URLSearchParams(useLocation().search).get('category') || 'gastronomia';
  const [picks, setPicks] = useState<AIRecommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAIRecommendations(category).then(res => {
      setPicks(res);
      setLoading(false);
    });
  }, [category]);

  if (loading) return <div className="min-h-screen bg-k-black flex flex-col items-center justify-center font-hype text-k-pink animate-pulse gap-4 px-10 text-center">
    <div className="text-6xl animate-bounce">✨</div>
    SCANNING WORLD TRENDS...
  </div>;

  return (
    <div className="flex flex-col min-h-screen bg-k-black p-6">
      <header className="flex justify-between items-center mb-10">
        <button onClick={() => navigate('/')} className="size-14 bg-white rounded-2xl border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_#ff007a]">
          <span className="material-symbols-outlined text-black font-black">arrow_back</span>
        </button>
        <h2 className="font-display text-2xl italic text-white uppercase">{category}</h2>
      </header>

      <div className="space-y-10 pb-20">
        {picks.map((item, i) => (
          <div key={item.id || i} className="relative group animate-fade-in-up" style={{animationDelay: `${i*0.2}s`}}>
            <div className="aspect-[2/3] bg-k-surface rounded-[3rem] border-4 border-black overflow-hidden relative photocard-glow">
              <div className="absolute inset-0 holographic-foil opacity-20 z-10 pointer-events-none"></div>
              <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="bg-k-pink text-white px-3 py-1 rounded-full text-[10px] font-hype mb-2 border-2 border-black w-fit uppercase">VISUAL {item.level}</div>
                <h3 className="text-4xl font-display italic text-white leading-none mb-3 uppercase">{item.name}</h3>
                <p className="text-sm italic text-white/80 mb-6 line-clamp-2">"{item.flavorText}"</p>
                <button onClick={() => navigate('/details')} className="w-full bg-k-cyan text-black py-4 rounded-2xl font-hype border-4 border-black shadow-[4px_4px_0px_#000] uppercase text-xs">DETALLES ✨</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
