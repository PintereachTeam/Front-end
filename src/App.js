import React, { useState, useReducer } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Profile from "./components/Profile";
import Article from "./components/Article";
import MainPage from "./components/MainPage";

import PrivateRoute from "./utils/PrivateRoute";
import Modal from "./components/Article";
import BoardPage from "./components/BoardPage";

//testing
import { BoardContext } from "./contexts/BoardContext";
import { articleReducer } from "./reducers/index.js";

function App() {
  const [boardlist, setBoardList] = useState([]);
  const [state, dispatch] = useReducer(articleReducer);
  const [logged, setLogged] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <BoardContext.Provider
      value={{ boardlist, setBoardList, logged, setLogged }}
    >
      <div className="App grey darken-4">
        <NavBar />
        <Route exact path="/" component={LoginForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route exact path="/Modal" component={Modal} />
        <Route exact path="/MainPage" component={MainPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/articles" component={Article} />
        <Route
          path="/articles/:id"
          render={props => <BoardPage {...props} />}
        />
      </div>
    </BoardContext.Provider>
  );
}

export default App;
