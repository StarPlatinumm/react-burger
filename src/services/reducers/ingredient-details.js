import { INGREDIENT_DETAILS_SHOW, INGREDIENT_DETAILS_HIDE } from "../actions/ingredient-details";
  const ingredientDetailsInitialState = {
    modalIngredient: null
  };
  
  export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action) => {
    switch (action.type) {
      case INGREDIENT_DETAILS_SHOW: {
        return {
          ...state,
          modalIngredient: action.modalIngredient
        };
      }
      case INGREDIENT_DETAILS_HIDE: {
        return {
          ...state,
          modalIngredient: null
        };
      }
      default: {
        return state;
      }
    }
  };
  