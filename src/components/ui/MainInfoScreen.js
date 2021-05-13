import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

export const MainInfoScreen = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main>
      <p className="about_me">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
        rerum sunt. Check out my
        <a
          href="https://github.com/jorge-alfaro"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        !
      </p>
      <br />
      <div className="about_me">
        <h3>
          Get in touch with me here:
          <br />
        </h3>

        <ol>
          <li>
            <a
              href="https://www.linkedin.com/in/jorge-alfaro-495b4a207/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin redes"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/jorge-alfaro"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github redes"></i>
            </a>
          </li>

          <li>
            <a href="mailto:jorgm.alfarc@gmail.com">
              <i className="fas fa-envelope redes"></i>
            </a>
          </li>
        </ol>
      </div>
      <div className="center">
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="none"
          >
            <Tab label="Projects" to="/projects" component={Link} />
            <Tab label="Courses" to="/courses" component={Link} />
          </Tabs>
        </Paper>
      </div>
    </main>
  );
};
