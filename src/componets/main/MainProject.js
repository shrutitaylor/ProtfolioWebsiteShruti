import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

const MainProject = (props) => {
  const {
    projectImg,
    projectLink,
    mainTitle,
    content,
    technologies,
    gitHub,
    liveCode,
    bigTitle
  } = props;

  // Render technologies from index.js script
  const tech = technologies.map((tech, index) => <li key={index}>{tech}</li>);

  return (
    <section style={{marginTop : "50px"}} className="main main-project" id={props.id}>
      {bigTitle ? (
        <div className="experience_title">
          <h3>{bigTitle}</h3>
        </div>
      ) : null}
      <a
        className="img-container"
        href={projectLink}
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImg} alt={projectLink} />
      </a>
      <div className="left-container">
        <h4 className="project_title">{mainTitle}</h4>
        <div className="text-content">{content}</div>
        <span>Technologies used:</span>
        <ul className="technologies">{tech}</ul>
        <div className="links-feature">
          <a className="git-hub" href={gitHub} target="_blank" rel="noreferrer">
            <GitHubIcon style={{fontSize:"4.5rem"}} />
          </a>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="live-site-button">LIVE SITE</a>
          
        </div>
      </div>
    </section>
  );
};

export default MainProject;
