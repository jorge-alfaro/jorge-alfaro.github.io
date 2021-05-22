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
    <>
      <div className="title-center">
        <h2 id="portfolio" tabIndex="7">
          PROJECTS
        </h2>
      </div>
      <div className="card-container">
        {pro.length === 0 ? (
          <Loader />
        ) : (
          pro.map((el) => (
            <Project
              key={el.id}
              title={el.title}
              url={el.url}
              id={el.id}
              pro={pro}
            />
          ))
        )}
      </div>
    </>
  );
};
