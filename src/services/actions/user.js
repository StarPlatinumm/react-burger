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

export const USER_REQUEST_LOADING = 'USER_REQUEST_LOADING';
export const USER_REQUEST_FAILED = 'USER_REQUEST_FAILED';

export const CLOSE_ERROR = 'CLOSE_ERROR';

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

export function logoutUser(data) {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    logoutUserFetch(data).then(data => {
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

// export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

// export const LOGOUT_USER_LOADING = 'LOGOUT_USER_LOADING';
// export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
// export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED';

// export const REGISTER_USER_LOADING = 'REGISTER_USER_LOADING';
// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';

// export const GET_USER_LOADING = 'GET_USER_LOADING';
// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
// export const GET_USER_FAILED = 'GET_USER_FAILED';

// export const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING';
// export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
// export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

// export function updateUserData(data) {
//   return function (dispatch) {
//     dispatch({
//       type: UPDATE_USER_LOADING
//     });

//     updateUserFetch(data).then(data => {
//       if (data && data.success) {
//         dispatch({
//           type: UPDATE_USER_SUCCESS,
//           data: data
//         });
//       } else {
//         dispatch({
//           type: UPDATE_USER_FAILED
//         });
//       }
//     })
//   };
// }

// export function getUserData() {
//   return function (dispatch) {
//     dispatch({
//       type: GET_USER_LOADING
//     });

//     getUserFetch().then(data => {
//       if (data && data.success) {
//         dispatch({
//           type: GET_USER_SUCCESS,
//           data: data
//         });
//       } else {
//         dispatch({
//           type: GET_USER_FAILED
//         });
//       }
//     })
//   };
// }

// export function logoutUser(data) {
//   return function (dispatch) {
//     dispatch({
//       type: LOGOUT_USER_LOADING
//     });

//     logoutUserFetch(data).then(data => {
//       if (data && data.success) {
//         dispatch({
//           type: LOGOUT_USER_SUCCESS,
//           data: data
//         });
//       } else {
//         dispatch({
//           type: LOGOUT_USER_FAILED
//         });
//       }
//     })
//   };
// }

// export function loginUser(data) {
//   return function (dispatch) {
//     dispatch({
//       type: LOGIN_USER_LOADING
//     });

//     loginUserFetch(data).then(data => {
//       if (data && data.success) {
//         dispatch({
//           type: LOGIN_USER_SUCCESS,
//           data: data
//         });
//       } else {
//         dispatch({
//           type: LOGIN_USER_FAILED
//         });
//       }
//     })
//   };
// }

// export function registerUser(data) {
//   return function (dispatch) {
//     dispatch({
//       type: REGISTER_USER_LOADING
//     });

//     registerUserFetch(data).then(data => {
//       if (data && data.success) {
//         dispatch({
//           type: REGISTER_USER_SUCCESS,
//           data: data
//         });
//       } else {
//         dispatch({
//           type: REGISTER_USER_FAILED
//         });
//       }
//     })
//   };
// }
