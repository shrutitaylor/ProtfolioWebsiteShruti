import AssistantIcon from '@material-ui/icons/Assistant';
import React from "react";
import image from "./shruti-middle.png";
const ProjectsIntro = () => {
  return (
    <section className="main intro " >
      <div className="intro_section">
        <h3>PROJECTS</h3>
        {/* <h2>I am Shruti</h2>
        <h3>DEVELOPER. DEBUGGER. DEBATATE.</h3> */}
        <img  src={image} alt="hi iam shruti" />
      </div>

      {/* <div className="intro_content">
        <p>
          I'm a Front-end Developer based in Berlin, specializing in building
          exceptional websites, applications, and everything in between.
        </p>
      </div> */}
      <div className="intro_cta annim">
        {/* <a href="mailto:random.com">Get In Touch</a> */}
        <AssistantIcon style={{ fontSize: 50 }}/>
      </div>
    </section>
  );
};

export default ProjectsIntro;