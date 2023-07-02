import {
  loginUserFetch,
  logoutUserFetch,
  registerUserFetch,
  getUserFetch,
  updateUserFetch,
} from "../../utils/api";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';

export const USER_REQUEST_LOADING = 'USER_REQUEST_LOADING';
export const USER_REQUEST_FAILED = 'USER_REQUEST_FAILED';

export const CLOSE_ERROR = 'CLOSE_ERROR';

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUserData());
    }
    dispatch({ type: SET_AUTH_CHECKED });
  };
};

export function loginUser(data) {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    loginUserFetch(data)
      .then(data => {
        if (data && data.success) {
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("accessToken", data.accessToken);
          dispatch({
            type: LOGIN_USER,
            data: data
          });
        }
      })
      .catch(data => {
        dispatch({
          type: USER_REQUEST_FAILED,
          message: data.message
        });
      })
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    logoutUserFetch().then(data => {
      if (data && data.success) {
        dispatch({
          type: LOGOUT_USER,
          data: data
        });
      } else {
        dispatch({
          type: USER_REQUEST_FAILED
        });
      }
    })
  };
}

export function registerUser(data) {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    registerUserFetch(data)
      .then(data => {
        if (data && data.success) {
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("accessToken", data.accessToken);
          dispatch({
            type: REGISTER_USER,
            data: data
          });
        }
      })
      .catch(data => {
        dispatch({
          type: USER_REQUEST_FAILED,
          message: data.message
        });
      })
  };
}

export function getUserData() {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    getUserFetch().then(data => {
      if (data && data.success) {
        dispatch({
          type: GET_USER,
          data: data
        });
      } else {
        dispatch({
          type: USER_REQUEST_FAILED
        });
      }
    })
  };
}

export function updateUserData(data) {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    updateUserFetch(data).then(data => {
      if (data && data.success) {
        dispatch({
          type: UPDATE_USER,
          data: data
        });
      } else {
        dispatch({
          type: USER_REQUEST_FAILED
        });
      }
    })
  };
}
