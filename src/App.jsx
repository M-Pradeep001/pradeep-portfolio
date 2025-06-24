import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FunTimes from './components/FunTimes';
import Works from './components/Works';
// import { WorkSlideCardShowcase } from './components/WorkSlideCard';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/fun-times" element={<FunTimes />} />
      </Routes>
    </div>
  );
}

export default App;
