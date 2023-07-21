import ingredientDetailsStyles from './ingredient-details.module.css';
import { TIngredient } from '../../utils/types';

type TProps = {
  ingredient: TIngredient
}

function IngredientDetails(props: TProps) {
  return (
    <div className={`${ingredientDetailsStyles['ingredient-details']} mb-5`}>
      <div className={`${ingredientDetailsStyles['ingredient-details-picture-wrapper']} pl-5 pr-5`}>
        <img className={`${ingredientDetailsStyles['ingredient-details-picture']}`} src={props.ingredient.image} alt={props.ingredient.name} />
      </div>
      <div className={`${ingredientDetailsStyles['ingredient-details']} text text_type_main-medium pt-4`}>
        {props.ingredient.name}
      </div>
      <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-values']} text_color_inactive pt-8`}>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Калории, ккал</div>
          <div className='text text_type_digits-default'>{props.ingredient.calories}</div>
        </div>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Углеводы, г</div>
          <div className='text text_type_digits-default'>{props.ingredient.carbohydrates}</div>
        </div>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Жиры, г</div>
          <div className='text text_type_digits-default'>{props.ingredient.fat}</div>
        </div>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Белки, г</div>
          <div className='text text_type_digits-default'>{props.ingredient.proteins}</div>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;