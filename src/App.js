import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import Navbar from './fragments/navbar';
import Home from './pages/home';
import About from './pages/about';
import Footer from './pages/footer';
import Work from './pages/work';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Handle general scroll for the background opacity
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for footer visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-landingImg bg-cover bg-center transition-opacity duration-700 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        } ${
          footerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <div id="home" className="relative">
          <Home />
        </div>
        <div id="about" className="relative">
          <About />
        </div>
        <div id="work" className="relative">
          <Work />
        </div>
        <div id="footer" className='relative' ref={footerRef}>
          <Footer  />
        </div>
       
      </div>
    </div>
  );
}

export default App;
