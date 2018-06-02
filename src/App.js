import React, { Component } from "react";
import "./App.css";

// components
import Header from "./component/Header/Header.js";
import routes from "./route.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
