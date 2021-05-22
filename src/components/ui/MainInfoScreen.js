import React from "react";

export const MainInfoScreen = () => {
  return (
    <main>
      <div className="title-center">
        <h2 id="about" tabIndex="4">
          ABOUT ME
        </h2>
      </div>
      <div className="about-section">
        <div className="about-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-5f0f7.appspot.com/o/me.jpg?alt=media&token=8c75db82-fb14-4a2a-9c55-430bbf15e71c"
            alt="Jorge Alfaro"
          />
        </div>
        <div className="about-item">
          <p className="about_me" tabIndex="5">
            Developer with over 2 years of front end experience and passion for
            responsive website design and a firm believer in the mobile-first
            approach.{" "}
            <a
              href="https://github.com/jorge-alfaro"
              target="_blank"
              rel="noreferrer"
              title="github/jorge-alfaro"
            >
              github
            </a>
          </p>
          <p className="about_me">
            However, if you have IT interests outside of the front end
            sphere,that definitely helps to round you out as a candidate.
          </p>
        </div>
      </div>
      <br />
    </main>
  );
};
