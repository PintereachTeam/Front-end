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

    <nav className="deep-purple darken-3">
    <div className='nav-wrapper #7804eb lighten-2' style={{display:'flex', justifyContent: 'space-between', width: '100%'}}>
     <div>
      <NavLink to="/login"><img className="brand-logo left" src={logo} alt='pinterech_logo' style={{width:50 , height: 50}} /></NavLink>
      </div>
       <div style={{display: 'flex', justifyContent: 'space-between', width: 500}}>
 
       {localStorage.getItem("token") 
        ? <NavLink onClick={logout} to="/login" >Logout</NavLink> 
        : <><NavLink to="/signup" >Signup</NavLink><NavLink to="/login" >

         
        <NavLink to="/signup" >
          Signup
        </NavLink>
        <NavLink to="/login" >

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
</nav>
  
  );
};

export default NavBar;
