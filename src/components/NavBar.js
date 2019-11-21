import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div
      style={{ width: "30%", display: "flex", justifyContent: "space-between", alignContent: 'start', color: 'white', textDecoration: 'none' }}
    >
      <img src='/src/img/icon_white.png' alt='pinterech_logo'/>
        <NavLink to="/signup" className="NavBtn">
          Signup
        </NavLink>
        <NavLink to="/login" className="NavBtn">
          Login
        </NavLink>
        <NavLink exact to="/profile" className="NavBtn">
          Your Profile
        </NavLink>
        <NavLink to="/" className="NavBtn">
          Logout
        </NavLink>
        <NavLink to='/articles' className='NavBtn'>
          Articles
        </NavLink>
     
    </div>
  );
};

export default NavBar;
