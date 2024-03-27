import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { Component } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const value = this.state.value;
    return (
      <React.Fragment>
        <div className="experience_title" style={{marginTop : "50px"}}>
          <h3>Where I Have Worked</h3>
        </div>

        <div className="jss92" id={this.props.id}>
          <Tabs
            orientation={this.props.orientation}
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
            className="jss93"
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderRight: 1, borderColor: '#B3D9F1', borderWidth:'100px' }}
          >
            <Tab
              label="Freaks4U GmbH"
              id="vertical-tab-0"
              aria-controls="vertical-tabpanel-0"
            />
            <Tab
              label="Nexern Gmbh"
              id="vertical-tab-1"
              aria-controls="vertical-tabpanel-1"
            />
            <Tab
              label="Nexern Gmbh"
              id="vertical-tab-2"
              aria-controls="vertical-tabpanel-2"
            />
            <Tab
              label="Ibps Gmbh"
              id="vertical-tab-2"
              aria-controls="vertical-tabpanel-2"
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <h3>
              <span>Front End Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.freaks4u.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  BrandOPCSoultions
                </a>
              </span>
            </h3>
            <p className="timeline">Oct 2023 - Jan 2024</p>

            <ul className="company-jobs">
              <li>
                Collaborated closely with the team to support projects during
                all phases of delivery.
              </li>
              <li>Brought mock-ups to life using HTML, CSS, JavaScript.</li>
              <li>Worked with a custom CSM.</li>
              <li>
                Developed and optimised complex websites using React, PHP, CSS,
                HTML.
              </li>
              <li>
                Developed and maintained code for in-house and client websites.
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3>
              <span>Front End Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.nexern.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Ford Credit "(IT)"
                </a>
              </span>
            </h3>
            <p className="timeline">Sep 2021 - Jan 2023</p>

            <ul className="company-jobs">
              <li>Created user interfaces using React.</li>
              <li>
                Used jQuery to make the HTML and CSS interact with the
                JavaScript functions, in order to develop dynamic web pages.
              </li>
              <li>
                Communicated and collaborated with different departaments, from
                designers, project managers, content writers, Seo experts; added
                new Front-End features to existent websites.
              </li>
              <li>
                Developed and optimised a complex betting calculator app with
                over 30 different bet types.
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3>
              <span>Junior Front End Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.nexern.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Ford Credit "(IT)"
                </a>
              </span>
            </h3>
            <p className="timeline">Sep 2021 - Jan 2023</p>

            <ul className="company-jobs">
              <li>Searched and fixed small errors in CSS.</li>
              <li>Updated the new elements for the new content.</li>
              <li>Used Dev Tools on Chrome and Firefox for fixing bugs.</li>
              <li>Updated and created the new PHP scripts.</li>
              <li>Worked closely with designers, creating great interfaces.</li>
              <li>Worked extensively with Javascript, HTML5 and CSS3.</li>
            </ul>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <h3>
              <span>Junior Front-end Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <span className="inline-link">Ibps Gmbh</span>
              </span>
            </h3>
            <p className="timeline">Nov 2015 - Jun 2016</p>

            <ul className="company-jobs">
              <li>
                Created layouts in Photoshop and turned them into working
                websites
              </li>
              <li>Created flavicon icon designs.</li>
              <li>Used Dev Tools on Chrome and Firefox for fixing bugs.</li>
              <li>Created 3D effects and animations with CSS3.</li>
              <li>
                Manually tested sites in various browsers and mobile devices to
                ensure responsiveness
              </li>
            </ul>
          </TabPanel>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
