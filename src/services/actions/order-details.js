import { orderBurgerFetch } from "../../utils/api";

export const GET_ORDER_DETAILS_LOADING = 'GET_ORDER_DETAILS_LOADING';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED';
export const ORDER_DETAILS_CLOSE = 'ORDER_DETAILS_CLOSE';

export function getOrderDetails(ingrediensIds) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_LOADING
    });

    orderBurgerFetch(ingrediensIds).then(data => {
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
  };
}
