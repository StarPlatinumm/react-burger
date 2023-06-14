import { useState, useCallback } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientCardStyles from './ingredient-card.module.css';
import Modal from '../modal/modal';
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
    setModalState({ visible: false });
  }, []);

  const modal = (
    <Modal header="Детали ингредиента" onClose={handleCloseModal}> 
      <IngredientDetails ingredient={props.ingredient} />
    </Modal>
  );
  return (
    <>
      <div className={`${ingredientCardStyles['burger-ingredient']}`} onClick={handleOpenModal}>
        <Counter count={1} />
        <div className={`${ingredientCardStyles['burger-ingredient-image-wrapper']}`}>
          <img src={props.ingredient.image} alt={props.ingredient.name} />
        </div>
        <div className={`${ingredientCardStyles['burger-ingredient-price-wrapper']} text text_type_digits-default pt-1 pb-1`}>
          <div>{props.ingredient.price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${ingredientCardStyles['burger-ingredient-title']}`}>
          {props.ingredient.name}
        </div>
      </div>
      {modalState.visible && modal}
    </>
  );
}

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired
}; 

export default IngredientCard;