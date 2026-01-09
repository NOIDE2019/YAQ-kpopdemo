import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Recommendations } from './pages/Recommendations.tsx';
import { Details } from './pages/Details.tsx';
import { ChatBot } from './components/ChatBot.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen bg-k-black text-white max-w-md mx-auto shadow-2xl overflow-x-hidden border-x border-white/10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <ChatBot />
      </div>
    </HashRouter>
  );
};

export default App;
