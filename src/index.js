import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Zoom from "react-reveal/Zoom";
import AboutMe from "./componets/main/AboutMe";
import Aside from "./componets/main/Aside";
import Footer from "./componets/main/Footer";
import GetInTouch from "./componets/main/GetInTouch";
import Intro from "./componets/main/Intro";
import MainProject from "./componets/main/MainProject";
import Nav from "./componets/main/Nav";
import ProjectsIntro from "./componets/main/ProjectsIntro";
// Images

import SoilOrganicWebsite from "./img/SoilOrganicWebsite.png";
import AboutMeImg from "./img/shrutidp.jpg";

// Resume

import "./styles.css";

class Main extends Component {
  constructor(props) {
    const orientation = window.innerWidth < 700 ? "horizontal" : "vertical";
    super(props);
    this.wrapperAside = React.createRef();
    this.wrapperHamburgerButton = React.createRef();
    this.state = { menuIsOpen: false, orientation: orientation };
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperAside &&
      !this.wrapperAside.current.contains(event.target)
    ) {
      if (this.state.menuIsOpen) {
        if (!this.wrapperHamburgerButton.current.contains(event.target)) {
          this.toggleMenu();
        }
      }
    }
  };

  handleResize = (event) => {
    const windowSize = window.innerWidth;
    if (windowSize < 700) {
      this.setState({ menuIsOpen: false, orientation: "horizontal" });
    } else {
      this.setState({ orientation: "vertical" });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("resize", this.handleResize);
  }

  bodyOverFlow = () => {
    if (!this.state.menuIsOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
    this.bodyOverFlow();
  };

  render() {
    this.bodyOverFlow();
    const menuIsOpen = this.state.menuIsOpen;
    return (
      <React.Fragment>
        <div className="hamburger-content">
          <ul
            ref={this.wrapperHamburgerButton}
            className={
              menuIsOpen ? "open hamburger-button" : "close hamburger-button"
            }
            onClick={this.toggleMenu}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Aside ref={this.wrapperAside} class={menuIsOpen ? "open" : "close"} />
        <Nav />
        <section className={menuIsOpen ? "blur" : null}>
          <Zoom>
            <Intro />
          </Zoom>
          <Zoom>
            <AboutMe id="about" img={AboutMeImg} />
          </Zoom>
          {/* <Zoom>
            <Experience id="experience" orientation={this.state.orientation} />
          </Zoom> */}
          <Zoom>
            <ProjectsIntro />
          </Zoom>
          <Zoom>
           

            <MainProject
              id="projects"
              liveCode="https://shrutitaylor.github.io/SoilOrganicFood.github.io/"
              projectImg={SoilOrganicWebsite}
              projectLink="https://shrutitaylor.github.io/SoilOrganicFood.github.io/"
              mainTitle="Soil Organic Grocery"
              content="Created a full web page application, with Login Authentication. Used 
              React to create the website functionality. It has all the Cart functionalities required for a Online shopping Website.
              Used react-reveal to add animation such as: Fade,Flip,Rotate,Zoom."
              technologies={[
                "React",
                "HTML5",
                "CSS3",
                "JS",
                "React",
                "React-revel",
                "React-scroll"
              ]}
              gitHub="https://github.com/shrutitaylor/SoilOrganicFood.github.io"
            />

          

          
          </Zoom>
          <Zoom>
            <GetInTouch id="contact" />
          </Zoom>
          <Zoom>
            <Footer />
          </Zoom>
        </section>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
