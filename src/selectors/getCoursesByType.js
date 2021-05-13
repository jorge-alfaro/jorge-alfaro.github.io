import { courses } from "../data/courses";

export const getCoursesByType = (type) => {
  const validCourses = ["course"];
  if (!validCourses.includes(type)) {
    throw new Error(`Course "${type}" it's not correct`);
  }
  return courses.filter((cour) => cour.type === type);
};
