import {
  constructorReducer as reducer,
  constructorInitialState as initialState
} from '../services/reducers/burger-constructor'
import * as actions from '../services/actions/burger-constructor'

const testIngredient = {
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
}

describe('testing burger-constructor reducer', () => {
  it('should add a bun with ADD_INGREDIENT', () => {
    expect(
      reducer(initialState, {
        type: actions.ADD_INGREDIENT,
        ingredient: {...testIngredient, type: 'bun'}
      })
    ).toEqual(
      {
        ...initialState,
        bun: {...testIngredient, type: 'bun'}
      }
    )
  })

  it('should add an ingredient with ADD_INGREDIENT', () => {
    expect(
      reducer(initialState, {
        type: actions.ADD_INGREDIENT,
        ingredient: {...testIngredient, type: 'main'}
      })
    ).toEqual(
      {
        ...initialState,
        ingredients: [...initialState.ingredients, {...testIngredient, type: 'main'}]
      }
    )
  })

  it('should move an ingredient with MOVE_INGREDIENT', () => {
    expect(
      reducer(
        {
          ...initialState,
          ingredients: [
            {...testIngredient, type: 'main', key: '1'},
            {...testIngredient, type: 'main', key: '2'},
            {...testIngredient, type: 'main', key: '3'}
          ]
        },
        {
          type: actions.MOVE_INGREDIENT,
          dragIndex: 0,
          hoverIndex: 2
        }
      )
    ).toEqual(
      {
        ...initialState,
        ingredients: [
          {...testIngredient, type: 'main', key: '2'},
          {...testIngredient, type: 'main', key: '3'},
          {...testIngredient, type: 'main', key: '1'}
        ]
      }
    )
  })

  it('should remove an ingredient with REMOVE_INGREDIENT', () => {
    expect(
      reducer(
        {
          ...initialState,
          ingredients: [
            {...testIngredient, type: 'main', key: '1'},
            {...testIngredient, type: 'main', key: '2'}
          ]
        },
        {
          type: actions.REMOVE_INGREDIENT,
          key: '1'
        }
      )
    ).toEqual(
      {
        ...initialState,
        ingredients: [{...testIngredient, type: 'main', key: '2'}]
      }
    )
  })

  it('should remove all ingredients with CLEAR_INGREDIENTS', () => {
    expect(
      reducer(initialState, {
        type: actions.CLEAR_INGREDIENTS
      })
    ).toEqual(initialState)
  })
}) 
