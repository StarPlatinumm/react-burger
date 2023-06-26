import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainStyles from './main.module.css'
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
      <main className={`${mainStyles['ingredients-and-constructor']} pl-5 pr-5 text_type_main-default`}>
        {isLoading && 'Загрузка...'}
        {failed && 'Произошла ошибка'}
        {!isLoading &&
          !failed &&
          ingredients.length &&
          <BurgerIngredients ingredientsData={ingredients} />}
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}

export default MainPage;
