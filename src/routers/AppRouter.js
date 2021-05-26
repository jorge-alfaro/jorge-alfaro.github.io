import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoverPage } from "../components/ui/CoverPage";
import { MainInfoScreen } from "../components/ui/MainInfoScreen";
import { ProjectsScreen } from "../components/projects/ProjectsScreen";
import { InfoScreen } from "../components/info/InfoScreen";
import { FooterInfo } from "../components/ui/FooterInfo";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <CoverPage />
        <MainInfoScreen />
        <Switch>
          <Route exact path="/" component={ProjectsScreen} />
          <Route exact path="/projects/:id" component={InfoScreen} />
          <Route path="*" component={ProjectsScreen} />
        </Switch>
        <FooterInfo />
      </div>
    </Router>
  );
};
