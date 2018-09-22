import React from "react";
import Dashboard from "./component/Dashboard/Dashboard.js";
import { Route } from "react-router-dom";
import Step1 from "./component/Step1/Step1.js";
import Step2 from "./component/Step2/Step2.js";
import Step3 from "./component/Step3/Step3.js";

export default (
  <div>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard/step1" component={Step1} />
    <Route path="/wizard/step2" component={Step2} />
    <Route path="/wizard/step3" component={Step3} />
  </div>
);
