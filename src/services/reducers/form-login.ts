import { TAuthRequest } from '../../utils/types';
import { ILoginFormValueAction, LOGIN_FORM_SET_VALUE } from '../actions/form-login';

export type TState = {
  form: TAuthRequest
};

const initialState: TState = {
  form: {
    email: '',
    password: ''
  }
}

export const loginFormReducer = (state = initialState, action: ILoginFormValueAction) => {
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