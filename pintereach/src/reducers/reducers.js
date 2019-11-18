// IMPORTS

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_START
} from "../actions/actions.js";

// STATE

const initialState = {};

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case REGISTER_START:
      return {
        ...state,
        loggingIn: true,
        signingUp: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload.token,
        message: action.payload.message,
        id: action.payload.id
      };
  }
};

export default reducer;
