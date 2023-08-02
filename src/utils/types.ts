import { Identifier } from "dnd-core"

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
