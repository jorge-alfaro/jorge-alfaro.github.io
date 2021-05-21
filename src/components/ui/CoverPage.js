import React from "react";
import { Link } from "react-scroll";

export const CoverPage = () => {
  return (
    <>
      <div className="container-intro">
        <div className="hello-intro">
          <h1 tabIndex="1">I'M JORGE</h1>
        </div>

        <ul>
          <li>
            <Link
              to="about"
              className="about"
              smooth={true}
              duration={1000}
              tabIndex="2"
            >
              ABOUT ME
            </Link>
          </li>

          <li>
            <Link
              to="portfolio"
              className="portfolio"
              smooth={true}
              duration={1000}
              tabIndex="3"
            >
              PORTFOLIO
            </Link>
          </li>
        </ul>
      </div>
      <Link data-scroll to="about" smooth={true} duration={1000}>
        <div className="scroll_down">
          <svg
            id="arrow"
            width="19px"
            height="19px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              id="Triangle-1"
              transform="translate(9.500000, 9.500000) rotate(-180.000000) translate(-9.500000, -9.500000) "
              points="9.5 0 19 19 0 19 "
            ></polygon>
          </svg>
        </div>
      </Link>
    </>
  );
};
