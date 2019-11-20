import React from "react";
import {Route} from 'react-router-dom';

import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Profile from './components/Profile';
import Article from './components/Article'
import { Layout, Icon  } from "antd";

import PrivateRoute from './utils/PrivateRoute'
import Modal from "./components/Article";
import BoardPage from "./components/BoardPage"

//testing
import AddArticleForm from "./components/AddArticleForm"





const { Footer} = Layout;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AddArticleForm />
        <Route path='/login' component={LoginForm}/>
        <Route path='/signup' component={SignUpForm}/>
        <Route exact path="/Modal" component={Modal} />
        <PrivateRoute path='/profile' component={Profile}/>
        <Route path="/articles/:id" render={props => <BoardPage {...props}/>}/>
        <Route path='/articles' component={Article}/>


      </header>

      <Footer
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "auto 50%"
        }}
      >
        <span>Copyright Pintereach 2019</span>{" "}
        <span>
          <a href="https://github.com/PintereachTeam">
            <Icon type="github" />
          </a>
        </span>
      </Footer>
   </div>

  );
}

export default App;
