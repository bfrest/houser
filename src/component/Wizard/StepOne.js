import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import updateStep1 from "../../ducks/reducer.js";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props);
    const { name, address, city, zipcode } = this.state;
    return (
      <div>
        <input name="name" onChange={e => this.handleForm(e)} />
        <input name="address" onChange={e => this.handleForm(e)} />
        <input name="city" onChange={e => this.handleForm(e)} />
        <input name="state" onChange={e => this.handleForm(e)} />
        <input name="zipcode" onChange={e => this.handleForm(e)} />
        <Link to="/wizard/step2">
          <button onClick={this.props.updateStep1}>Next Step</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  };
};

// const mapDispatchToProps = () => {
//   return { updateStep1 };
// };

export default connect(
  mapStateToProps,
  { updateStep1 }
)(StepOne);
