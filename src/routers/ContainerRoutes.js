import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { InfoScreen } from "../components/info/InfoScreen";
import { ProjectsScreen } from "../components/projects/ProjectsScreen";

export const ContainerRoutes = () => {
  return (
    <>
      <div className="projects-container">
        <Switch>
          <Route exact path="/projects" component={ProjectsScreen} />
          <Route exact path="/projects/:id" component={InfoScreen} />

          <Redirect to="/projects" />
        </Switch>
      </div>
    </>
  );
};
