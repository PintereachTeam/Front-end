import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/icon_white.png'

const NavBar = () => {
  return (
    <nav className="deep-purple darken-3">
    <div className='nav-wrapper #7804eb lighten-2' style={{display:'flex', justifyContent: 'space-between', width: '100%'}}>
     <div>
      <img className="brand-logo left" src={logo} alt='pinterech_logo' style={{width:50 , height: 50}} />
      </div>
       <div style={{display: 'flex', justifyContent: 'space-between', width: 500}}>
         
        <NavLink to="/signup" >
          Signup
        </NavLink>
        <NavLink to="/login" >
          Login
        </NavLink>
        <NavLink exact to="/profile" >
          Your Profile
        </NavLink>
        <NavLink to="/" >
          Logout
        </NavLink>
        <NavLink to='/articles' >
          Articles
        </NavLink>
        </div>
    </div>
</nav>
  
  );
};

export default NavBar;
