import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const InfoScreen = ({ history }) => {
  const location = useLocation();
  const { id } = useParams();
  const card = location.state[`${id}`];
  const { desc, repo, title, urlarge } = card;

  const gobackhandle = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <div className="card-container-info">
      <div onClick={gobackhandle} className="prev">
        <span>Projects</span>
        <em></em>
      </div>
      <h2 className="project-title">{title}</h2>
      <div className="card-title-screen ">
        <i></i>
      </div>
      <div className="card-img">
        <img
          src={urlarge}
          alt={title}
          className="animate__animated animate__fadeIn"
        />
      </div>
      <div className="animate__animated animate__fadeIn">
        <div className="text">
          <div className="section">
            <h2>About this project</h2>
            <hr />
            <p>{desc} </p>
          </div>
          <div className="section">
            <h2>Technical Sheet</h2>
            <p>
              Code technologies I got involved with while working on this
              project.
            </p>
            <hr />
            <ul>
              {card.tech.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h2>Resources</h2>
            <hr />
            <ul>
              <li>
                Read more at{" "}
                <a target="_blank" href={repo} rel="noreferrer">
                  GitHub repo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
