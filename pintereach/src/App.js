import React from "react";
import {Route} from 'react-router-dom';

import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route path='/login' component={LoginForm}/>
      </header>
    </div>
  );
}

export default App;
