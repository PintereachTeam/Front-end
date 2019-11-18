import React from "react";
import { Layout, Icon } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/SignUpForm";
import NavBar from "./components/NavBar";
//import PrivateRoute from "./components/PrivateRoute";
import Modal from "./components/Article";
// import Login from './components/Login';
import Home from "./components/Home";

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Router>
      <div className="App">
        <Header
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            background: "white"
          }}
        >
          <h1>Pintereach</h1>
          <h3>Organize Your Research</h3>
          <NavBar style={{ justifyContent: "space-evenly", width: "50%" }} />
        </Header>
        <Content>
          <div className="body">
            {/* <Route exact path='/login' component={Login} /> */}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Modal" component={Modal} />
          </div>

          <Route path="/home" component={Home} />
        </Content>
      </div>
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
    </Router>
  );
}

export default App;
