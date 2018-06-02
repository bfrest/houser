import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
  }

  handleName(event) {
    let nameInput = event.target.value;
    this.setState({ name: nameInput });
  }

  handleAddress(event) {
    let addressInput = event.target.value;
    this.setState({ address: addressInput });
  }

  handleCity(event) {
    let cityInput = event.target.value;
    this.setState({ city: cityInput });
  }

  handleState(event) {
    let stateInput = event.target.value;
    this.setState({ state: stateInput });
  }

  handleZip(event) {
    let zipInput = event.target.value;
    this.setState({ zipcode: zipInput });
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Name" onChange={this.handleName} />
          <input placeholder="Address" onChange={this.handleAddress} />
          <input placeholder="City" onChange={this.handleCity} />
          <input placeholder="State" onChange={this.handleState} />
          <input placeholder="zipcode" onChange={this.handleZip} />
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
