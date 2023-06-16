import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions/burger-constructor';

const constructorInitialState = {
  bun: null,
  ingredients: []
};

export const constructorReducer = (state = constructorInitialState, action) => {
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
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.key !== action.key)
      };
    }
    default: {
      return state;
    }
  }
};
  