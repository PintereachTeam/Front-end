// IMPORTS

import axios from "axios";

// EXPORTS

export const LOGIN_START = "LOGIN_START";
export const SIGNUP_START = "SIGNUP_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// LOGIN ACTION '.POST'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://pintereach-backend.herokuapp.com/login", creds) //  <- ADD PATH
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    });
};

// SIGNUP ACTION '.POST'

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://pintereach-backend.herokuapp.com/register", creds) //  <- ADD PATH
    .then(res => {
      return axios
        .post("https://pintereach-backend.herokuapp.com//login", creds) //  <- ADD PATH
        .then(res => {
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        });
    });
};

// ADD ARTICLE

export const ADD_ARTICLE_START = "ADD_ARTICLE_START";
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE";

export const addArticle = article => dispatch => {
  dispatch({ type: ADD_ARTICLE_START });
  axios
    .post(
      "pintereach-backend.herokuapp.com//articles/createnewarticle",
      article,
      {
        // <- ADD PATH
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      dispatch({ type: ADD_ARTICLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// DELETE ARTICLE

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteArticle = article => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`pintereach-backend.herokuapp.com//articles/${article.articleId}`, {
      // <- ADD PATH
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      window.location.reload();
    })

    .catch(err => {
      dispatch({ type: DELETE_FAILURE, payload: err.response });
    });
};

// GET ALL

export const GET_ALLDATA_START = "GET_ALLDATA_START";
export const GET_ALLDATA_SUCCESS = "GET_ALLDATA_SUCCESS";
export const GET_ALLDATA_FAILURE = "GET_ALLDATA_FAILURE";

export const getAllData = id => dispatch => {
  dispatch({ type: GET_ALLDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/articles", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_ALLDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALLDATA_FAILURE, payload: err.response });
    });
};

// GET BY ID

export const GET_IDDATA_START = "GET_IDDATA_START";
export const GET_IDDATA_SUCCESS = "GET_IDDATA_SUCCESS";
export const GET_IDDATA_FAILURE = "GET_IDDATA_FAILURE";

export const getIdData = id => dispatch => {
  dispatch({ type: GET_IDDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/article/{articleId}", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_IDDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_IDDATA_FAILURE, payload: err.response });
    });
};

// GET BY USERNAME

export const GET_USERDATA_START = "GET_USERDATA_START";
export const GET_USERDATA_SUCCESS = "GET_USERDATA_SUCCESS";
export const GET_USERDATA_FAILURE = "GET_USERDATA_FAILURE";

export const getUserData = id => dispatch => {
  dispatch({ type: GET_USERDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/user/{username}", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERDATA_FAILURE, payload: err.response });
    });
};

// Logout

export const logout = () => dispatch => {
  dispatch();
  localStorage.clear();
  dispatch();
};
