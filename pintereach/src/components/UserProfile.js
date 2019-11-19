import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { logout } from "../actions/actions";

class UserProfile extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
    window.location.href = "https://pintereach.netlify.com/";
  };

  render() {
    return (
      <div className="profile">
        <button onClick={this.logout}>
          {this.props.loggingOut ? (
            <Loader type="TailSpin" color="white" height={18} width={18} />
          ) : (
            "Log out"
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingOut, articles }) => ({
  loggingOut,
  articles
});

export default connect(mapStateToProps, { logout })(UserProfile);
