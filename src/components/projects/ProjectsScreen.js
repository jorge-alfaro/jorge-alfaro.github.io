import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../loader/Loader";
import { Project } from "./Project";

export const ProjectsScreen = () => {
  const url =
    "https://portfolio-react-5f0f7-default-rtdb.firebaseio.com/proyects.json";

  let { data } = useFetch(url);

  return (
    <>
      <h1>Projects</h1>
      <div className="container">
        <div className="pos-center ">
          {data === null ? (
            <Loader />
          ) : (
            data.map((el) => (
              <Project
                key={el.id}
                title={el.title}
                url={el.url}
                id={el.id}
                data={data}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
