import { IResetPasswordFormValueAction, RESET_PASSWORD_FORM_SET_VALUE } from '../actions/form-reset-password';

export type TState = {
  form: {
    newPassword: string,
    code: string,
  }
};

export const initialState: TState = {
  form: {
    newPassword: '',
    code: '',
  }
}

export const resetPasswordFormReducer = (state = initialState, action: IResetPasswordFormValueAction) => {
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