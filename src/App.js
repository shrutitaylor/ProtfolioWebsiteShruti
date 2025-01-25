import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./index.css";
import Navbar from "./fragments/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./pages/footer";
import Work from "./pages/work";
import Hobby from "./pages/hobbies";
import TechStack from "./pages/tech-stack";
import Skills from "./pages/skills";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 60,
          left: 0,
          right: 0,
          height: "5px",
          originX: 0,
          backgroundColor: "#FFDA73",
          zIndex: 50,
        }}
      />

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-landingImg bg-cover bg-center transition-opacity duration-700 ${
          scrolled ? "opacity-0" : "opacity-100"
        } ${footerVisible ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <div id="home" className="relative">
          <Home />
        </div>
        <div id="about" className="relative">
          <About />
        </div>
        <div id="skills" className="relative">
          <Skills />
        </div>
        <div id="work" className="relative">
          <Work />
        </div>
        
        <div id="hobby" className="relative">
          <Hobby />
        </div>
        <div id="contact" className="relative" ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
