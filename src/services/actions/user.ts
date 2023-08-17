import {
  loginUserFetch,
  logoutUserFetch,
  registerUserFetch,
  getUserFetch,
  updateUserFetch,
} from "../../utils/api";
import { AppThunkAction, TAuthRequest, TAuthResponse, TLogoutResponse, TRegistrRequest, TRegistrResponse, TUpdateUserResponse } from "../../utils/types";

export const LOGIN_USER: 'LOGIN_USER' = 'LOGIN_USER';
export const LOGOUT_USER: 'LOGOUT_USER' = 'LOGOUT_USER';
export const REGISTER_USER: 'REGISTER_USER' = 'REGISTER_USER';
export const GET_USER: 'GET_USER' = 'GET_USER';
export const UPDATE_USER: 'UPDATE_USER' = 'UPDATE_USER';
export const SET_AUTH_CHECKED: 'SET_AUTH_CHECKED' = 'SET_AUTH_CHECKED';
export const USER_REQUEST_LOADING: 'USER_REQUEST_LOADING' = 'USER_REQUEST_LOADING';
export const USER_REQUEST_FAILED: 'USER_REQUEST_FAILED' = 'USER_REQUEST_FAILED';
export const CLOSE_ERROR = 'CLOSE_ERROR';

export interface IGetLoginUserAction {
  readonly type: typeof LOGIN_USER;
  readonly data: TAuthResponse;
}

export interface IGetLogoutUserAction {
  readonly type: typeof LOGOUT_USER;
  readonly data?: TLogoutResponse;
}

export interface IGetRegisterUserAction {
  readonly type: typeof REGISTER_USER;
  readonly data: TRegistrResponse;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER;
  readonly data: TUpdateUserResponse;
}

export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER;
  readonly data: TUpdateUserResponse;
}

export interface ISetAuthCheckedAction {
  readonly type: typeof SET_AUTH_CHECKED;
}

export interface IUserRequestLoadingAction {
  readonly type: typeof USER_REQUEST_LOADING;
}

export interface IUserRequestFailedAction {
  readonly type: typeof USER_REQUEST_FAILED;
  readonly message?: string;
}

export interface ICloseErrorAction {
  readonly type: typeof CLOSE_ERROR;
}

export type TUserActions =
  | IGetLoginUserAction
  | IGetLogoutUserAction
  | IGetRegisterUserAction
  | IGetUserAction
  | IUpdateUserAction
  | ISetAuthCheckedAction
  | IUserRequestLoadingAction
  | IUserRequestFailedAction
  | ICloseErrorAction;

export const checkUserAuth = (): AppThunkAction => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUserData());
    }
    dispatch({ type: SET_AUTH_CHECKED });
  };
};

export function loginUser(data: TAuthRequest): AppThunkAction {
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
      });
  };
}

export function logoutUser(): AppThunkAction {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });
    dispatch({
      type: LOGOUT_USER
    });

    logoutUserFetch()
      .then(data => {
        if (data && data.success) {
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("accessToken");
        }
      })
      .catch(data => {
        dispatch({
          type: USER_REQUEST_FAILED,
          message: data.message
        });
      });
  };
}

export function registerUser(data: TRegistrRequest): AppThunkAction {
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

export function getUserData(): AppThunkAction {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    getUserFetch()
      .then(data => {
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
      .catch(data => {
        dispatch({
          type: USER_REQUEST_FAILED,
          message: data.message
        });
      });
  };
}

export function updateUserData(data: TRegistrRequest): AppThunkAction {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST_LOADING
    });

    updateUserFetch(data)
      .then(data => {
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
      .catch(data => {
        dispatch({
          type: USER_REQUEST_FAILED,
          message: data.message
        });
      });
  };
}
