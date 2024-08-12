import React from "react";
import logo from "./shruti-logo-nobg.png";
const Nav = (props) => {
  return (
    <header className="main">
      <nav className={props.class}>
        <a className="logo" href="/" aria-label="home"><img width={'100px'} src={logo} alt="logo" /></a>
        <div className="main nav">
         
          <a
            className="resume"
            target="_blank"
            href="mailto:shruti128770@gmail.com"
          >
           Get In Touch
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
