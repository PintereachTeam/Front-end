import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/icon_white.png";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <img
        className="left brand-logo"
        src={logo}
        alt="pinterech_logo"
        style={{ width: 50, height: 50 }}
      />
      <div className="right hide-on-med-and-down">
        <NavLink to="/signup">Signup</NavLink>
        <br></br>
        <NavLink to="/login">Login</NavLink>
        <br></br>
        <NavLink exact to="/profile">
          Your Profile
        </NavLink>
        <br></br>
        <NavLink to="/">Logout</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
