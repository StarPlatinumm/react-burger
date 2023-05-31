import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredientsStyles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

function BurgerIngredients(props) {
  return (
    <div className={`${burgerIngredientsStyles['burger-ingredients']} pb-5`}>
      <div className={`pt-10 pb-5 text text_type_main-large`}>Соберите бургер</div>
      <div className={`${burgerIngredientsStyles['burger-ingredients-filter']}`}>
        <Tab active={true}>Булки</Tab>
        <Tab>Соусы</Tab>
        <Tab>Начинки</Tab>
      </div>
      <ul className={`${burgerIngredientsStyles['burger-ingredients-type-list']} custom-scroll`}>
        <li key="bun" className={`pt-10 pb-10`}>
          <span className={`text text_type_main-medium`}>Булки</span>
          <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
            props.ingredientsData.filter(ingredient => ingredient.type === 'bun').map( (ingredient) => (
              <li key={ingredient._id}>
                <IngredientCard {...ingredient} />
              </li>
            ))
          }</ul>
        </li>
        <li key="sauce" className={`pt-10`}>
          <span className={`text text_type_main-medium`}>Соусы</span>
          <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
            props.ingredientsData.filter(ingredient => ingredient.type === 'sauce').map( (ingredient) => (
              <li key={ingredient._id}>
                <IngredientCard {...ingredient} />
              </li>
            ))
          }</ul>
        </li>
        <li key="main" className={`pt-10`}>
          <span className={`text text_type_main-medium`}>Начинки</span>
          <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
            props.ingredientsData.filter(ingredient => ingredient.type === 'main').map( (ingredient) => (
              <li key={ingredient._id}>
                <IngredientCard {...ingredient} />
              </li>
            ))
          }</ul>
        </li>
      </ul>
    </div>
  );
}

BurgerIngredients.propTypes = {
  ingredientsData: PropTypes.arrayOf(ingredientType)
}; 

export default BurgerIngredients;