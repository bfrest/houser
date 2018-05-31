import React, { Component } from "react";

// components
import House from "../House/House.js";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>This is the Dashboard</p>
        <House />
      </div>
    );
  }
}

export default Dashboard;
