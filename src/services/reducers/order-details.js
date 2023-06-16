import { ORDER_DETAILS_SHOW, ORDER_DETAILS_HIDE } from "../actions/order-details";
  const orderDetailsInitialState = {
    orderId: null
  };
  
  export const orderDetailsReducer = (state = orderDetailsInitialState, action) => {
    switch (action.type) {
      case ORDER_DETAILS_SHOW: {
        return {
          ...state,
          orderId: action.orderId
        };
      }
      case ORDER_DETAILS_HIDE: {
        return {
          ...state,
          orderId: null
        };
      }
      default: {
        return state;
      }
    }
  };
  