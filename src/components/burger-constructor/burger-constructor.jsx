import { useState, useCallback } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import DragConstructorElement from '../constructor-element/drug-constructor-element';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { TEST_DATA } from '../../utils/data';

function BurgerConstructor() {
  const [modalState, setModalState] = useState({ 
    visible: false,
  });

  const handleOpenModal = useCallback((e) => {
    setModalState({ visible: true });
  }, []);

  const handleCloseModal = useCallback((e) => {
    setModalState({ visible: false });
  }, []);

  const modal = (
    <Modal header="" onClose={handleCloseModal}> 
      <OrderDetails id='034536' />
    </Modal>
  );
  return (
    <>
      <div className={`${burgerConstructorStyles['burger-constructor']} pb-5 pt-25`}> {/* wrapper */}
        <div className={`${burgerConstructorStyles['burger-constructor-list']}`}>  {/* constructor */}
          <div>
            {
              TEST_DATA.filter(ingredient => ingredient.name === "Краторная булка N-200i").map((ingredient) => (
                <DragConstructorElement
                  key={ingredient._id}
                  type="top"
                  isLocked={true}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              ))
            }
          </div>
          <div className={`${burgerConstructorStyles['burger-constructor-space']} custom-scroll`}>
            {
              TEST_DATA.filter(ingredient => ingredient.name === "Говяжий метеорит (отбивная)").map((ingredient) => (
                <DragConstructorElement
                  key={ingredient._id}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              ))
            }
          </div>
          <div>
            {
              TEST_DATA.filter(ingredient => ingredient.name === "Флюоресцентная булка R2-D3").map((ingredient) => (
                <DragConstructorElement
                  key={ingredient._id}
                  type="bottom"
                  isLocked={true}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              ))
            }
          </div>
        </div>
        <div className={`${burgerConstructorStyles['burger-constructor-total-wrapper']} pt-10`}> {/* total */}
          <div className={`${burgerConstructorStyles['burger-constructor-total-amount']} text text_type_digits-medium pr-5`}>
            <div>1234</div>
            <div><CurrencyIcon type="primary" /></div>
          </div> {/* sum */}
          <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
        </div>
      </div>
      {modalState.visible && modal}
    </>
  );
}

export default BurgerConstructor;