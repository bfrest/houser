import React from "react";
import Dashboard from "./component/Dashboard/Dashboard.js";
import { Switch, Route } from "react-router-dom";
import Wizard from "./component/Wizard/Wizard.js";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/Wizard" component={Wizard} />
  </Switch>
);
