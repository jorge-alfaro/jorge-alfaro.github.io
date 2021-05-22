import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ title, url, id, pro }) => {
  return (
    <div className=" animate__animated animate__pulse">
      <div className="card-item">
        <Link
          to={{ pathname: `./projects/${id}`, state: pro }}
          style={{ textDecoration: "none" }}
        >
          <div className="card-title-screen">
            <h2>{title}</h2>
            <i></i>
          </div>
          <div className="image image--close">
            <div className="main">
              <picture className="main-img ">
                <img src={url} alt={title} />
              </picture>
              <h3 className="image__title--close" title={title}>
                Read more
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
