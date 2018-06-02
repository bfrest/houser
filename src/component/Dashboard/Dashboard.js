import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// components
import House from "../House/House.js";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      allHouses: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/houses").then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  render() {
    const { allHouses } = this.state;
    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <House houseList={allHouses} />
      </div>
    );
  }
}

export default Dashboard;
