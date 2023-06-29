import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { orderDetailsReducer } from './order-details';
import { constructorReducer } from './burger-constructor';
import { loginFormReducer } from './form-login';
import { registerFormReducer } from './form-register';
import { forgotPasswordFormReducer } from './form-forgot-password';
import { resetPasswordFormReducer } from './form-reset-password';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  burgerConstructor: constructorReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  forgotPasswordForm: forgotPasswordFormReducer,
  resetPasswordForm: resetPasswordFormReducer,
});