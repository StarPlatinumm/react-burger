import mainStyles from './main.module.css'
import { useSelector } from '../..';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function MainPage() {
  const { isLoading, failed, ingredients } = useSelector((state) => state.ingredients);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`${mainStyles['ingredients-and-constructor']}`}>
        {isLoading && 'Загрузка...'}
        {failed && 'Произошла ошибка'}
        {!isLoading &&
          !failed &&
          ingredients.length &&
          <BurgerIngredients ingredients={ingredients} />}
        <BurgerConstructor />
      </div>
    </DndProvider>
  );
}

export default MainPage;
