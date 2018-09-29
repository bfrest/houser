import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateDesiredRent, updateMonthlyMortgage } from "../../ducks/reducer.js";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly_mortgage: 0,
      desired_rent: 0
    };
    this.createHouse = this.createHouse.bind(this);
  }

  createHouse() {
    const { name, address, city, state, zipcode } = this.state;
    axios.post("http://localhost:3001/api/house", { name, address, city, state, zipcode });
  }

  render() {
    const { updateDesiredRent, updateMonthlyMortgage, desired_rent, monthly_mortgage } = this.props;

    return (
      <div>
        <input name="monthly_mortgage" placeholder="monthly mortgage amount" onChange={e => updateMonthlyMortgage(e.target.value)} defaultValue={monthly_mortgage} />
        <input name="desired_rent" placeholder="desired monthly rent" onChange={e => updateDesiredRent(e.target.value)} defaultValue={desired_rent} />

        <Link to="/wizard/step2">
          <button>Previous Step</button>
        </Link>

        <Link to="/">
          {/*need to create the house after they hit the button*/}
          <button>Complete</button>
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
  { updateMonthlyMortgage, updateDesiredRent }
)(Step3);
