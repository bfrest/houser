import React, { Component } from "react";
import axios from "axios";

class Step3 extends Component {
  constructor() {
    super();
    state = {};
    this.createHouse = this.createHouse.bind(this);
  }

  createHouse() {
    const { name, address, city, state, zipcode } = this.state;
    axios
      .post(
        `http://localhost:3001/api/house?name=${name}&address=${address}&city=${city}&state=${state}&zipcode=${zipcode}`
      )
      .then(() => {
        // ! make sure it refreshes when you create a new house!!
        console.log("House Created!");
      });
  }
  render() {
    return (
      <div>
        <input placeholder="monthly mortgage amount" />
        <input placeholder="desired monthly rent" />
        <button>Previous Step</button>
        <Link to="/">
          <button onClick={this.createHouse}>Complete</button>
        </Link>
      </div>
    );
  }
}

export default Step3;
