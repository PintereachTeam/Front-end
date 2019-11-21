import React, {useState} from "react";
import {Route} from 'react-router-dom';

import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Profile from './components/Profile';
import Article from './components/Article'


import PrivateRoute from './utils/PrivateRoute'
import Modal from "./components/Article";
import BoardPage from "./components/BoardPage"

//testing
import { BoardContext } from "./contexts/BoardContext";








function App() {
  const [boardlist, setBoardList] = useState([]);
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)
  
  return (
    <BoardContext.Provider
      value={{ boardlist, setBoardList, logged, setLogged }}
    >
      <div className="App grey darken-4">
          <NavBar />
          <Route exact path='/' component={LoginForm}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/signup' component={SignUpForm}/>
          <Route exact path="/Modal" component={Modal} />
          <PrivateRoute path='/profile' component={Profile}/>
          <Route exact path='/articles' component={Article}/>
          <Route path="/articles/:id" render={props => <BoardPage {...props}/>}/>
          
    </div>
   </BoardContext.Provider>

  );
}

export default App;
