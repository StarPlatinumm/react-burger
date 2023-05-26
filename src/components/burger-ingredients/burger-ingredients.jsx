import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { TEST_DATA } from '../../utils/data';
import IngredientCard from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';

class BurgerIngredients extends React.Component {
  render() {
    return (
      <div className={`${burgerIngredientsStyles['burger-ingredients']} pb-5`}>
        <div className={`pt-10 pb-5 text text_type_main-large`}>Соберите бургер</div>
        <div className={`${burgerIngredientsStyles['burger-ingredients-filter']}`}>
          <Tab active={true}>Булки</Tab>
          <Tab>Соусы</Tab>
          <Tab>Начинки</Tab>
        </div>
        <ul className={`${burgerIngredientsStyles['burger-ingredients-type-list']} custom-scroll`}>
          <li className={`${burgerIngredientsStyles['burger-ingredients-type-item']} pt-10 pb-10`}>
            <span className={`text text_type_main-medium`}>Булки</span>
            <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
              TEST_DATA.filter(ingredient => ingredient.type === 'bun').map( (ingredient) => (
                <IngredientCard name={ingredient.name} price={ingredient.price} image={ingredient.image} />
              ))
            }</ul>
          </li>
          <li className={`${burgerIngredientsStyles['burger-ingredients-type-item']} pt-10`}>
            <span className={`text text_type_main-medium`}>Соусы</span>
            <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
              TEST_DATA.filter(ingredient => ingredient.type === 'sauce').map( (ingredient) => (
                <IngredientCard name={ingredient.name} price={ingredient.price} image={ingredient.image} />
              ))
            }</ul>
          </li>
          <li className={`${burgerIngredientsStyles['burger-ingredients-type-item']} pt-10`}>
            <span className={`text text_type_main-medium`}>Начинки</span>
            <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
              TEST_DATA.filter(ingredient => ingredient.type === 'main').map( (ingredient) => (
                <IngredientCard name={ingredient.name} price={ingredient.price} image={ingredient.image} />
              ))
            }</ul>
          </li>
        </ul>
      </div>
    );
  }
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: 0
  }))
}; 

export default BurgerIngredients;