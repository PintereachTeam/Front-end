import React from "react";
import { NavLink, Router } from "react-router-dom";
import { PageHeader } from "antd";

const NavBar = () => {
  return (
    <div
      style={{ width: "30%", display: "flex", justifyContent: "space-between" }}
    >
      <Router>
        <NavLink to="/" className="NavBtn">
          {" "}
          Signup{" "}
        </NavLink>
        <NavLink to="/" className="NavBtn">
          {" "}
          Login{" "}
        </NavLink>
        <NavLink exact to="/home" className="NavBtn">
          {" "}
          Your Profile{" "}
        </NavLink>
        <NavLink to="/" className="NavBtn">
          {" "}
          Logout{" "}
        </NavLink>
      </Router>
    </div>
  );
};

export default NavBar;
