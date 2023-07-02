import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    GET_USER,
    UPDATE_USER,
    USER_REQUEST_LOADING,
    USER_REQUEST_FAILED,
    CLOSE_ERROR,
    SET_AUTH_CHECKED
  } from "../actions/user";
  
  const userInitialState = {
    isLoading: false,
    failed: false,
    isAuthChecked: false,
    message: '',
    name: '',
    email: '',
    password: '',
  };
  
  export const userDataReducer = (state = userInitialState, action) => {
    switch (action.type) {
      case USER_REQUEST_LOADING: {
        return {
          ...state,
          failed: false,
          isLoading: true,
        };
      }
      case USER_REQUEST_FAILED: {
        return {
          ...state,
          failed: true,
          message: action.message,
          isLoading: false
        };
      }
      case REGISTER_USER:
      case LOGIN_USER:
      case GET_USER:
      case UPDATE_USER: {
        return {
          ...state,
          isLoading: false,
          name: action.data.user.name,
          email: action.data.user.email
        };
      }
      case SET_AUTH_CHECKED: {
        return {
          ...state,
          isAuthChecked: true
        };
      }
      case LOGOUT_USER: {
        return {
          ...userInitialState,
          isAuthChecked: true
        };
      }
      case CLOSE_ERROR: {
        return {
          ...state,
          failed: false
        };
      }
      default: {
        return state;
      }
    }
  };
  