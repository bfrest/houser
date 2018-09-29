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
      desired_rent: 0,
      recommended_rent: 0
    };
    this.createHouse = this.createHouse.bind(this);
  }

  createHouse() {
    const { name, address, city, state, zipcode, image, monthly_mortgage, desired_rent } = this.props;
    axios.post("http://localhost:3001/api/house", { name, address, city, state, zipcode, image, monthly_mortgage, desired_rent });
  }

  handleRecommendedRent(mortgage) {
    let timesBy25 = mortgage * 0.25;
    let recommended = timesBy25 + parseInt(mortgage);

    // if the input value of monthly mortgage is empty or a string
    // it will default to 0
    if (mortgage) {
      this.setState({ recommended_rent: recommended });
    } else {
      this.setState({ recommended_rent: 0 });
    }
  }

  render() {
    const { updateDesiredRent, updateMonthlyMortgage, desired_rent, monthly_mortgage } = this.props;
    return (
      <div>
        <div>
          <p>Recommended rent: ${this.state.recommended_rent}</p>
        </div>
        <input
          name="monthly_mortgage"
          type="number"
          placeholder="monthly mortgage amount"
          onChange={e => {
            updateMonthlyMortgage(e.target.value);
            this.handleRecommendedRent(e.target.value);
          }}
          defaultValue={monthly_mortgage}
        />
        <input name="desired_rent" placeholder="desired monthly rent" onChange={e => updateDesiredRent(e.target.value)} defaultValue={desired_rent} />

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

function mapStateToProps(state) {
  return {
    monthly_mortgage: state.monthly_mortgage,
    desired_rent: state.desired_rent,
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode,
    image: state.image
  };
}

const mapDispatchToProps = {
  updateMonthlyMortgage: updateMonthlyMortgage,
  updateDesiredRent: updateDesiredRent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3);
