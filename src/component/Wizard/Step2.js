import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImage } from "../../ducks/reducer.js";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  render() {
    const { updateImage, image } = this.props;
    return (
      <div>
        <input placeholder="image url" name="image" onChange={e => updateImage(e.target.value)} defaultValue={image} />
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

function mapStateToProps(state) {
  return {
    image: state.image
  };
}

const mapDispatchToProps = {
  updateImage: updateImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2);
