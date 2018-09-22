import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateSecondStep } from "../../ducks/reducer.js";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  render() {
    return (
      <div>
        <input placeholder="image url" name="image" />
        <Link to="/wizard/step1">
          <button onClick={updateSecondStep}>Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button onClick={updateSecondStep}>Next Step</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    image: state.image
  };
}

export default connect(
  mapStateToProps,
  { updateSecondStep }
)(Step2);
