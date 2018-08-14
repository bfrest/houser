import React from "react";
import "./Header.css";
import logo from "./house.js";

export default function Header() {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />
      <h2>HOUSER</h2>
    </div>
  );
}
