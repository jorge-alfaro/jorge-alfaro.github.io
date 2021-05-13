import React from "react";
import { getCoursesByType } from "../../selectors/getCoursesByType";
import { CourseImg } from "./CourseImg";

export const CoursesList = ({ type }) => {
  const course = getCoursesByType(type);

  return (
    <>
      {course.map((ele) => (
        <CourseImg key={ele.id} {...ele} />
      ))}
    </>
  );
};
