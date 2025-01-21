import React, { useEffect, useState } from 'react';
import starryImg from '../assets/images/starry-night.jpg';


const Footer = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
          const handleScroll = () => {
            // Trigger fade-out when scrolled halfway down the screen
            setScrolled(window.scrollY > window.innerHeight / 2);
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      

  return (
    <img src={starryImg} alt="landing" 
    className={`w-full top-0 h-screen relative ${
        scrolled ? 'fade-out' : ''
      }`} > 
  
    </img>
  );
}

export default Footer;