import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.createHouse = this.createHouse.bind(this);
  }

  createHouse() {
    const { name, address, city, state, zipcode } = this.state;
    axios.post("http://localhost:3001/api/house", { name, address, city, state, zipcode });
  }
  render() {
    return (
      <div>
        <input placeholder="monthly mortgage amount" />
        <input placeholder="desired monthly rent" />
        <Link to="/wizard/step2">
          <button>Previous Step</button>
        </Link>
        <Link to="/">
          <button onClick={this.createHouse}>Complete</button>
        </Link>
      </div>
    );
  }
}

export default Step3;
