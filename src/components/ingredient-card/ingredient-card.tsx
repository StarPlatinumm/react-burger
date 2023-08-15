import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientCardStyles from './ingredient-card.module.css';
import { useDrag } from "react-dnd";
import { useSelector } from '../..';
import { useCallback } from 'react';
import { Link, Location } from 'react-router-dom';
import { TIngredient } from '../../utils/types';

type TProps = {
  ingredient: TIngredient,
  location: Location
}

function IngredientCard(props: TProps) {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: props.ingredient
  });

  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);

  const countIngredients = useCallback(() => {
    if (props.ingredient.type === 'bun') {
      return bun?._id === props.ingredient._id ? 2 : 0;
    } else {
      return ingredients.filter((item: TIngredient) => item._id === props.ingredient._id).length;
    }
  }, [bun?._id, ingredients, props.ingredient._id, props.ingredient.type]);

  return (
    <Link
      key={props.ingredient._id}
      to={`/ingredients/${props.ingredient._id}`}
      state={{ backgroundLocation: props.location }}
      className={`${ingredientCardStyles['no-decoration']}`}
    >
      <div ref={dragRef} className={`${ingredientCardStyles['burger-ingredient']}`}>
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
    </Link>
  );
}

export default IngredientCard;