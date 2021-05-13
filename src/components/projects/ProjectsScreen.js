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
      <div className="container">
        <div className="pos-center ">
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
      </div>
    </>
  );
};
