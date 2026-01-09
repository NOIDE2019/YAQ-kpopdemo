
import React, { useState } from 'react';
import { getGeminiResponse } from '../services/geminiService';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([{ role: 'bot', text: "¡Hola! ✨ ¿En qué slay hoy? 💖" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setMessages([...messages, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);
    
    try {
      const res = await getGeminiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: res.text }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error en el stage... ✨" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-8 right-8 size-20 bg-k-pink rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_#fff] flex items-center justify-center z-50 hover:scale-110 transition-transform active:translate-y-1">
        <span className="material-symbols-outlined text-white text-4xl">chat</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-k-black/95 z-[100] flex flex-col animate-fade-in-up max-w-md mx-auto">
          <header className="p-8 border-b-4 border-black flex justify-between items-center bg-k-surface">
            <h3 className="font-display italic text-3xl uppercase">IDOL HOTLINE</h3>
            <button onClick={() => setIsOpen(false)} className="material-symbols-outlined text-4xl">close</button>
          </header>
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-6 rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_#000] ${m.role === 'user' ? 'bg-k-purple text-white' : 'bg-white text-black'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-k-pink animate-pulse font-hype">Typing... ✨</div>}
          </div>
          <div className="p-8 flex gap-4 bg-k-surface border-t-4 border-black">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} className="flex-1 bg-k-black border-4 border-black rounded-2xl px-6 py-4 text-white outline-none focus:border-k-cyan" placeholder="Tu mensaje..." />
            <button onClick={send} className="size-16 bg-k-pink text-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_#fff] flex items-center justify-center disabled:opacity-50" disabled={loading}>
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
