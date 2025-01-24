import React, { useState } from "react";
import { motion } from "framer-motion";
import painting01 from "../assets/images/painting-01.jpg";
import painting02 from "../assets/images/painting-02.jpg";
import painting03 from "../assets/images/painting-04.jpg"

const Hobby = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Track which image is expanded

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded state
  };

  return (
    <div className="w-full h-full md:p-10 2xl:p-[100px] p-5 bg-transparent flex flex-col text-primaryFont">
      <div className="font-tuskerBold text-7xl sm:text-9xl flex justify-center text-primaryFont m-5">artistry unveiled .</div>
      {/* Intro Text */}
      <div className="justify-start text-2xl 2xl:text-5xl font-abril">
        I am a part-time Artist..
      </div>

      {/* Image Container */}
      <div className="h-[500px] w-full justify-center flex flex-row gap-5 mt-10">
        {/* Second Image */}
        <motion.div
          layout
          data-expanded={expandedIndex === 1}
          initial={{ borderRadius: "50%" }}
          animate={{
            height: expandedIndex === 1 ? 400 : 200,
            width: expandedIndex === 1 ? 500 : 200,
            borderRadius: expandedIndex === 1 ? "20px" : "50%",
          }}
          whileHover={{ scale: 1.1 }} // Add hover effect
          className="flex items-center justify-center bg-white cursor-pointer"
          onClick={() => handleExpand(1)}
        >
          <img src={painting02} className="w-full h-full object-cover" alt="Painting 02" />
        </motion.div>

        {/* First Image */}
        <motion.div
          layout
          data-expanded={expandedIndex === 0}
          initial={{ borderRadius: "50%" }}
          animate={{
            height: expandedIndex === 0 ? 400 : 200,
            width: expandedIndex === 0 ? 500 : 200,
            borderRadius: expandedIndex === 0 ? "20px" : "50%",
          }}
          whileHover={{ scale: 1.1 }} // Add hover effect
          className="flex items-center justify-center bg-white cursor-pointer"
          onClick={() => handleExpand(0)}
        >
          <img src={painting01} className="w-full h-full object-cover" alt="Painting 01" />
        </motion.div>

        

        {/* third Image */}
        <motion.div
          layout
          data-expanded={expandedIndex === 3}
          initial={{ borderRadius: "50%" }}
          animate={{
            height: expandedIndex === 3 ? 400 : 200,
            width: expandedIndex === 3 ? 500 : 200,
            borderRadius: expandedIndex === 1 ? "20px" : "50%",
          }}
          whileHover={{ scale: 1.1 }} // Add hover effect
          className="flex items-center justify-center bg-white cursor-pointer"
          onClick={() => handleExpand(3)}
        >
          <img src={painting03} className="w-full rotate-270 h-full object-cover" alt="Painting 03" />
        </motion.div>
      </div>

      {/* Outro Text */}
      <div className="justify-end text-right 2xl:text-5xl text-2xl font-abril mt-5">
        ...hence the theme
      </div>
    </div>
  );
};

export default Hobby;
