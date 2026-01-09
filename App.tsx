import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Recommendations } from './pages/Recommendations';
import { Details } from './pages/Details';
import { ChatBot } from './components/ChatBot';

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
