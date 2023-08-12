import { getIngredientsFetch } from "../../utils/api";
import { AppThunkAction, TIngredient } from "../../utils/types";

export const GET_INGREDIENTS_LOADING: 'GET_INGREDIENTS_LOADING' = 'GET_INGREDIENTS_LOADING';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export interface IGetIngredientsLoadingAction {
  readonly type: typeof GET_INGREDIENTS_LOADING;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TBurgerIngredientsActions =
  | IGetIngredientsLoadingAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction;

export function getIngredients(): AppThunkAction {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_LOADING
    });
    getIngredientsFetch().then(data => {
      if (data && data.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data
        });
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        });
      }
    })
  };
}
