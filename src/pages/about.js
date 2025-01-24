import React, { useState, useEffect, useRef } from "react";
import profileImage from "../assets/images/profile-img.png";

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);
  const [scrambledText, setScrambledText] = useState("");

  const finalText = "RMIT GRADUATE";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Check if the component is in view
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      scrambleText(finalText);
    }
  }, [inView]);

  const scrambleText = (text) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iterations = 0;

    const interval = setInterval(() => {
      setScrambledText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return char;
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setScrambledText(text); // Ensure final text is displayed
      }

      iterations += 1 / 2; // Controls the speed of the animation
    }, 50); // Adjust the interval for speed
  };

  return (
    <div
      ref={aboutRef}
      className="h-full grid grid-cols-1 md:lg:grid-cols-2 gap-4 bg-transparent text-primaryFont p-10 bg-black"
    >
      {/* Image Section */}
      <div className="flex flex-col items-center justify-center">
        {/* Circular Image */}
        <div
          className={`relative flex w-full items-center justify-center transition-transform duration-700 ${
            inView ? "scale-110" : "scale-50"
          }`}
        >
          <img
            src={profileImage}
            alt="Shruti"
            className="w-[200px] h-[350px] md:lg:w-[350px] md:lg:h-[500px] object-cover relative rounded-[50%]"
          />
          {/* Scramble Text */}
          <div className="flex flex-row absolute bottom-0 left-[100px]">
            <span className="font-tusker mt-[100px] text-primaryFont text-[0px] md:lg:text-[70px]">
              {scrambledText}
            </span>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h1 className="font-tusker mt-5 text-[50px] md:lg:text-[80px]">
          <span className="text-yellow">Hello! </span> I'm Shruti
        </h1>
        <p className="font-sora text-md md:lg:text-2xl">
          I use my passion and skills to create digital products and experiences.
          National and international customers rely on me for design,
          implementation, and management of their digital products. As an
          independent, I work also with web agencies, companies, startups, and
          individuals to create a blueprint for the digital business. Advisor and
          partner of some digital and fintech startups. Also, Judge at CSSDA and
          The Webby.
        </p>
      </div>
    </div>
  );
};

export default About;
