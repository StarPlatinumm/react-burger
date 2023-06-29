import { REGISTER_FORM_SET_VALUE } from '../actions/form-register';

const initialState = {
  form: {
    name: '',
    email: '',
    password: ''
  }
}

export const registerFormReducer = (state = initialState, action) => {
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