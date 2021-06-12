import React, { useEffect } from "react";
import Aos from "aos";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CoverPage } from "../components/ui/CoverPage";
import { MainInfoScreen } from "../components/ui/MainInfoScreen";
import { ProjectsScreen } from "../components/projects/ProjectsScreen";
import { Phrase } from "../components/ui/Phrase";
import { FooterInfo } from "../components/ui/FooterInfo";
export const AppRouter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
        <Phrase />
        <FooterInfo />
      </div>
    </Router>
  );
};
