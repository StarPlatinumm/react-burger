import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientCardStyles from './ingredient-card.module.css';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

function IngredientCard(props) {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: props.ingredient
  });
  const getStateBurgerConstructor = (state) => state.burgerConstructor;

  const { bun, ingredients } = useSelector(getStateBurgerConstructor);

  const countIngredients = useCallback(() => {
    if (props.ingredient.type === 'bun') {
      return bun?._id === props.ingredient._id ? 2 : 0;
    } else {
      return ingredients.filter(item => item._id === props.ingredient._id).length;
    }
  }, [bun, ingredients]);

  return (
    <div ref={dragRef} className={`${ingredientCardStyles['burger-ingredient']}`} onClick={() => props.onOpenModal(props.ingredient)}>
      {countIngredients() !== 0 && <Counter count={countIngredients()} />}
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
  );
}

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  onOpenModal: PropTypes.func.isRequired
}; 

export default IngredientCard;