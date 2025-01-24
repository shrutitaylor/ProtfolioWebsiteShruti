import React from "react";
import moodifyImg from "../assets/images/moodify-website.png";
import soilImg from "../assets/images/soil-website.png";
import barcodeImg from "../assets/images/barcode.png";
import migrationImg from "../assets/images/pathfindr-website.png"
import { motion } from "framer-motion";

const Ticket = () => {
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
        {
          image: migrationImg, 
          title: "Migration Assistant Tool",
          subtitle: "Automation, AI Integration",
          techStack: ["React", "Azure AI", "OpenAI"],
          description:
            "Designed and implemented a React-based web application to automate document verification for migration processes. Integrated Azure AI and OpenAI for enhanced data verification and accuracy.",
          link: "https://www.figma.com/proto/eyxtt2dI8LWBpYzDk3PMnk/PathFindr---Project-Aug-2024?node-id=11-229&p=f&t=KsqEx0D4mHmqEW8i-1&scaling=min-zoom&content-scaling=fixed&page-id=3%3A653&starting-point-node-id=11%3A229",
        },
      ];
      

  return (
    <div className="h-full pb-10 grid grid-cols-1 md:px-5 py-20 justify-center gap-4 bg-transparent text-primaryFont">
         
      {/* Big screen */}
      {projects.map((project, index) => (
        <>
      <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
        id="big-rectangle"
        className="hidden md:flex bg-primaryFont relative  m-auto my-5 w-full max-w-[1200px] 2xl:max-w-[1500px] 2xl:min-h-[500px] min-h-[250px] "
        >
            {/* Barcode Section  */}
            <div className="hidden xl:flex xl:flex-col justify-start p-5 text-black">
                <div className="lg:w-[180px] lg:h-[200px] ">
                <img
                    src={barcodeImg}
                    alt="barcode"
                    className="rotate-90 lg:object-none lg:h-[200px] lg:w-[700px] w-[180px] h-[200px]"
                />
                </div>
                <div className="font-jack md:text-xl text-3xl 2xl:ml-2 2xl:text-5xl md:mt-[6px]  ml-10">
                Project 0{index + 1}
                </div>
            </div>
            {/* Project image */}
            <div className="flex flex-col h-[300px]  2xl:h-[500px] border-l-4 border-black border-dashed ">
                <div className="w-[450px] 2xl:w-[600px] 2xl:h-[500px] h-[300px]">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={project.image}
                            alt="project"
                            className="w-[600px]  object-cover h-full"
                        />
                    </a>
                </div>
            </div>
         {/* Project details  */}

         <div className="justify-left 2xl:mt-5 flex flex-col  h-full p-5">
            <text className="font-tuskerBold md:text-[40px] md:leading-[40px] 2xl:text-[80px] lg:text-[50px] lg:leading-[50px] text-black flex text-start">
            {project.title}
            </text>
            <text className="font-sora text-[16px] leading-[30px] 2xl:text-[30px] 2xl:leading-[70px] text-black flex text-start">
            {project.subtitle}
            </text>

            <text className="font-jack text-[29px] 2xl:text-[40px] text-black">Description</text>
            <text className="font-sora 2xl:text-[30px] 2xl:leading-[30px] md:text-[15px] md:leading-[15px] text-[18px] leading-[18px] text-black flex text-start">
            {project.description}
            </text>
            <text className="md:text-[0px] md:bg-transparent lg:bg-yellow font-jack lg:text-[29px] 2xl:text-[40px] text-black mt-3 pl-5">
            Skills -
            <span className="md:text-[0px] font-sora lg:text-[18px] leading-[18px] 2xl:text-[30px] 2xl:leading-[30px] text-black">
                {project.techStack.join(", ")}
            </span>
            </text>
        </div>

        {/* Decorative Circles */}
        <div
            className="absolute w-0 h-0 lg:w-10 lg:h-10 bg-black rounded-full"
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
        </motion.div>

      </>
        ))}
            {/* Small Screen */}
            <div className="grid flex md:hidden grid-cols-1 justify-center ">
                {projects.map((project, index) => (
                    <>
                
                <div id="small-rectangle" className="flex relative flex-col mb-2 m-auto w-full max-w-[300px] h-[800px] bg-[#FFF9E9]">
                    {/* Project deatails */}
                    <div className="justify-left pt-10 p-5">
                        <text className="font-tuskerBold text-[50px] leading-[50px] text-gray-800 flex text-start">
                            {project.title}
                        </text>
                        <text className="font-sora text-[16px] leading-[30px] text-black flex text-start">
                            {project.subtitle}
                        </text>
                    </div>

                    {/* Project Image  */}
                    <img src={project.image} alt="soil" className="w-full h-[180px]" />

                    {/* Project details -2  */}
                    <div className="justify-left p-5">
                        <text className="font-jack text-[24px] text-black">Description</text>
                            <text className="font-sora text-[13px] leading-[13px] text-black flex text-start">
                                {project.description}
                            </text>
                        <text className="font-jack text-[24px] text-black bg-yellow mt-5">Skills - 
                            <span className="font-sora text-[15px] leading-[15px] text-black text-start">
                                {project.techStack.join(", ")}
                            </span></text>
                    </div>

                    {/* Barcode Image */}
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
                </>
                    ))}
             </div>
      </div>
    
  );
};

export default Ticket;
