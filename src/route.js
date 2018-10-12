import React from "react";
import Dashboard from "./component/Dashboard/Dashboard.js";
import { Route, Switch } from "react-router-dom";
import Wizard from "../src/component/Wizard/Wizard.js";
import Step1 from "./component/Wizard/Step1.js";
import Step2 from "./component/Wizard/Step2.js";
import Step3 from "./component/Wizard/Step3.js";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/Wizard" component={Wizard} />
    <Route path="/wizard/step1" component={Step1} />
    <Route path="/wizard/step2" component={Step2} />
    <Route path="/wizard/step3" component={Step3} />
  </Switch>
);
