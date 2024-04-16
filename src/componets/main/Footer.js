import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="socialMedia">
        <ul>
          <li>
            <a
              href="https://github.com/shrutitaylor/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>

            <a
              href="https://www.linkedin.com/in/shruti-ms/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
            <a
              href="https://github.com/shrutitaylor/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <CodeIcon style={{ fontSize: 30 }} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
