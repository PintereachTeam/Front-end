import React from "react";

import { Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import { Layout, Icon } from "antd";
import PrivateRoute from "./components/PrivateRoute";
import Modal from "./components/Article";
import Home from "./components/Home";

function App() {
  const { Footer } = Layout;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <PrivateRoute exact path="/Modal" component={Modal} />
        <PrivateRoute path="/home" component={Home} />
      </header>



        <span>Copyright Pintereach 2019</span>{" "}
        <span>
          <a href="https://github.com/PintereachTeam">
            <Icon type="github" />
          </a>
        </span>

    </div>
  );
}
export default App;
