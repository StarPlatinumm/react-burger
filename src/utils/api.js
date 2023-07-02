const BURGER_API_URL = 'https://norma.nomoreparties.space/api'

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().catch((err) => Promise.reject(err));
};

export const refreshToken = () => {
  return fetch(`${BURGER_API_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
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

export const loginUserFetch = (data) => {
  return fetch(`${BURGER_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse)
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
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const registerUserFetch = (data) => {
  return fetch(`${BURGER_API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const forgotPassword = (data) => {
  return fetch(`${BURGER_API_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const resetPassword = (data) => {
  return fetch(`${BURGER_API_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getUserFetch = () => {
  return fetchWithRefresh(`${BURGER_API_URL}/auth/user`, {
    headers: {
      authorization: localStorage.getItem("accessToken")
    }
  });
};

export const updateUserFetch = (user) => {
  return fetchWithRefresh(`${BURGER_API_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem("accessToken")
    },
    body: JSON.stringify(user)
  });
};

export const getIngredientsFetch = () => {
  return fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const orderBurgerFetch = (ingrediensIds) => {
  return fetchWithRefresh(`${BURGER_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem("accessToken")
    },
    body: JSON.stringify({
      ingredients: ingrediensIds
    })
  })
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};
