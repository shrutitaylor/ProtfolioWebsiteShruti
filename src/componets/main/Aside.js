import React, { useState } from "react";
import { Link } from "react-scroll";
import resumePDF from "./Resume26April2024.pdf";

const Aside = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar after clicking a link
  };

  return (
    <aside ref={ref} className={`${props.class} ${isOpen ? 'open' : ''}`}>
      <div className="aside-content">
        <ol>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
            >
              About
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="resume">
            <a
              className="resume"
              target="_blank"
              href={resumePDF}
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
});

export default Aside;
