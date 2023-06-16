export const GET_INGREDIENTS_LOADING = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

const ingredientsApiUrl = 'https://norma.nomoreparties.space/api/ingredients';

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_LOADING
    });
    fetch(ingredientsApiUrl).then(res => {
      res.json().then(data => {
        if (data && data.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: data.data
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          });
        }
      })
    });
  };
}
