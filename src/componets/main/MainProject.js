import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
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
        <h4>{mainTitle}</h4>
        <div className="text-content">{content}</div>
        <span>Technologies used:</span>
        <ul className="technologies">{tech}</ul>
        <div className="links-feature">
          <span>External Links: </span>
          <a className="git-hub" href={gitHub} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            className="external-link"
            href={projectLink}
            target="_blank"
            rel="noreferrer"
          >
            <OpenInNewIcon />
          </a>

          <a
            className="external-link"
            href={liveCode}
            target="_blank"
            rel="noreferrer"
          >
            <DeveloperModeIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainProject;
