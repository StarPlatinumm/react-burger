import { useState, useCallback } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import DragConstructorElement from '../constructor-element/drug-constructor-element';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor() {
  const [modalState, setModalState] = useState({ 
    visible: false,
  });

  const handleOpenModal = useCallback((e) => {
    setModalState({ visible: true });
  }, []);

  const handleCloseModal = useCallback((e) => {
    if (e.key === "Escape" || e.type === 'click') {
      setModalState({ visible: false });
    }
  }, []);

  const modal = (
    <>
      <Modal header="" onClose={handleCloseModal}> 
        <OrderDetails id='034536' />
      </Modal>
      <ModalOverlay onClick={handleCloseModal}/>
    </>
  );
  return (
    <>
      <div className={`${burgerConstructorStyles['burger-constructor']} pb-5 pt-25`}> {/* wrapper */}
        <div className={`${burgerConstructorStyles['burger-constructor-list']}`}>  {/* constructor */}
          <div>
            <DragConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={`${burgerConstructorStyles['burger-constructor-space']} custom-scroll`}>
            <DragConstructorElement
              text="Говяжий метеорит (отбивная)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
            <DragConstructorElement
              text="Говяжий метеорит (отбивная)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
            <DragConstructorElement
              text="Говяжий метеорит (отбивная)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </div>
          <div>
            <DragConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
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