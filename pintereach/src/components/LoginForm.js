import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_START
} from "../actions/actions.js";

const LoginForm = props => {
  const [login, setLogin] = useState([]);
  const [member, setMember] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = "https://pintereach-backend.herokuapp.com";
    axios
      .post(`${baseURL}/auth/login`, { username: email, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChanges = event => {
    setLogin({ ...member, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <label>Username: </label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={member.name}
      />
      <label>Password: </label>
      <input
        type="password"
        placeholder="password"
        name="password"
        value={member.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
