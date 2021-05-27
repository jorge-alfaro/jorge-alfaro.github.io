import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CoverPage } from "../components/ui/CoverPage";
import { MainInfoScreen } from "../components/ui/MainInfoScreen";
import { ProjectsScreen } from "../components/projects/ProjectsScreen";
import { FooterInfo } from "../components/ui/FooterInfo";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <CoverPage />
        <MainInfoScreen />
        <Switch>
          <Route exact path="/" component={ProjectsScreen} />
          <Route path="*" component={ProjectsScreen} />
          <Redirect to="/" />
        </Switch>
        <FooterInfo />
      </div>
    </Router>
  );
};
