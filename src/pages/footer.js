import { useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Footer = ({ isVisible }) => {
  const [scrambledText, setScrambledText] = useState("");
  const finalConnectText = "Connect";

  useEffect(() => {
    scrambleText(finalConnectText);
  }, []);

  const scrambleText = (text) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iterations = 0;

    const interval = setInterval(() => {
      setScrambledText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return char; // Keep revealed characters
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setScrambledText(text); // Ensure final text is displayed
      }

      iterations += 1 / 2; // Adjust speed of character reveal
    }, 100); // Adjust interval duration for animation speed
  };

  return (
    <div
      className={`relative w-full h-screen bg-transparent bg-center justify-start bg-cover flex `}
    >
      <div className="flex m-auto flex-col text-white">
        <div className="text-[150px] md:lg:text-[200px] 4k:text-[300px] 4k:leading-[300px] font-tusker text-primaryFont leading-[200px] md:lg:leading-[100px] p-8">
          <span className="text-yellow">Let's</span> {scrambledText}
        </div>
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
           className='justify-center flex '
        >
        <a
          href="mailto:shruti128770@gmail.com?subject=Hello Shruti!&body=Hi Shruti,"
          className="md:lg:px-7 m-auto bg-yellow mt-5 md:lg:pt-2 md:lg:pb-3 pt-1 pb-2 px-4 4k:px-10 4k:pt-4 4k:pb-5 font-abril text-md md:lg:text-2xl 4k:text-4xl text-black border-4 border-black rounded-full"
        >
          Say Hello!
        </a>
        </motion.div>
      </div>
      <div className="bg-transparent absolute bottom-10 flex px-10 4k:px-20 grid sm:grid-cols-1 md:lg:grid-cols-2 justify-between text-primaryFont w-full">
        <div className="flex font-abril text-3xl flex-row justify-start">
          <div className="hover:text-yellow">
            <a
              href="https://github.com/shrutitaylor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github .
            </a>
          </div>
          <div className="hover:text-yellow">
            <a
              href="https://linkedin.com/in/shruti-ms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin .
            </a>
          </div>
        </div>
        <div className="justify-end font-sora text-right">
          Portfolio made with love by Shruti.
        </div>
      </div>
    </div>
  );
};

export default Footer;
