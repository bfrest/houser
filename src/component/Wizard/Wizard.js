import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Step1 from "../Step1/Step1.js";
import Step2 from "../Step2/Step2.js";
import Step3 from "../Step3/Step3.js";

class Wizard extends Component {
  render() {
    return (
      <div>
        <Route path="/wizard/step1" Component={Step1} />
        <Route path="/wizard/step2" Component={Step2} />
        <Route path="/wizard/step3" Component={Step3} />
      </div>
    );
  }
}

export default Wizard;
