import React from "react";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Wizard from "./component/Wizard/Wizard.js";
import { Route } from "react-router-dom";
import Step1 from "./component/Step1/Step1.js";

export default (
  <div>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard/step1" component={Step1} />
  </div>
);
