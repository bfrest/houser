import React, { Component } from "react";
import { Route } from "react-router-dom";
import Step1 from "../Step1/Step1.js";
import Step2 from "../Step2/Step2.js";
import Step3 from "../Step3/Step3.js";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleForm = this.handleForm.bind(this);
  }

  render() {
    return (
      <div>
        <Route path="/wizard/step1" component={Step1} />
        <Route path="/wizard/step2" component={Step2} />
        <Route path="/wizard/step3" component={Step3} />

        <input type="text" name="name" onChange={this.handleForm} />
        <input type="text" name="address" onChange={this.handleForm} />
        <input type="text" name="city" onChange={this.handleForm} />
        <input type="text" name="state" onChange={this.handleForm} />
        <input type="text" name="zipcode" onChange={this.handleForm} />
      </div>
    );
  }
}

export default Wizard;
