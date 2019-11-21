import React from "react";
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
import AddArticleForm from "./components/AddArticleForm"








function App() {
  return (
    <div className="App grey darken-4">
        <NavBar />
        <AddArticleForm />
        <Route path='/login' component={LoginForm}/>
        <Route path='/signup' component={SignUpForm}/>
        <Route exact path="/Modal" component={Modal} />
        <PrivateRoute path='/profile' component={Profile}/>
        <Route path="/articles/:id" render={props => <BoardPage {...props}/>}/>
        <Route path='/articles' component={Article}/>
   </div>

  );
}

export default App;
