import React from "react";
import logo from "./shruti-logo-nobg.png";
const Nav = (props) => {
  return (
    <header>
      <nav className={props.class}>
        <a className="logo" href="/" aria-label="home"><img width={'100px'} src={logo} alt="logo" /></a>
        <div className="main nav">
          {/* <ul className="nav-list">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
              >
                Contact
              </Link>
            </li> 
          </ul>*/}
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
