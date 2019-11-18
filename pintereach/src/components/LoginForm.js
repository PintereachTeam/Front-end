import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Pin } from "styled-icons/boxicons-solid/Pin";
import { login } from "../actions/actions";
import { Github } from "styled-icons/boxicons-logos/Github";

const PinRed = styled(Pin)`
  color: red;
  height: 40px;
  width: 40px;
`;

const GithubLogo = styled(Github)`
  color: black;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/home"));
  };

  render() {
    return (
      <>
        <div className="step-2">
          <section className="form-entry">
            <h1>
              <PinRed />
              Pintereach
            </h1>
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.credentials.username}
                onChange={this.changeHandler}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.changeHandler}
                required
              />
              <section className="error-message">
                {this.props.error && <p>{this.props.error}</p>}
              </section>
              <button>
                {this.props.loggingIn ? (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={18}
                    width={18}
                  />
                ) : (
                  "Log in"
                )}
              </button>
            </form>
          </section>
          <section className="account">
            No account? <Link to="/">Sign up</Link>
          </section>
        </div>
        <footer>
          <a href="https://github.com/PintereachTeam">
            <GithubLogo />
          </a>
          <p> &copy; 2019 Pintereach</p>
        </footer>
      </>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(mapStateToProps, { login })(Login);
