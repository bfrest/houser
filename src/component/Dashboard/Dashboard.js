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
      allHouses: [],
      searchByRent: ""
    };
    this.deleteHouseById = this.deleteHouseById.bind(this);
    this.getAllHouses = this.getAllHouses.bind(this);
    this.getHousesById = this.getHousesById.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getAllHouses();
  }

  getAllHouses() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  getHousesById() {
    axios.get("http://localhost:3001/api/getHousesById").then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  deleteHouseById(id) {
    axios.delete(`http://localhost:3001/api/houses?id=${id}`).then(() => this.getAllHouses());
  }

  handleSearch(event) {
    this.setState({ searchByRent: event.target.value });
  }

  searchRent(rent) {
    axios.get(`http://localhost:3001/api/house/rent?rent=${rent}`).then(res => {
      this.setState({ allHouses: res.data });
    });
  }

  render() {
    const { allHouses } = this.state;

    return (
      <div className="dashboard-wrapper">
        {console.log(this.state.searchByRent)}
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        <button onClick={() => this.getHousesById()}>Get Your Homes</button>

        <div>
          <input type="text" placeholder="Search By Desired Rent" onChange={e => this.handleSearch(e)} />
          <button onClick={() => this.searchRent(this.state.searchByRent)}>Search</button>
        </div>

        <h2>House Listings</h2>
        <House houseList={allHouses} getHouses={this.componentDidMount} deleteHouse={this.deleteHouseById} />
      </div>
    );
  }
}

export default Dashboard;
