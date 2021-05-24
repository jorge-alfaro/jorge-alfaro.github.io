import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoverPage } from "../components/ui/CoverPage";
import { MainInfoScreen } from "../components/ui/MainInfoScreen";
import { FooterInfo } from "../components/ui/FooterInfo";
// import { Contact } from "../components/ui/Contact";
// import { SectionSkills } from "../components/ui/SectionSkills";
import { ContainerRoutes } from "./ContainerRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <CoverPage />

        <MainInfoScreen />
        <Switch>
          <Route path="/" component={ContainerRoutes} />
        </Switch>
        {/* <Contact /> */}
        {/* <SectionSkills type={"logo"} /> */}
        <FooterInfo />
      </div>
    </Router>
  );
};
