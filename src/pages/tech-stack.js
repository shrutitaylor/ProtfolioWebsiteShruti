import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import reactImg from "../assets/tech-icons/react.png";
import javascriptImg from "../assets/tech-icons/js.png";
import typescriptImg from "../assets/tech-icons/typescript.png";
import nodeJsImg from "../assets/tech-icons/node-js.png";
import sqlImg from "../assets/tech-icons/sql.png";
import pythonImg from "../assets/tech-icons/python.png";
import dockerImg from "../assets/tech-icons/docker.png";
import awsImg from "../assets/tech-icons/aws.png";

const TechStack = () => {
  const initialOrder = [
    { color: "#FFDF00", image: javascriptImg },
    { color: "#3178C6", image: typescriptImg },
    { color: "#fffff0", image: reactImg },
    { color: "#fffff1", image: nodeJsImg },
    { color: "#ffffff", image: pythonImg },
    { color: "#F5EEE6", image: awsImg },
    { color: "#FFE920", image: dockerImg },
    { color: "#3178C7", image: sqlImg },
  ];

  const [order, setOrder] = useState(initialOrder);
  const [shuffleCount, setShuffleCount] = useState(0);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  useEffect(() => {
    if (shuffleCount < 5) {
      const timeout = setTimeout(() => {
        setOrder((prevOrder) => shuffle(prevOrder));
        setShuffleCount((prevCount) => prevCount + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [order, shuffleCount]);

  return (
    <div className="flex flex-col w-full items-center justify-center m-5">
      <p className="text-7xl sm:text-9xl mb-4 text-primaryFont font-tuskerBold">my tech stack.</p>
      <ul className="flex grid grid-cols-2 md:grid-cols-4 md:w-[700px] md:gap-2 2xl:w-[900px] gap-2 w-[300px]">
        {order.map((current) => (
          <motion.li
            key={current.color}
            layout
            transition={spring}
            className="w-36 h-36 p-2 2xl:w-48 2xl:h-48 rounded-lg"
            style={{ backgroundColor: current.color }}
          >
            <img src={current.image} className="w-full h-full object-cover rounded-lg" alt="tech stack" />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
