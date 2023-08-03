import { orderBurgerFetch } from "../../utils/api";
import { AppThunkAction, TOrderInfo } from "../../utils/types";

export const GET_ORDER_DETAILS_LOADING: 'GET_ORDER_DETAILS_LOADING' = 'GET_ORDER_DETAILS_LOADING';
export const GET_ORDER_DETAILS_SUCCESS: 'GET_ORDER_DETAILS_SUCCESS' = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED: 'GET_ORDER_DETAILS_FAILED' = 'GET_ORDER_DETAILS_FAILED';
export const ORDER_DETAILS_CLOSE: 'ORDER_DETAILS_CLOSE' = 'ORDER_DETAILS_CLOSE';

export interface IGetOrderDetailsLoadingAction {
  readonly type: typeof GET_ORDER_DETAILS_LOADING;
}

export interface IGetOrderDetailsSuccessAction {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
  readonly orderDetails: TOrderInfo;
}

export interface IGetOrderDetailsFailedAction {
  readonly type: typeof GET_ORDER_DETAILS_FAILED;
}

export interface IOrderDetailsCloseAction {
  readonly type: typeof ORDER_DETAILS_CLOSE;
}

export type TOrderDetailsActions =
  | IGetOrderDetailsLoadingAction
  | IGetOrderDetailsSuccessAction
  | IGetOrderDetailsFailedAction
  | IOrderDetailsCloseAction;

export const getLaureatesSuccessAction = (order: TOrderInfo): IGetOrderDetailsSuccessAction => ({
  type: GET_ORDER_DETAILS_SUCCESS,
  orderDetails: order
});

export function getOrderDetails(ingrediensIds: string[]): AppThunkAction {
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
