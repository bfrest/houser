import React, { Component } from "react";
import { Link } from "react-router-dom";

class Step2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <input placeholder="image url" />
        <Link to="/wizard/step1">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default Step2;
