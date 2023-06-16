import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredientsStyles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import { useCallback, useRef, useState } from 'react';
import { INGREDIENT_DETAILS_SHOW, INGREDIENT_DETAILS_HIDE } from '../../services/actions/ingredient-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';

function BurgerIngredients(props) {
  const dispatch = useDispatch();
  const getStateIngredientDetails = (state) => state.ingredientDetails;

  const { modalIngredient } = useSelector(getStateIngredientDetails);

  const handleOpenModal = useCallback((ingredient) => {
    dispatch({
      type: INGREDIENT_DETAILS_SHOW,
      modalIngredient: ingredient
    });
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch({
      type: INGREDIENT_DETAILS_HIDE
    });
  }, []);

  const tabsRef = useRef(null);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);

  const [currentTab, setCurrentTab] = useState('buns');

  const handleScroll = () => {
    const tabsY = tabsRef.current.getBoundingClientRect().top;
    const bunsY = bunsRef.current.getBoundingClientRect().top;
    const saucesY = saucesRef.current.getBoundingClientRect().top;
    const mainsY = mainsRef.current.getBoundingClientRect().top;
    setCurrentTab('buns');
    let minGap = Math.abs(tabsY - bunsY);
    if (Math.abs(tabsY - saucesY) < minGap) {
      minGap = Math.abs(tabsY - saucesY);
      setCurrentTab('sauces');
    }
    if (Math.abs(tabsY - mainsY) < minGap) {
      setCurrentTab('mains');
    }
  };

  return (
    <>
      <div className={`${burgerIngredientsStyles['burger-ingredients']} pb-5`}>
        <div className={`pt-10 pb-5 text text_type_main-large`}>Соберите бургер</div>
        <div ref={tabsRef} className={`${burgerIngredientsStyles['burger-ingredients-filter']}`}>
          <Tab active={currentTab === 'buns'}>Булки</Tab>
          <Tab active={currentTab === 'sauces'}>Соусы</Tab>
          <Tab active={currentTab === 'mains'}>Начинки</Tab>
        </div>
        <ul className={`${burgerIngredientsStyles['burger-ingredients-type-list']} custom-scroll`} onScroll={handleScroll}>
          <li key="buns" ref={bunsRef} className={`pt-10 pb-10`}>
            <span className={`text text_type_main-medium`} onScroll={handleScroll}>Булки</span>
            <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
              props.ingredientsData.filter(ingredient => ingredient.type === 'bun').map( (ingredient) => (
                <li key={ingredient._id}>
                  <IngredientCard ingredient={ingredient} onOpenModal={handleOpenModal}/>
                </li>
              ))
            }</ul>
          </li>
          <li key="sauce" ref={saucesRef} className={`pt-10`}>
            <span className={`text text_type_main-medium`}>Соусы</span>
            <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
              props.ingredientsData.filter(ingredient => ingredient.type === 'sauce').map( (ingredient) => (
                <li key={ingredient._id}>
                  <IngredientCard ingredient={ingredient} onOpenModal={handleOpenModal}/>
                </li>
              ))
            }</ul>
          </li>
          <li key="main" ref={mainsRef} className={`pt-10`}>
            <span className={`text text_type_main-medium`}>Начинки</span>
            <ul className={`${burgerIngredientsStyles['burger-ingredient-type-ingredient-list']} pt-6 pr-4 pl-4`}>{
              props.ingredientsData.filter(ingredient => ingredient.type === 'main').map( (ingredient) => (
                <li key={ingredient._id}>
                  <IngredientCard ingredient={ingredient} onOpenModal={handleOpenModal}/>
                </li>
              ))
            }</ul>
          </li>
        </ul>
      </div>
      {
        modalIngredient && 
        <Modal header="Детали ингредиента" onClose={handleCloseModal}> 
          <IngredientDetails ingredient={modalIngredient} />
        </Modal>
      }
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredientsData: PropTypes.arrayOf(ingredientType).isRequired
}; 

export default BurgerIngredients;