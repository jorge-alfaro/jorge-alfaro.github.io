import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="title-center">
        <h2 id="portfolio" tabIndex="7">
          CONTACT
        </h2>
      </div>
      <div className="about_me">
        <h3 tabIndex="6">
          Sientete libre de contactarme en español o ingles. Get in touch with
          me here:
          <br />
        </h3>

        <ol>
          <li>
            <a
              href="https://www.linkedin.com/in/jorge-alfaro-495b4a207/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin redes"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/jorge-alfaro"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <i className="fab fa-github redes"></i>
            </a>
          </li>

          <li>
            <a href="mailto:jorgm.alfarc@gmail.com" title="Email">
              <i className="fas fa-envelope redes"></i>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};
