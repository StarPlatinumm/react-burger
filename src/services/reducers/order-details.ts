import { TOrderInfo } from "../../utils/types";
import { TOrderDetailsActions } from '../actions/order-details';
import {
  GET_ORDER_DETAILS_LOADING,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  ORDER_DETAILS_CLOSE
} from "../actions/order-details";

export type TOrderDetailsState = {
  isLoading: boolean,
  failed: boolean | null,
  orderDetails: TOrderInfo
};

const orderDetailsInitialState = {
  isLoading: false,
  failed: null,
  orderDetails: null
};

export const orderDetailsReducer = (state = orderDetailsInitialState, action: TOrderDetailsActions) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_LOADING: {
      return {
        ...state,
        failed: false,
        isLoading: true,
        orderDetails: null
      };
    }
    case GET_ORDER_DETAILS_FAILED: {
      return {
        ...state,
        failed: true,
        isLoading: false
      };
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orderDetails: action.orderDetails,
        isLoading: false
      };
    }
    case ORDER_DETAILS_CLOSE: {
      return orderDetailsInitialState
    }
    default: {
      return state;
    }
  }
};
