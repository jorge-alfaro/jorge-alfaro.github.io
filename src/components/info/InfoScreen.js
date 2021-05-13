import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
    <>
      <div className="project-backarrow">
        <ArrowBackIcon
          color="primary"
          style={{ fontSize: 55 }}
          onClick={gobackhandle}
        ></ArrowBackIcon>
      </div>
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
          <a target="_blank" href={repo}>
            GitHub repo
          </a>
        </p>
      </div>
    </>
  );
};
