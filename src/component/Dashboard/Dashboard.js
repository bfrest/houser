import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

// components
import House from "../House/House.js";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      allHouses: []
    };
    this.deleteHouseById = this.deleteHouseById.bind(this);
    this.getAllHouses = this.getAllHouses.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  getAllHouses() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  deleteHouseById(id) {
    axios.delete(`http://localhost:3001/api/houses?id=${id}`).then(() => this.getAllHouses());
  }

  render() {
    const { allHouses } = this.state;

    return (
      <div className="dashboard-wrapper">
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>

        <Link to="/">
          <button>Cancel</button>
        </Link>
        <h2>House Listings</h2>
        <House houseList={allHouses} getHouses={this.componentDidMount} deleteHouse={this.deleteHouseById} />
      </div>
    );
  }
}

export default Dashboard;
