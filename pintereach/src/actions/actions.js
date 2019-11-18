// IMPORTS

import axios from "axios";

// EXPORTS

export const LOGIN_START = "LOGIN_START";
export const REGISTER_START = "REGISTER_START";
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

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
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

export const ADD_BOARD_START = "ADD_BOARD_START";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

export const addBoard = Board => dispatch => {
  dispatch({ type: ADD_BOARD_START });
  axios
    .post("pintereach-backend.herokuapp.com/boards", Board, {
      // <- ADD PATH
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: ADD_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
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
// DELETE BOARD

export const DELETE_BOARD_START = "DELETE_BOARD_START";
export const DELETE_BOARD_SUCCESS = "DELETE_BOARD_SUCCESS";
export const DELETE_BOARD_FAILURE = "DELETE_BOARD_FAILURE";

export const deleteBoard = Board => dispatch => {
  dispatch({ type: DELETE_BOARD_START });
  axios
    .delete(`pintereach-backend.herokuapp.com/board/${Board.BoardId}`, {
      // <- ADD PATH
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      window.location.reload();
    })

    .catch(err => {
      dispatch({ type: DELETE_BOARD_FAILURE, payload: err.response });
    });
};
// DELETE BOARD

export const DELETE_BOARDUSER_START = "DELETE_BOARDUSER_START";
export const DELETE_BOARDUSER_SUCCESS = "DELETE_BOARDUSER_SUCCESS";
export const DELETE_BOARDUSER_FAILURE = "DELETE_BOARDUSER_FAILURE";

export const deleteBoardUser = Board => dispatch => {
  dispatch({ type: DELETE_BOARDUSER_START });
  axios
    .delete(`pintereach-backend.herokuapp.com/board/${Board.UserId}`, {
      // <- ADD PATH
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      window.location.reload();
    })

    .catch(err => {
      dispatch({ type: DELETE_BOARDUSER_FAILURE, payload: err.response });
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

// GET ALL ARTICLES

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
// GET ALL BOARDS

export const GET_ALLBOARDSDATA_START = "GET_ALLBOARDSDATA_START";
export const GET_ALLBOARDSDATA_SUCCESS = "GET_ALLBOARDSDATA_SUCCESS";
export const GET_ALLBOARDSDATA_FAILURE = "GET_ALLBOARDSDATA_FAILURE";

export const getAllBoardsData = id => dispatch => {
  dispatch({ type: GET_ALLBOARDSDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/boards", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_ALLBOARDSDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALLBOARDSDATA_FAILURE, payload: err.response });
    });
};
// GET ALL User

export const GET_ALLUSER_START = "GET_ALLUSER_START";
export const GET_ALLUSER_SUCCESS = "GET_ALLUSER_SUCCESS";
export const GET_ALLUSER_FAILURE = "GET_ALLUSER_FAILURE";

export const getAllUSER = id => dispatch => {
  dispatch({ type: GET_ALLUSER_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_ALLUSER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALLUSER_FAILURE, payload: err.response });
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
// GET BY ID

export const GET_IDUSERDATA_START = "GET_IDUSERDATA_START";
export const GET_IDUSERDATA_SUCCESS = "GET_IDUSERDATA_SUCCESS";
export const GET_IDDUSERATA_FAILURE = "GET_IDUSERDATA_FAILURE";

export const getIdUserData = id => dispatch => {
  dispatch({ type: GET_IDUSERDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/users/{userId}", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_IDUSERDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_IDDUSERATA_FAILURE, payload: err.response });
    });
};
// GET BY BOARDS

export const GET_USERDATA_START = "GET_USERDATA_START";
export const GET_USERDATA_SUCCESS = "GET_USERDATA_SUCCESS";
export const GET_USERDATA_FAILURE = "GET_USERDATA_FAILURE";

export const getUserData = id => dispatch => {
  dispatch({ type: GET_USERDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/articles/{boardId}", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERDATA_FAILURE, payload: err.response });
    });
};
// GET BY USERNAME

export const GET_USERBOARDSDATA_START = "GET_USERBOARDSDATA_START";
export const GET_USERBOARDSDATA_SUCCESS = "GET_USERBOARDSDATA_SUCCESS";
export const GET_USERBOARDSDATA_FAILURE = "GET_USERBOARDSDATA_FAILURE";

export const getUserBOARDSData = id => dispatch => {
  dispatch({ type: GET_USERBOARDSDATA_START });
  axios
    .get("https://pintereach-backend.herokuapp.com/board/{userId}", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_USERBOARDSDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERBOARDSDATA_FAILURE, payload: err.response });
    });
};
// Logout

export const logout = () => dispatch => {
  dispatch();
  localStorage.clear();
  dispatch();
};
