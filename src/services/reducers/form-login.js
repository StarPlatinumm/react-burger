import { LOGIN_FORM_SET_VALUE } from '../actions/form-login';

const initialState = {
  form: {
    email: '',
    password: ''
  }
}

export const loginFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        }
      }
    }
    default: {
      return state;
    }
  }
} 