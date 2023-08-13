import {
  userDataReducer as reducer,
  userInitialState as initialState
} from '../services/reducers/user'
import * as actions from '../services/actions/user'

const testData = {
  success: true,
  user: {
    email: '123@test.com',
    name: 'John'
  },
  accessToken: 'AABBBCC!!@@##',
  refreshToken: 'AABBBCC!!@@##'
}

const testLogoutData = {
  success: true,
  message: 'some logout message'
}

describe('testing user reducer', () => {
  it('should handle USER_REQUEST_LOADING action', () => {
    expect(
      reducer(initialState, {
        type: actions.USER_REQUEST_LOADING
      })
    ).toEqual(
      {
        ...initialState,
        failed: false,
        isLoading: true
      }
    )
  })

  it('should handle USER_REQUEST_FAILED action', () => {
    expect(
      reducer(initialState, {
        type: actions.USER_REQUEST_FAILED,
        message: 'some error message'
      })
    ).toEqual(
      {
        ...initialState,
        failed: true,
        message: 'some error message',
        isLoading: false
      }
    )
  })

  it('should handle REGISTER_USER action', () => {
    expect(
      reducer(initialState, {
        type: actions.REGISTER_USER,
        data: testData
      })
    ).toEqual(
      {
        ...initialState,
        isLoading: false,
        name: testData.user.name,
        email: testData.user.email
      }
    )
  })

  it('should handle SET_AUTH_CHECKED action', () => {
    expect(
      reducer(initialState, {
        type: actions.SET_AUTH_CHECKED
      })
    ).toEqual(
      {
        ...initialState,
        isAuthChecked: true
      }
    )
  })

  it('should handle LOGOUT_USER action', () => {
    expect(
      reducer({...initialState, name: 'Kate'}, {
        type: actions.LOGOUT_USER,
        data: testLogoutData
      })
    ).toEqual(
      {
        ...initialState,
        isAuthChecked: true
      }
    )
  })

  it('should handle CLOSE_ERROR action', () => {
    expect(
      reducer(initialState, {
        type: actions.CLOSE_ERROR
      })
    ).toEqual(
      {
        ...initialState,
        failed: false
      }
    )
  })
})
