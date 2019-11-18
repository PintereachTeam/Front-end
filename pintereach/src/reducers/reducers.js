// IMPORTS

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
} from "../actions";

// STATE

const initialState = {

};

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case SIGNUP_START:
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
}};

export default reducer;
