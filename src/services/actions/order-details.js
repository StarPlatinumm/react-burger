export const GET_ORDER_DETAILS_LOADING = 'GET_ORDER_DETAILS_LOADING';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED';
export const ORDER_DETAILS_CLOSE = 'ORDER_DETAILS_CLOSE';

const orderDetailsApiUrl = 'https://norma.nomoreparties.space/api/orders';

export function getOrderDetails(ingrediensIds) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_LOADING
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "ingredients": ingrediensIds
      })
    };

    fetch(orderDetailsApiUrl, requestOptions).then(res => {
      res.json().then(data => {
        if (data && data.success) {
          dispatch({
            type: GET_ORDER_DETAILS_SUCCESS,
            orderDetails: data.order
          });
        } else {
          dispatch({
            type: GET_ORDER_DETAILS_FAILED
          });
        }
      })
    });
  };
}
