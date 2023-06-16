import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../services/actions/burger-ingredients';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const dispatch = useDispatch();
  const { isLoading, failed, ingredients } = useSelector(state => state.ingredients);

  useEffect(
    () => {
      dispatch(getIngredients());
    },
    [dispatch]
  );

  return (
    <div className={appStyles['app']}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={`${appStyles['ingredients-and-constructor']} pl-5 pr-5 text_type_main-default`}>
          {isLoading && 'Загрузка...'}
          {failed && 'Произошла ошибка'}
          {!isLoading &&
            !failed &&
            ingredients.length &&
            <BurgerIngredients ingredientsData={ingredients} />}
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
