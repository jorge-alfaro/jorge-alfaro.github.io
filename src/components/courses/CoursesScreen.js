import React from "react";
import { CoursesList } from "../../components/courses/CoursesList";

export const CoursesScreen = () => {
  return (
    <div>
      <div className="animate__animated animate__fadeIn">
        <CoursesList type={"course"} />
      </div>
    </div>
  );
};
