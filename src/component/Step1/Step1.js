import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateFirstStep } from "../../ducks/reducer.js";

class Step1 extends Component {
  constructor() {
    super();
    // ! make sure you don't have copy of this state in step3
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    // instead of using a function for each input
    // i'm using the name of the form to set it to state!
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { updateFirstStep } = this.props;
    return (
      <div>
        <h1>Add New Listing</h1>
        <form>
          <input placeholder="Name" name="name" onChange={this.handleForm} />
          <input placeholder="Address" name="address" onChange={this.handleForm} />
          <input placeholder="City" name="city" onChange={this.handleForm} />
          <input placeholder="State" name="state" onChange={this.handleForm} />
          <input placeholder="Zipcode" name="zipcode" onChange={this.handleForm} />
        </form>
        <Link to="/wizard/step2">
          {/* Make it so this button fires off the updateFirstStep function and gets all the state */}
          <button onClick={this.props.stepOneInputs}>Next Step</button>
        </Link>

        {// the props are coming from the redux state from the map state function below
        console.log(this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, zipcode } = state;
  return {
    name,
    address,
    city,
    state: state.state,
    zipcode
  };
}

export default connect(
  mapStateToProps,
  {
    updateFirstStep
  }
)(Step1);
