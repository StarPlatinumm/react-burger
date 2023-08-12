import { TIngredient } from '../../utils/types';
import {
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
  CLEAR_INGREDIENTS,
  TBurgerConstructorActions
} from '../actions/burger-constructor';

export type TConstructorState = {
  bun: TIngredient | null;
  ingredients: ReadonlyArray<TIngredient>
};

const constructorInitialState: TConstructorState = {
  bun: null,
  ingredients: []
};

export const constructorReducer = (state = constructorInitialState, action: TBurgerConstructorActions) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          bun: action.ingredient
        };
      } else {
        return {
          ...state,
          ingredients: [
            ...state.ingredients,
            action.ingredient
          ]
        };
      }
    }
    case MOVE_INGREDIENT: {
      let sortedIngredients = [...state.ingredients];
      sortedIngredients.splice(
        action.hoverIndex,
        0,
        sortedIngredients.splice(action.dragIndex, 1)[0]
      );
      return {
        ...state,
        ingredients: sortedIngredients
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter((item: TIngredient) => item.key !== action.key)
      };
    }
    case CLEAR_INGREDIENTS: {
      return constructorInitialState;
    }
    default: {
      return state;
    }
  }
};
  