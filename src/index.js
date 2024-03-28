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
import mainProject2 from "./img/main_project2.JPG";
import mainProject3 from "./img/main_project3.png";
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
              liveCode="https://codesandbox.io/s/thevenue-y49si"
              projectImg={mainProject2}
              projectLink="https://y49si.csb.app/"
              mainTitle="The Venue"
              content="Created a full web page application, with a carousel and countdown timer. Used 
              material-ui to create the website functionality like ToolBar, AppBar, Buttton, Drawer, 
              ListItem. Used react-reveal to add animation such as: Fade,Flip,Rotate,Zoom."
              technologies={[
                "HTML5",
                "CSS3",
                "JS",
                "Material-Ui",
                "React",
                "React-revel",
                "React-scroll,"
              ]}
              gitHub="https://github.com/DONROB3R7/The-Venue"
            />

            <MainProject
              id="projects"
              liveCode="https://codesandbox.io/s/coding-challenges-react-tyxy6"
              projectImg={mainProject3}
              projectLink="https://tyxy6.csb.app/"
              mainTitle="Coding Challenges in React"
              content="Implemented and solved the most popular code challenges in 
              JavaScript such as Fizz Buzz, Harmless Ransom, Palindrome, 
              Caesar Cipher, Reverse Words, Reverse Array, Two Sum, Fibonacci,
               Memoized Fibonacci, Mean Median Mode, Mean Median Mode, Binary Search, 
               Sieve of Eratosthenes, Bubble Sort, Merge Sort, Max Stock Profit."
              technologies={["HTML5", "CSS3", "JS", "React"]}
              gitHub="https://github.com/DONROB3R7/Algorithms-React"
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
