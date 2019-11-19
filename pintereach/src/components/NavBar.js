import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{ width: "30%", display: "flex", justifyContent: "space-between" }}
    >
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
    </div>
  );
};

export default NavBar;
