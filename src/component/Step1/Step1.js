import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateFirstStep } from "../../ducks/reducer.js";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1>Add New Listing</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" onChange={this.handleForm} />
          <label htmlFor="address">Address</label>
          <input name="address" onChange={this.handleForm} />
          <label htmlFor="city">City</label>
          <input name="city" onChange={this.handleForm} />
          <label htmlFor="state">State</label>
          <input name="state" onChange={this.handleForm} />
          <label htmlFor="zipcode">Zipcode</label>
          <input name="zipcode" onChange={this.handleForm} />
        </form>
        <Link to="/wizard/step2">
          <button onClick={updateFirstStep}>Next Step</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  };
}

export default connect(
  mapStateToProps,
  { updateFirstStep }
)(Step1);
