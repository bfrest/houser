import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import updateStep3 from "../../ducks/reducer.js";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly_mortgage: "",
      desired_rent: ""
    };
    this.handleForm = this.handleForm.bind(this);
    this.createHouse = this.createHouse.bind(this);
  }

  handleForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async createHouse() {
    const { name, address, city, state, zipcode } = this.state;
    await axios.post("http://localhost:3001/api/createHouse", { name, address, city, state, zipcode }).then();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <input type="url" name="monthly_mortgage" onChange={e => this.handleForm(e)} />
        <input type="url" name="desired_rent" onChange={e => this.handleForm(e)} />

        <Link to="/wizard/step2">
          <button onClick={updateStep3}>Previous Step</button>
        </Link>
        <button onClick={() => this.createHouse()}>Complete</button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     monthly_mortgage: state.monthly_mortgage,
//     desired_rent: state.desired_rent
//   };
// };

// const mapDispatchToProps = () => {
//   return { updateStep3 };
// };

//export default connect(mapStateToProps)(StepThree);
export default StepThree;
