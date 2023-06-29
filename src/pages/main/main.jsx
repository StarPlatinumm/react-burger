import mainStyles from './main.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { getIngredients } from '../../services/actions/burger-ingredients';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function MainPage() {
  const dispatch = useDispatch();
  const getStateIngredients = (state) => state.ingredients;
  
  const { isLoading, failed, ingredients } = useSelector(getStateIngredients);

  useEffect(
    () => {
      dispatch(getIngredients());
    },
    [dispatch]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`${mainStyles['ingredients-and-constructor']}`}>
        {isLoading && 'Загрузка...'}
        {failed && 'Произошла ошибка'}
        {!isLoading &&
          !failed &&
          ingredients.length &&
          <BurgerIngredients ingredientsData={ingredients} />}
        <BurgerConstructor />
      </div>
    </DndProvider>
  );
}

export default MainPage;
