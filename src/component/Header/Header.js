import React from "react";
import "./Header.css";
import logo from "./house.js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-wrapper">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>{" "}
      <h2>HOUSER</h2>
    </div>
  );
}
