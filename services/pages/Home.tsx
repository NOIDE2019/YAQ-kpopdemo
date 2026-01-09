import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 'gastronomia', label: 'FOOD STAGE', icon: 'restaurant', color: 'bg-k-pink' },
    { id: 'viajes', label: 'WORLD TOUR', icon: 'explore', color: 'bg-k-cyan' },
    { id: 'moda', label: 'VISUALS', icon: 'style', color: 'bg-k-purple' },
    { id: 'regalos', label: 'FAN MERCH', icon: 'redeem', color: 'bg-k-yellow' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-k-black pb-10">
      <div className="bg-white text-black py-3 overflow-hidden border-y-4 border-black -rotate-2 scale-110 z-20 shadow-2xl mt-10">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="font-hype text-xl italic uppercase">✨ YAQ! POP TRENDING ✨ PICK YOUR BIAS ✨ ALL KILL ✨</span>
          ))}
        </div>
      </div>

      <header className="flex flex-col items-center pt-20 pb-12">
        <h1 className="text-[10rem] font-display text-white italic leading-none tracking-tighter">
          YAQ<span className="text-k-pink">!</span>
        </h1>
        <div className="bg-k-cyan text-black px-6 py-2 font-hype text-lg rotate-12 border-4 border-black shadow-[6px_6px_0px_#000] animate-float mt-[-20px]">
          POP EDITION
        </div>
      </header>

      <main className="px-6 grid grid-cols-2 gap-5 mt-10">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => navigate(`/recommendations?category=${cat.id}`)}
            className={`${cat.color} p-6 rounded-[2.5rem] border-4 border-black shadow-[8px_8px_0px_#000] active:translate-y-1 transition-all flex flex-col items-start gap-4`}
          >
            <span className="material-symbols-outlined text-white text-4xl">{cat.icon}</span>
            <span className="font-display text-2xl text-white italic uppercase">{cat.label}</span>
          </button>
        ))}
        <button 
          onClick={() => navigate('/recommendations?category=random')}
          className="col-span-2 w-full bg-white text-black font-display text-4xl py-10 rounded-[3.5rem] border-4 border-black shadow-[12px_12px_0px_#ff007a] active:translate-y-1 mt-4 italic uppercase"
        >
          RANDOM DEBUT ⚡
        </button>
      </main>
    </div>
  );
};
