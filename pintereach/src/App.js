import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Boards from "./components/Boards";
import Login from "./components/LoginForm";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={UserHome} />
          <PrivateRoute exact path="/add-board" component={Boards} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
        </div>
      </div>
    </Router>
  );
}
