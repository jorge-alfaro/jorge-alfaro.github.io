import React from "react";

export const MainInfoScreen = () => {
  return (
    <main>
      <div className="title-center">
        <h2 id="about">ABOUT ME</h2>
      </div>
      <p className="about_me">
        The idea behind this project was to create a showcase of everything I've
        worked on in the past few years.{" "}
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
      <div className="title-center">
        <h2 id="portfolio">PROJECTS</h2>
      </div>
    </main>
  );
};
