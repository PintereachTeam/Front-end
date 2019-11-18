import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Pin } from "styled-icons/boxicons-solid/Pin";
import { register } from "../actions/actions";
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

class Signup extends React.Component {
  state = {
    signupCredentials: {
      email: "",
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      signupCredentials: {
        ...this.state.signupCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props
      .signup(this.state.signupCredentials)
      .then(() => this.props.history.push("/home"));
  };

  render() {
    return (
      <>
        <div className="step-1">
          <section className="form-entry">
            <h1>
              <PinRed />
              Pintereach
            </h1>
            <h2>Sign up to connect with researchers</h2>
            <form onSubmit={this.signup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.signupCredentials.email}
                onChange={this.changeHandler}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.signupCredentials.username}
                onChange={this.changeHandler}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.signupCredentials.password}
                onChange={this.changeHandler}
                required
              />
              <button>
                {this.props.loggingIn ? (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={18}
                    width={18}
                  />
                ) : (
                  "Sign up"
                )}
              </button>
            </form>
          </section>
          <section className="account">
            Already have an account? <Link to="/login">Log in</Link>
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
const mapStateToProps = ({ register, loggingIn }) => ({
  register,
  loggingIn
});
export default connect(mapStateToProps, { register })(Signup);
