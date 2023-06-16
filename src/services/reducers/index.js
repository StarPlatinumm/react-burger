import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { orderDetailsReducer } from './order-details';
import { constructorReducer } from './burger-constructor';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  burgerConstructor: constructorReducer
});