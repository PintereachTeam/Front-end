// IMPORTS

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

// COMPOSE

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// REDUX STORE

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// RENDER

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
