import { faCode } from '@fortawesome/fontawesome-free-solid';
import { faAngular, faCss3, faGithub, faHtml5, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const AboutMe = (props) => {
  return (
    <section className="main about_me" id={props.id}>
      <div className="about_me left">
        <div className="about_img">
          <div style={{border:"2px", borderColor: "white"}} color='#34567g'>gfghf</div>
          {/* <picture>
            <img src={props.img} alt="about_me" />
          </picture> */}
        </div>
      </div>
      <div className="about_me right">
      <div className=" head">
       ABOUT ME
        </div>
        <div className="about_title">
            <h3>Oh my goodness, hello!</h3>
        </div>

        <div className="about_content">
          <p>I'm Shruti, a Full Stack Developer based in Melbourne.</p>
          <p>
            I enjoy turning complex problems into simple solutions. When I’m not
            coding or pushing pixels into components, you’ll find me learning
            new technologies.
          </p>
          <p>
          Some people might be nervous to leave the exciting on-the-job learning and fulfilling teamwork dynamic behind.
           Personally, I'm excited to join the boring, simple, and rarely-evolving world of tech.
          </p>
          <p>Other than coding, I love painting portraits, cooking and making people laugh.</p>
          <a href="mailto:shruti128770@gmail.com">VIEW RESUME</a>
          <p>Here are a few technologies I've been working with recently:</p>
          
                  <div className="icon-container">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faHtml5} style={{ color: '#ec3244' }} className="icon" />
                <div className="icon-text">HTML5</div>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faCss3} style={{ color: '#74C0FC' }}  className="icon" />
                <div className="icon-text">CSS3</div>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faCode} style={{ color: '#FFD43B' }} className="icon" />
                <div className="icon-text">SQL+NoSQL</div>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faReact} style={{ color: '#3dfcff' }}  className="icon" />
                <div className="icon-text">React</div>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faNode} style={{ color: '#008a60' }}  className="icon" />
                <div className="icon-text">Node.js</div>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faAngular} style={{ color: '#8f0000' }}  className="icon" />
                <div className="icon-text">Angular.ts</div>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGithub} style={{ color: '#e6e6e6' }}  className="icon" />
                <div className="icon-text">GitHub</div>
              </div>
            </div>
                </div>
              </div>
      
    </section>
  );
};

export default AboutMe;
