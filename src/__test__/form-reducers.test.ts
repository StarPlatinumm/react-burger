import {
  forgotPasswordFormReducer,
  initialState as forgotPasswordInitialState
} from '../services/reducers/form-forgot-password'
import {
  loginFormReducer,
  initialState as loginInitialState
} from '../services/reducers/form-login'
import {
  registerFormReducer,
  initialState as registerInitialState
} from '../services/reducers/form-register'
import {
  resetPasswordFormReducer,
  initialState as resetPasswordInitialState
} from '../services/reducers/form-reset-password'

import * as forgotPasswordActions from '../services/actions/form-forgot-password'
import * as loginActions from '../services/actions/form-login'
import * as registerActions from '../services/actions/form-register'
import * as resetPasswordActions from '../services/actions/form-reset-password'

describe('testing form fields reducers', () => {
  it('should set value to forgot-password form', () => {
    expect(
      forgotPasswordFormReducer(
        forgotPasswordInitialState,
        {
          type: forgotPasswordActions.FORGOT_PASSWORD_FORM_SET_VALUE,
          field: 'email',
          value: '123@test.com'
        }
      )
    ).toEqual(
      {
        form: {
          ...forgotPasswordInitialState.form,
          email: '123@test.com'
        }
      }
    )
  })

  it('should set value to login form', () => {
    expect(
      loginFormReducer(
        loginInitialState,
        {
          type: loginActions.LOGIN_FORM_SET_VALUE,
          field: 'password',
          value: 'qwerty123'
        }
      )
    ).toEqual(
      {
        form: {
          ...loginInitialState.form,
          password: 'qwerty123'
        }
      }
    )
  })

  it('should set value to register form', () => {
    expect(
      registerFormReducer(
        registerInitialState,
        {
          type: registerActions.REGISTER_FORM_SET_VALUE,
          field: 'name',
          value: 'John'
        }
      )
    ).toEqual(
      {
        form: {
          ...registerInitialState.form,
          name: 'John'
        }
      }
    )
  })

  it('should set value to reset-password form', () => {
    expect(
      resetPasswordFormReducer(
        resetPasswordInitialState,
        {
          type: resetPasswordActions.RESET_PASSWORD_FORM_SET_VALUE,
          field: 'newPassword',
          value: '321ytrewq'
        }
      )
    ).toEqual(
      {
        form: {
          ...resetPasswordInitialState.form,
          newPassword: '321ytrewq'
        }
      }
    )
  })
}) 
