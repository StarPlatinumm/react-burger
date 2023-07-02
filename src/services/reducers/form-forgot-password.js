import { FORGOT_PASSWORD_FORM_SET_VALUE } from '../actions/form-forgot-password';

const initialState = {
  form: {
    email: ''
  }
}

export const forgotPasswordFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case FORGOT_PASSWORD_FORM_SET_VALUE: {
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