import { 
    orderDetailsReducer as reducer,
    orderDetailsInitialState as initialState
  } from '../services/reducers/order-details'
  import * as actions from '../services/actions/order-details'
  
  const testOrderDetails = {
    number: 123456
  }
  
  describe('testing order-details reducer', () => {
    it('should handle GET_ORDER_DETAILS_LOADING action', () => {
      expect(
        reducer(initialState, {
          type: actions.GET_ORDER_DETAILS_LOADING
        })
      ).toEqual(
        {
          ...initialState,
          failed: false,
          isLoading: true,
          orderDetails: null
        }
      )
    })
  
    it('should handle GET_ORDER_DETAILS_SUCCESS action', () => {
      expect(
        reducer(initialState, {
          type: actions.GET_ORDER_DETAILS_SUCCESS,
          orderDetails: testOrderDetails
        })
      ).toEqual(
        {
          ...initialState,
          orderDetails: testOrderDetails,
          isLoading: false
        }
      )
    })
  
    it('should handle GET_ORDER_DETAILS_FAILED action', () => {
      expect(
        reducer(initialState, {
          type: actions.GET_ORDER_DETAILS_FAILED
        })
      ).toEqual(
        {
          ...initialState,
          failed: true,
          isLoading: false
        }
      )
    })

    it('should handle ORDER_DETAILS_CLOSE action', () => {
      expect(
        reducer(initialState, {
          type: actions.ORDER_DETAILS_CLOSE
        })
      ).toEqual(initialState)
    })
  }) 
  