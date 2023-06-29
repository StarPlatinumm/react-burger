import { RESET_PASSWORD_FORM_SET_VALUE } from '../actions/form-reset-password';

const initialState = {
  form: {
    newPassword: '',
    code: '',
  }
}

export const resetPasswordFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_PASSWORD_FORM_SET_VALUE: {
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