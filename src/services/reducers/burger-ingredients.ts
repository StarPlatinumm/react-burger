import { TIngredient } from '../../utils/types';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients';
import {
  GET_INGREDIENTS_LOADING,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../actions/burger-ingredients';

export type TIngredientsState = {
  isLoading: boolean;
  failed: boolean | null;
  ingredients: Array<TIngredient>
};

const ingredientsInitialState: TIngredientsState = {
  isLoading: false,
  failed: null,
  ingredients: []
};

export const ingredientsReducer = (state = ingredientsInitialState, action: TBurgerIngredientsActions) => {
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
