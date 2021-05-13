import React from "react";

export const CourseImg = ({ name }) => {
  return (
    <>
      <div className="card-img">
        <img src={`./assets/courses/${name}.jpg`} alt={name} />
      </div>
    </>
  );
};
