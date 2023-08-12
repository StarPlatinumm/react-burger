import { TRegistrRequest } from '../../utils/types';
import { IRegisterFormValueAction, REGISTER_FORM_SET_VALUE } from '../actions/form-register';

export type TState = {
  form: TRegistrRequest
};

const initialState: TState = {
  form: {
    name: '',
    email: '',
    password: ''
  }
}

export const registerFormReducer = (state = initialState, action: IRegisterFormValueAction) => {
  switch(action.type) {
    case REGISTER_FORM_SET_VALUE: {
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