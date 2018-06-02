import React from "react";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Wizard from "./component/Wizard/Wizard.js";
import { Route, Switch } from "react-router-dom";

export default (
  <div>
    <Route path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </div>
);
