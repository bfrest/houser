import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateName, updateAddress, updateCity, updateState, updateZipcode } from "../../ducks/reducer.js";

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
    const { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Add New Listing</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" onChange={e => updateName(e.target.value)} defaultValue={this.props.name} />
          <label htmlFor="address">Address</label>
          <input name="address" onChange={e => updateAddress(e.target.value)} defaultValue={this.props.address} />
          <label htmlFor="city">City</label>
          <input name="city" onChange={e => updateCity(e.target.value)} defaultValue={this.props.city} />
          <label htmlFor="state">State</label>
          <input name="state" onChange={e => updateState(e.target.value)} defaultValue={this.props.state} />
          <label htmlFor="zipcode">Zipcode</label>
          <input name="zipcode" onChange={e => updateZipcode(e.target.value)} defaultValue={this.props.zipcode} />
        </form>
        <Link to="/wizard/step2">
          <button>Next Step</button>
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
  { updateName, updateAddress, updateCity, updateState, updateZipcode }
)(Step1);
