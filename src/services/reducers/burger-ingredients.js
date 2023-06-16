import {
  GET_INGREDIENTS_LOADING,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../actions/burger-ingredients';

const ingredientsInitialState = {
  isLoading: false,
  failed: null,
  ingredients: []
};

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_LOADING: {
      return {
        ...state,
        failed: false,
        isLoading: true
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        failed: true,
        isLoading: false
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
