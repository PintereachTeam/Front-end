import React, {useState, useContext} from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/icon_white.png'
import {BoardContext} from "../contexts/BoardContext"

const NavBar = (props) => {
  // const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)
  const { logged, setLogged } = useContext(BoardContext);
  const logout = _ => {
    localStorage.removeItem("token")
    setLogged(false)
  }
  return (
    <div className='nav-wrapper'>
     
      <img className="left brand-logo" src={logo} alt='pinterech_logo' style={{width:50 , height: 50}} />
       <div className="right hide-on-med-and-down">
        {localStorage.getItem("token") 
        ? <NavLink onClick={logout} to="/" >Logout</NavLink> 
        : <><NavLink to="/signup" >Signup</NavLink><NavLink to="/login" >
          Login
        </NavLink></>}
        
        
        
        <NavLink exact to="/profile" >
          Your Profile
        </NavLink>
        
        <NavLink to='/articles' >
          Articles
        </NavLink>
        </div>
    </div>
  );
};

export default NavBar;
