import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './fragments/navbar';
import Home from './pages/home';
import About from './pages/about';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-landingImg bg-cover bg-center transition-opacity duration-700 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div className="relative z-10">
        <Navbar scrolled = {scrolled} />
        <div id="home" className="relative">
        <Home />
        </div>
        <div id="about" className="relative">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
