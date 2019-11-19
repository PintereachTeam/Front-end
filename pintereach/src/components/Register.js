import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_START
} from "../actions/actions.js";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creds, setCreds] = useState("");

  const handleSubmit = e => {
    e.preventDefault(props);
    const baseURL = "https://pintereach-backend.herokuapp.com";
    axios
      .post(`${baseURL}/auth/register`, { creds })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/Login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Register</p>
      <input
        value={email}
        name="email"
        type="text"
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        name="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
