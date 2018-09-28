import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import updateStep2 from "../../ducks/reducer.js";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  handleForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="url" name="image" onChange={e => this.handleForm(e)} />

        <Link to="/wizard/step1">
          <button onClick={updateStep2}>Previous Step</button>
        </Link>

        <Link to="/wizard/step3">
          <button onClick={updateStep2}>Next Step</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.image
  };
};

// const mapDispatchToProps = () => {
//   return { updateStep2 };
// };

export default connect(mapStateToProps)(StepTwo);
