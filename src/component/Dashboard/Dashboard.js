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
    this.deleteHouseById = this.deleteHouseById.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  deleteHouseById(id) {
    axios
      .delete(`http://localhost:3001/api/houses?id=${id}`)
      .then(this.componentDidMount);
  }

  render() {
    const { allHouses } = this.state;

    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <House
          houseList={allHouses}
          getHouses={this.componentDidMount}
          deleteHouse={this.deleteHouseById}
        />
      </div>
    );
  }
}

export default Dashboard;
