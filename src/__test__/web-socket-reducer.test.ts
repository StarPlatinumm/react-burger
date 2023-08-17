import { wsFeedReducer as reducer, initialState } from '../services/reducers/web-socket'
import * as actions from '../services/actions/web-socket'

const testData = {
  success: true,
  orders: [
    {
      ingredients: ['', ''],
      _id: 'string',
      status: 'string',
      name: 'string',
      number: 123456,
      createdAt: 'string',
      updatedAt: 'string'
    }
  ],
  total: 100,
  totalToday: 10
}

describe('testing web-socket reducer', () => {
  it('should handle connect action', () => {
    const result = reducer(initialState, actions.wsConnecting())
    expect(result).toEqual({
      ...initialState,
      status: 'CONNECTING...'
    })
  })

  it('should handle connected action', () => {
    const result = reducer(initialState, actions.wsOpen())
    expect(result).toEqual({
      ...initialState,
      status: 'ONLINE',
      connectionError: ''
    })
  })

  it('should handle disconnect action', () => {
    const result = reducer(initialState, actions.wsClose())
    expect(result).toEqual({
      ...initialState,
      status: 'OFFLINE'
    })
  })

  it('should handle errors', () => {
    const result = reducer(initialState, actions.wsError('some web socket error'))
    expect(result).toEqual({
      ...initialState,
      connectionError: 'some web socket error'
    })
  })

  it('should handle messages', () => {
    const result = reducer(initialState, actions.wsMessage(testData))
    expect(result).toEqual({
      ...initialState,
      ordersData: testData
    })
  })
})
