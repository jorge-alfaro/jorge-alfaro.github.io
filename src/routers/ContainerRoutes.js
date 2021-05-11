import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CoursesScreen } from "../components/courses/CoursesScreen";
import { InfoScreen } from "../components/info/InfoScreen";
import { ProjectsScreen } from "../components/projects/ProjectsScreen";

export const ContainerRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/projects" component={ProjectsScreen} />
          <Route exact path="/courses" component={CoursesScreen} />
          <Route exact path="/projects/:id" component={InfoScreen} />

          <Redirect to="/projects" />
        </Switch>
      </div>
    </>
  );
};
