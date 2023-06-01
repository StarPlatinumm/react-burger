import ingredientDetailsStyles from './ingredient-details.module.css';
import { ingredientType } from '../../utils/types';


function IngredientDetails(props) {
  const { image, name, calories, carbohydrates, fat, proteins } = props;
  return (
    <div className={`${ingredientDetailsStyles['ingredient-details']} mb-5`}>
      <div className={`${ingredientDetailsStyles['ingredient-details-picture-wrapper']} pl-5 pr-5`}>
        <img className={`${ingredientDetailsStyles['ingredient-details-picture']}`} src={image} alt={name} />
      </div>
      <div className={`${ingredientDetailsStyles['ingredient-details']} text text_type_main-medium pt-4`}>
        {name}
      </div>
      <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-values']} text_color_inactive pt-8`}>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Калории, ккал</div>
          <div className='text text_type_digits-default'>{calories}</div>
        </div>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Углеводы, г</div>
          <div className='text text_type_digits-default'>{carbohydrates}</div>
        </div>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Жиры, г</div>
          <div className='text text_type_digits-default'>{fat}</div>
        </div>
        <div className={`${ingredientDetailsStyles['ingredient-details-nutritional-value']}`}>
          <div className='text_type_main-default'>Белки, г</div>
          <div className='text text_type_digits-default'>{proteins}</div>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredientsData: ingredientType // типизация правильная, ошибок не выдаёт. В пропсах приходит весь игредиент (объект).
}

export default IngredientDetails;