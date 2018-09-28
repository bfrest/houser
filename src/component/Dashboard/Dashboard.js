import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House.js";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.getAllHouses = this.getAllHouses.bind(this);
    this.deleteHouseById = this.deleteHouseById.bind(this);
  }

  componentDidMount() {
    this.getAllHouses();
  }

  getAllHouses() {
    axios.get("http://localhost:3001/api/getHouses").then(res => {
      this.setState({ houses: [...res.data] });
    });
  }

  async deleteHouseById(id) {
    await axios.delete(`http://localhost:3001/api/deleteHouse?id=${id}`).then();
    this.getAllHouses();
  }

  render() {
    return (
      <div>
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>

        {this.state.houses.map(house => {
          return <House houseInfo={house} key={house.id} delete={this.deleteHouseById} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
