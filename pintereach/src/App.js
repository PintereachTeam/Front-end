import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/LoginForm";
import NavBar from "./components/NavBar";

import Signup from "./components/SignUpForm";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </Router>
  );
}
