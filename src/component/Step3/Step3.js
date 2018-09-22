import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateThirdStep } from "../../ducks/reducer.js";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly_mortgage: 0,
      desired_rent: 0
    };
    this.createHouse = this.createHouse.bind(this);
  }

  // We need to get all the shit from redux state to send in the axios request below

  createHouse() {
    const { name, address, city, state, zipcode } = this.state;
    axios.post("http://localhost:3001/api/house", { name, address, city, state, zipcode });
  }

  render() {
    return (
      <div>
        <input name="monthly_mortgage" placeholder="monthly mortgage amount" />
        <input name="desired_rent" placeholder="desired monthly rent" />
        <Link to="/wizard/step2">
          <button onClick={updateThirdStep}>Previous Step</button>
        </Link>
        <Link to="/">
          <button onClick={() => this.createHouse}>Complete</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    monthly_mortgage: state.monthly_mortgage,
    desired_rent: state.desired_rent
  };
}

export default connect(
  mapStateToProps,
  { updateThirdStep }
)(Step3);
