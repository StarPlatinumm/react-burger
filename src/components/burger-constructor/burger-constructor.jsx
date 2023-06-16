import { useCallback } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import DragConstructorElement from '../constructor-element/drug-constructor-element';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { ORDER_DETAILS_SHOW, ORDER_DETAILS_HIDE } from '../../services/actions/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT, MOVE_INGREDIENT } from '../../services/actions/burger-constructor';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { orderId } = useSelector(state => state.orderDetails);
  const { bun, ingredients } = useSelector(state => state.burgerConstructor);

  const handleOpenModal = useCallback(() => {
    dispatch({
      type: ORDER_DETAILS_SHOW,
      orderId: '0123456'
    });
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch({
      type: ORDER_DETAILS_HIDE
    });
  }, []);

  const reduceTotal = useCallback(() => {
    return (bun?.price ? bun.price : 0) * 2 +
      ingredients.reduce(
        (acc, item) => acc + item.price, 0
      );
  }, [bun, ingredients]);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      ingredient.name &&
      dispatch({
        type: ADD_INGREDIENT,
        ingredient: {...ingredient, key: crypto.randomUUID()}
      });
    },
  });

  const moveElement = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_INGREDIENT,
      dragIndex: dragIndex,
      hoverIndex: hoverIndex
    });
  }, [])

  return (
    <>
      <div ref={dropTarget} className={`${burgerConstructorStyles['burger-constructor']} pb-5 pt-25`}> {/* wrapper */}
        {
          !bun && !ingredients.length &&
          <div className={`${burgerConstructorStyles['burger-constructor-is-empty']}`}>
            <p className='text'> Перенесите ингредиенты</p>
          </div>
        }
        <div className={`${burgerConstructorStyles['burger-constructor-list']}`}>  {/* constructor */}
          <div>
            {
              bun &&
              <DragConstructorElement
                key="top"
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            }
          </div>
          <div className={`${burgerConstructorStyles['burger-constructor-space']} custom-scroll`}>
            {
              ingredients &&
              ingredients.map((ingredient, index) => (
                <DragConstructorElement
                  key={ingredient.key}
                  id={ingredient.key}
                  index={index}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                  moveElement={moveElement}
                />
              ))
            }
          </div>
          <div>
            {
              bun &&
              <DragConstructorElement
                key="bottom"
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            }
          </div>
        </div>
        <div className={`${burgerConstructorStyles['burger-constructor-total-wrapper']} pt-10`}> {/* total */}
          <div className={`${burgerConstructorStyles['burger-constructor-total-amount']} text text_type_digits-medium pr-5`}>
            <div>{reduceTotal()}</div>
            <div><CurrencyIcon type="primary" /></div>
          </div> {/* sum */}
          <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
        </div>
      </div>
      {
        orderId && 
        <Modal header="" onClose={handleCloseModal}> 
          <OrderDetails id={orderId} />
        </Modal>}
    </>
  );
}

export default BurgerConstructor;