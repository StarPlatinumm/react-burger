import { TIngredient } from "../../utils/types";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const REMOVE_INGREDIENT: 'REMOVE_INGREDIENT' = 'REMOVE_INGREDIENT';
export const CLEAR_INGREDIENTS: 'CLEAR_INGREDIENTS' = 'CLEAR_INGREDIENTS';

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: TIngredient;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IRemoveIngredientAction {
  readonly type: typeof REMOVE_INGREDIENT;
  readonly key: string;
}

export interface IClearIngredientsAction {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | IAddIngredientAction
  | IMoveIngredientAction
  | IRemoveIngredientAction
  | IClearIngredientsAction;