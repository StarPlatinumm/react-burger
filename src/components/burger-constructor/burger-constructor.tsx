/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import DragConstructorElement from '../constructor-element/drug-constructor-element';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { getOrderDetails, ORDER_DETAILS_CLOSE } from '../../services/actions/order-details';
import { useSelector, useDispatch } from '../..';
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT, MOVE_INGREDIENT, CLEAR_INGREDIENTS } from '../../services/actions/burger-constructor';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../spinner/spinner';
import { TIngredient } from '../../utils/types';

function BurgerConstructor() {
  const dispatch = useDispatch();
  
  const { orderDetails, failed, isLoading } = useSelector((state) => state.orderDetails);
  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);
  const { name } = useSelector((state) => state.userData);

  let navigate = useNavigate();

  const handleOpenModal = () => {
    if (name === '') {
      navigate('/login');
    } else {
      dispatch(getOrderDetails([bun?._id ?? '', bun?._id ?? '', ...ingredients.map((item: TIngredient) => item._id)]));
      dispatch({ type: CLEAR_INGREDIENTS});
    }
  };

  const handleCloseModal = () => {
    dispatch({
      type: ORDER_DETAILS_CLOSE
    });
  };

  const reduceTotal = useCallback(() => {
    return (bun?.price ? bun.price : 0) * 2 +
      ingredients.reduce(
        (acc: number, item: TIngredient) => acc + item.price, 0
      );
  }, [bun, ingredients]);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient: TIngredient) {
      ingredient.name &&
      dispatch({
        type: ADD_INGREDIENT,
        ingredient: {...ingredient, key: crypto.randomUUID()}
      });
    },
  });

  const moveElement = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch({
      type: MOVE_INGREDIENT,
      dragIndex: dragIndex,
      hoverIndex: hoverIndex
    });
  }, [])

  return (
    <>
      <div ref={dropTarget} className={`${burgerConstructorStyles['burger-constructor']} pb-5 pt-25`} data-test='constructor'> {/* wrapper */}
        {
          !bun && !ingredients.length &&
          <div className={`${burgerConstructorStyles['burger-constructor-is-empty']}`}>
            <p className='text'> Перенесите ингредиенты</p>
          </div>
        }
        <div className={`${burgerConstructorStyles['burger-constructor-list']}`}>  {/* constructor */}
          <div data-test='top_bun'>
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
              ingredients.map((ingredient: TIngredient, index: number) => (
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
          <div data-test='bottom_bun'>
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
          {
            bun &&
            <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
          }
        </div>
      </div>
      {
        (orderDetails || failed) && 
        <Modal header="" onClose={handleCloseModal}> 
          <OrderDetails orderDetails={orderDetails} failed={failed} />
        </Modal>
      }
      {
        isLoading && 
        <Modal header="" onClose={() => {}}> 
          <LoadingSpinner/>
          <span className='pt-6 pb-20 pr-10 text text_type_main-medium'>Ваш заказ обрабатывается...</span>
        </Modal>
      }
    </>
  );
}

export default BurgerConstructor;