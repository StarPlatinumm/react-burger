import { TAuthRequest, TAuthResponse, TForgotPasswordRequest, TForgotPasswordResponse, TIngredientsResponse, TLogoutResponse, TRefreshTokenResponse, TRegistrRequest, TRegistrResponse, TResetPasswordRequest, TResetPasswordResponse, TUpdateUserRequest } from "./types";

const BURGER_API_URL = 'https://norma.nomoreparties.space/api'

type TOptions = {
  method?: string,
  headers: {
    'Content-Type'?: string,
    authorization: string
  },
  body?: string
}

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().catch((err) => Promise.reject(err));
};

export const refreshToken = (): Promise<TRefreshTokenResponse> => {
  return fetch(`${BURGER_API_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse<TRefreshTokenResponse>);
};

export const fetchWithRefresh = async (url: string, options: TOptions) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err instanceof Error && err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const loginUserFetch = (data: TAuthRequest) => {
  return fetch(`${BURGER_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse<TAuthResponse>)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const logoutUserFetch = () => {
  return fetch(`${BURGER_API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({token: localStorage.getItem("refreshToken")})
  })
    .then(checkResponse<TLogoutResponse>)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const registerUserFetch = (data: TRegistrRequest) => {
  return fetch(`${BURGER_API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse<TRegistrResponse>)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const forgotPassword = (data: TForgotPasswordRequest) => {
  return fetch(`${BURGER_API_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse<TForgotPasswordResponse>)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const resetPassword = (data: TResetPasswordRequest) => {
  return fetch(`${BURGER_API_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse<TResetPasswordResponse>)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getUserFetch = () => {
  return fetchWithRefresh(`${BURGER_API_URL}/auth/user`, {
    headers: {
      authorization: localStorage.getItem("accessToken")!
    }
  });
};

export const updateUserFetch = (user: TUpdateUserRequest) => {
  return fetchWithRefresh(`${BURGER_API_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem("accessToken")!
    },
    body: JSON.stringify(user)
  });
};

export const getIngredientsFetch = () => {
  return fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkResponse<TIngredientsResponse>)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const orderBurgerFetch = (ingrediensIds: string[]) => {
  return fetchWithRefresh(`${BURGER_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem("accessToken")!
    },
    body: JSON.stringify({
      ingredients: ingrediensIds
    })
  })
    .then((data) => {
      if (data && typeof data === 'object' && 'success' in data && data.success) return data;
      return Promise.reject(data);
    });
};
