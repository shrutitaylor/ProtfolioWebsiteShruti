import React from "react";
import moodifyImg from "../assets/images/moodify-website.png";
import soilImg from "../assets/images/soil-website.png";
import barcodeImg from "../assets/images/barcode.png";
import { motion } from "framer-motion";

const WorkTicket = () => {
    const projects = [
        {
          image: soilImg,
          title: "SOIL - Grocery Website",
          subtitle: "UI/UX Design, Development",
          techStack: ["React", "Node.js", "Bootstrap"],
          description:
            "An organic food grocery platform built to promote sustainable living and provide users with a seamless shopping experience. It includes authentication login for secure user access and local storage to enhance usability.",
          link: "https://shrutitaylor.github.io/SoilOrganicFood.github.io/",
        },
        {
          image: moodifyImg,
          title: "Moodify",
          subtitle: "UI/UX Design, Development",
          techStack: ["React", "Node.js", "Animations"],
          description:
            "A music mood-based application designed to curate playlists based on user emotions. Features include animations and a sleek user interface for an immersive experience.",
          link: "https://shrutitaylor.github.io/Moodify-v1.0/",
        },
      ];

  return (
    <div className="h-full pb-10 grid grid-cols-1 py-20 justify-center gap-4 bg-transparent text-primaryFont">
         
      {/* Big screen */}
      {projects.map((project, index) => (
        <>
      <div
        id="big-rectangle"
        className="hidden md:flex relative m-auto my-5 w-full lg:w-[1200px] 4k:w-[1700px] 4k:h-[500px] md:h-[260px] lg:h-[300px] bg-[#FFF9E9]"
        >
        <div className="justify-start p-5 text-black">
            <div className="4k:w-[180px] 4k:h-[250px]">
            <img
                src={barcodeImg}
                alt="barcode"
                className="rotate-90 4k:object-none 4k:h-[200px] 4k:w-[700px] w-[180px] h-[200px]"
            />
            </div>
            <div className="font-jack md:text-xl text-3xl 4k:ml-2 4k:text-5xl md:mt-[6px] lg:mt-[40px] ml-10">
            Project 0{index + 1}
            </div>
        </div>
        <div className="flex flex-col h-full border-l-4 border-black border-dashed ">
            <div className="w-[500px] h-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={
   { scale: [1, 2, 1], 
     rotate: 360,
     x: [0, 100, -100, 0]
   }
} 
transition={{duration: 2}}
                src={project.image}
                alt="project"
                className="w-[500px] 4k:w-[700px] object-cover h-full"
            />
            </a>
            </div>
        </div>
        <div className="justify-left flex flex-col h-full w-[500px] 4k:w-[800px] 4k:p-10 p-5">
            <text className="font-tuskerBold md:text-[40px] md:leading-[40px] 4k:text-[80px] lg:text-[50px] lg:leading-[50px] text-black flex text-start">
            {project.title}
            </text>
            <text className="font-sora text-[16px] leading-[30px] 4k:text-[30px] 4k:leading-[70px] text-black flex text-start">
            {project.subtitle}
            </text>

            <text className="font-jack text-[29px] 4k:text-[40px] text-black">Description</text>
            <text className="font-sora 4k:text-[30px] 4k:leading-[30px] md:text-[15px] md:leading-[15px] text-[18px] leading-[18px] text-black flex text-start">
            {project.description}
            </text>
            <text className="md:text-[0px] md:bg-transparent lg:bg-yellow font-jack lg:text-[29px] 4k:text-[40px] text-black mt-3 pl-5">
            Skills -
            <span className="md:text-[0px] font-sora lg:text-[18px] leading-[18px] 4k:text-[30px] 4k:leading-[30px] text-black">
                {project.techStack.join(", ")}
            </span>
            </text>
        </div>

        {/* Decorative Circles */}
        <div
            className="absolute md:w-0 md:h-0 lg:w-10 lg:h-10 bg-black rounded-full"
            style={{ top: "-20px", left: "200px" }}
        ></div>
        <div
            className="absolute md:w-0 md:h-0 lg:w-10 lg:h-10 bg-black rounded-full"
            style={{ bottom: "-20px", left: "200px" }}
        ></div>
        <div
            className="absolute md:w-0 md:h-0 lg:w-10 lg:h-10 bg-black rounded-full"
            style={{ top: "-20px", left: "-20px" }}
        ></div>
        <div
            className="absolute md:w-0 md:h-0 lg:w-10 lg:h-10 bg-black rounded-full"
            style={{ top: "-20px", right: "-20px" }}
        ></div>
        <div
            className="absolute md:w-0 md:h-0 lg:w-10 lg:h-10 bg-black rounded-full"
            style={{ bottom: "-20px", left: "-20px" }}
        ></div>
        <div
            className="absolute md:w-0 md:h-0 lg:w-10 lg:h-10 bg-black rounded-full"
            style={{ bottom: "-20px", right: "-20px" }}
        ></div>
        </div>

      </>
        ))}

      {/* Small Screen */}
      <div
        id="small-rectangle"
        className="flex md:hidden relative m-auto mb-10 flex-col w-[300px] h-[800px] bg-[#FFF9E9]"
      >
        <div className="justify-left pt-10 p-5">
          <text className="font-tuskerBold text-[50px] leading-[50px] text-gray-800 flex text-start">
            SOIL <br /> Grocery Website
          </text>
          <text className="font-sora text-[16px] leading-[30px] text-black flex text-start">
            UI/UX Design, Development
          </text>
        </div>
        <img src={soilImg} alt="soil" className="w-full h-[180px]" />

        <div className="justify-left p-5">
          <text className="font-jack text-[24px] text-black">Description</text>
          <text className="font-sora text-[13px] leading-[13px] text-black flex text-start">
            An organic food grocery platform built to promote sustainable living
            and provide users with a seamless shopping experience. It includes
            authentication login for secure user access and local storage to
            enhance usability.
          </text>
          <text className="font-jack text-[24px] text-black bg-yellow mt-5">Skills - 
          <span className="font-sora text-[15px] leading-[15px] text-black text-start">
            React, Node.js, Bootstrap
          </span></text>
        </div>
        <div className="justify-end p-5">
          <img src={barcodeImg} alt="barcode" className="w-full h-[180px]" />
        </div>
        <div
          className="absolute w-10 h-10 bg-black rounded-full"
          style={{ top: "-20px", left: "-20px" }}
        ></div>
        <div
          className="absolute w-10 h-10 bg-black rounded-full"
          style={{ bottom: "200px", right: "-20px" }}
        ></div>
        <div
          className="absolute w-10 h-10 bg-black rounded-full"
          style={{ top: "-20px", right: "-20px" }}
        ></div>
        <div
          className="absolute w-10 h-10 bg-black rounded-full"
          style={{ bottom: "-20px", left: "-20px" }}
        ></div>
        <div
          className="absolute w-10 h-10 bg-black rounded-full"
          style={{ bottom: "-20px", right: "-20px" }}
        ></div>
        <div
          className="absolute w-10 h-10 bg-black rounded-full"
          style={{ bottom: "200px", left: "-20px" }}
        ></div>
      </div>
    </div>
  );
};

export default WorkTicket;
