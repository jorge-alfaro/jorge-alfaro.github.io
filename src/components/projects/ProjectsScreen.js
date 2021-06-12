import React, { useState, useEffect } from "react";
import { getProjects } from "../../helpers/getProjects";
import { Loader } from "../loader/Loader";
import { Project } from "./Project";

export const ProjectsScreen = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    getProjects().then(setPro);
  }, []);

  return (
    <div>
      <div className="projects-container" id="portfolio">
        <div className="title-center" data-aos="fade-up">
          <h2 tabIndex="9">PROJECTS</h2>
        </div>
        <div className="card-container">
          {pro.length === 0 ? (
            <Loader />
          ) : (
            pro.map((el) => <Project key={el.id} {...el} />)
          )}
        </div>
      </div>
    </div>
  );
};
