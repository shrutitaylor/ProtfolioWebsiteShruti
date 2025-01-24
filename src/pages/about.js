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
            className="w-[200px] h-[350px] md:w-[350px] md:lg:h-[500px] 2xl:w-[500px] object-cover relative rounded-[50%]"
          />
          {/* Scramble Text */}
          <div className="flex flex-row absolute bottom-0 left-[100px]">
            <span className="font-tusker mt-[100px] text-primaryFont text-[0px] md:text-[70px] 2xl:text-[100px] 2xl:ml-[200px]">
              {scrambledText}
            </span>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h1 className="font-tusker mt-5 text-[50px] md:text-[80px] 2xl:text-[100px]">
          <span className="text-yellow">Hello! </span> I'm Shruti
        </h1>
        <p className="font-sora text-md md:lg:text-2xl 2xl:text-4xl">
        I blend art and code to create meaningful digital experiences. 
        Whether it’s designing user-friendly interfaces, building seamless web applications or adding a dash of creativity to every project, I believe in making ideas come alive.
        <br></br><br></br>So whether you need someone to code a digital masterpiece or paint a literal one, I’m your person! Let’s create something amazing together.
        </p>
      </div>
    </div>
  );
};

export default About;
