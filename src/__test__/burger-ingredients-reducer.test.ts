import { 
  ingredientsReducer as reducer,
  ingredientsInitialState as initialState
} from '../services/reducers/burger-ingredients'
import * as actions from '../services/actions/burger-ingredients'

const testIngredients = [{
  "key": "",
  "_id": "643d69a5c3f7b9001cfa0941",
  "name": "Биокотлета из марсианской Магнолии",
  "type": "",
  "proteins": 420,
  "fat": 142,
  "carbohydrates": 242,
  "calories": 4242,
  "price": 424,
  "image": "https://code.s3.yandex.net/react/code/meat-01.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
  "__v": 0
}]

describe('testing burger-ingredients reducer', () => {
  it('should handle GET_INGREDIENTS_LOADING action', () => {
    expect(
      reducer(initialState, {
        type: actions.GET_INGREDIENTS_LOADING
      })
    ).toEqual(
      {
        ...initialState,
        failed: false,
        isLoading: true
      }
    )
  })

  it('should handle GET_INGREDIENTS_SUCCESS action', () => {
    expect(
      reducer(initialState, {
        type: actions.GET_INGREDIENTS_SUCCESS,
        ingredients: testIngredients
      })
    ).toEqual(
      {
        ...initialState,
        ingredients: testIngredients,
        isLoading: false
      }
    )
  })

  it('should handle GET_INGREDIENTS_FAILED action', () => {
    expect(
      reducer(initialState, {
        type: actions.GET_INGREDIENTS_FAILED
      })
    ).toEqual(
      {
        ...initialState,
        failed: true,
        isLoading: false
      }
    )
  })
}) 
