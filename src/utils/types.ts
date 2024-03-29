import { Identifier } from "dnd-core"
import { TBurgerConstructorActions } from "../services/actions/burger-constructor"
import { TBurgerIngredientsActions } from "../services/actions/burger-ingredients"
import { IForgotPasswordFormValueAction } from "../services/actions/form-forgot-password"
import { ILoginFormValueAction } from "../services/actions/form-login"
import { IRegisterFormValueAction } from "../services/actions/form-register"
import { IResetPasswordFormValueAction } from "../services/actions/form-reset-password"
import { TOrderDetailsActions } from "../services/actions/order-details"
import { TUserActions } from "../services/actions/user"
import { TOrderFeedActions  } from "../services/actions/web-socket"
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from "../services/reducers"

export type TIngredient = {
  _id: string,
  key: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
  overlayText?: string,
  quantity?: number,
}

export type TDrugConstructorElement = {
  type?: 'top' | 'bottom',
  id?: string,
  index?: number,
  isLocked?: boolean,
  text: string,
  price: number,
  thumbnail: string,
  moveElement?: (dragIndex: number, hoverIndex: number) => void
}

export type TDragObj = {
  id?: string,
  index?: number,
  type?: string
}

export type TDragCollectedProps = {
  isDragging: boolean
}

export type TDropCollectedProps = {
  handlerId: Identifier | null
}

export type TForgotPasswordRequest = {
  email: string
} 
export type TForgotPasswordResponse = {
  success: boolean,
  message: string
}


export type TResetPasswordRequest = {
  password: string,
  token: string
}
export type TResetPasswordResponse = {
  success: boolean,
  message: string
}


export type TRegistrRequest = {
  email: string,
  password: string,
  name: string
}
export type TRegistrResponse = {
  success: boolean,
  user: {
    email: string,
    name: string
  },
  accessToken: string,
  refreshToken: string
}

export type TAuthRequest = {
  email: string,
  password: string
}
export type TAuthResponse = {
  success: boolean,
  accessToken: string,
  refreshToken: string,
  user: {
    email: string,
    name: string
  }
}


export type TRefreshTokenRequest = {
  token: string
}
export type TRefreshTokenResponse = {
  success: boolean,
  accessToken: string,
  refreshToken: string
}

export type TLogoutTokenRequest = {
  token: string
}
export type TLogoutResponse = {
  success: boolean,
  message: string
}

export type TUpdateUserRequest = {
  email: string,
  password?: string,
  name: string
} 
export type TUpdateUserResponse = {
  success: true,
  user: {
    email: string,
    name: string
  }
}


export type TIngredientsResponse = {
  success: boolean,
  data: TIngredient[]
}

export type TOrderResponse = {
  name: string,
  order: {
    number: number
  },
  success: boolean
}

export type TOrderInfo = {
  number: number
}

// feed
export type TOrder = {
  ingredients: string[],
  fixedIngredients?: (TIngredient)[],
  _id: string,
  status: string,
  name: string,
  number: number,
  createdAt: string,
  updatedAt: string,
  total?: number
}

export type TOrdersResponse = {
  success: boolean,
  orders: TOrder[],
  total: number,
  totalToday: number
}

export type TOrdersResponseFromAPI = {
  success: boolean,
  orders: TOrder[]
}


// state types
export type TAppActions = 
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | IForgotPasswordFormValueAction
  | ILoginFormValueAction
  | IRegisterFormValueAction
  | IResetPasswordFormValueAction
  | TOrderDetailsActions
  | TUserActions
  | TOrderFeedActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;
