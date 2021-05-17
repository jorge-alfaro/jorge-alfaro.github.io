import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const InfoScreen = ({ history }) => {
  const location = useLocation();
  const { id } = useParams();
  const card = location.state[`${id}`];
  const { desc, repo, title, url } = card;

  const gobackhandle = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <div className="card-container-info">
      <ArrowBackIosIcon
        className="project-backarrow"
        color="primary"
        style={{ fontSize: 55 }}
        onClick={gobackhandle}
      ></ArrowBackIosIcon>
      <div className="card-img">
        <img
          src={url}
          alt={title}
          className="animate__animated animate__fadeInDown"
        />
      </div>
      <div className="animate__animated animate__fadeIn">
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">
          {desc}{" "}
          <a target="_blank" href={repo} rel="noreferrer">
            GitHub repo
          </a>
        </p>
      </div>
    </div>
  );
};
