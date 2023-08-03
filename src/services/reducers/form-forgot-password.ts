import { FORGOT_PASSWORD_FORM_SET_VALUE, IForgotPasswordFormValueAction } from '../actions/form-forgot-password';

export type TState = {
  form: {
    email: string
  }
};

const initialState: TState = {
  form: {
    email: ''
  }
}

export const forgotPasswordFormReducer = (state = initialState, action: IForgotPasswordFormValueAction) => {
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