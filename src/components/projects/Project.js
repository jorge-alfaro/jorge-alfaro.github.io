import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const Project = ({ title, url, id, pro }) => {
  return (
    <div className=" animate__animated animate__pulse">
      <div className="card-item">
        <img src={url} alt={title} />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
        <Link
          to={{ pathname: `./projects/${id}`, state: pro }}
          style={{ textDecoration: "none" }}
        >
          <Button variant="outlined" size="small" color="inherit">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};
