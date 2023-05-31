import { useState, useCallback } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientCardStyles from './ingredient-card.module.css';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientType } from '../../utils/types';

function IngredientCard(props) {

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
      <Modal header="Детали ингредиента" onClose={handleCloseModal}> 
        <IngredientDetails {...props} />
      </Modal>
      <ModalOverlay onClick={handleCloseModal}/>
    </>
  );
  return (
    <>
      <div className={`${ingredientCardStyles['burger-ingredient']}`} onClick={handleOpenModal}>
        <Counter count={1} />
        <div className={`${ingredientCardStyles['burger-ingredient-image-wrapper']}`}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={`${ingredientCardStyles['burger-ingredient-price-wrapper']} text text_type_digits-default pt-1 pb-1`}>
          <div>{props.price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${ingredientCardStyles['burger-ingredient-title']}`}>
          {props.name}
        </div>
      </div>
      {modalState.visible && modal}
    </>
  );
}

IngredientCard.propTypes = {
  ingredientsData: ingredientType
}; 

export default IngredientCard;