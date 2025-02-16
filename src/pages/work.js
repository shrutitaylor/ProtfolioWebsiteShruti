import React from "react";
import moodifyImg from "../assets/images/moodify-website.png";
import boseImg from "../assets/images/bose.png";
import soilImg from "../assets/images/soil-website.png";
import WorkTicket from "./work-ticket";
import Ticket from "./ticket";

const Work = () => {
  const projects = [
    {
      image: boseImg,
      title: "Headphones Product Page",
      description: "UI/UX Design, Development",
      techStack: ["React", "GSAP", "Javascript"],
      link: "https://shrutitaylor.github.io/earphones-v1/",
    },
    {
      image: soilImg,
      title: "SOIL - Grocery Website",
      description: "UI/UX Design, Development",
      techStack: ["React", "Node.js"],
      link: "https://shrutitaylor.github.io/SoilOrganicFood.github.io/",
    },
    {
      image: moodifyImg,
      title: "Moodify",
      description: "UI/UX Design, Development",
      techStack: ["React", "Node.js", "Animations"],
      link: "https://shrutitaylor.github.io/Moodify-v1.0/",
    },
  ];
  return (
    <div className="min-h-screen py-20 ">
      <div className="font-tuskerBold text-7xl sm:text-9xl flex justify-center text-primaryFont m-5">project tickets .</div>
      <Ticket />
    </div>
  )
}
export default Work;