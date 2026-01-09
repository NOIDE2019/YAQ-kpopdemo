
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Details: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-k-black p-6">
      <header className="flex justify-between items-center mb-10">
        <button onClick={() => navigate(-1)} className="font-hype text-[10px] text-white/50 uppercase">Back</button>
        <div className="bg-k-purple text-white px-5 py-2 rounded-full text-[9px] font-hype border-4 border-black shadow-[6px_6px_0px_#000]">OFFICIAL ✨</div>
      </header>
      <div className="aspect-[4/5] rounded-[3rem] border-8 border-black overflow-hidden shadow-[20px_20px_0px_#bc00ff] relative group">
        <img src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?w=800" className="w-full h-full object-cover" />
        <div className="absolute bottom-10 left-8 right-8">
           <h1 className="text-6xl font-display text-white italic uppercase leading-none tracking-tighter">THE BIAS CHOICE</h1>
        </div>
      </div>
      <div className="mt-14 space-y-8">
        <div className="bg-k-surface p-8 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_#00f0ff] italic">
           "Esta opción es un cultural reset. El vibe es impecable. ¡Slay!" ✨💖
        </div>
        <button className="w-full bg-white text-black font-display text-3xl uppercase italic py-8 rounded-[3.5rem] shadow-[12px_12px_0px_#ff007a] border-4 border-black">PRE-ORDER NOW ⚡</button>
      </div>
    </div>
  );
};
