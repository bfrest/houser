import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import StepOne from "./StepOne.js";
import StepTwo from "./StepTwo.js";
import StepThree from "./StepThree.js";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>

        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    );
  }
}

export default Wizard;
