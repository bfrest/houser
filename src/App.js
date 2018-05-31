import React, { Component } from "react";
import "./App.css";

// components
import Header from "./component/Header/Header.js";
import Wizard from "./component/Wizard/Wizard.js";
import Dashboard from "./component/Dashboard/Dashboard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wizard />
        <Dashboard />
      </div>
    );
  }
}

export default App;
