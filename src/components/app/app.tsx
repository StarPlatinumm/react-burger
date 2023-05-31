import {useState, useEffect} from 'react';
import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const ingredientsApiUrl ='https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [apiData, setApiData] = useState({ 
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setApiData({...apiData, isLoading: true});
        const res = await fetch(ingredientsApiUrl);
        const data = await res.json();
        setApiData({...apiData, isLoading: false, data: data.data});
      } catch (err) {
        setApiData({...apiData, isLoading: false, hasError: true});
        console.log(`Не удалось получить список ингредиентов :( \n ${err}`);
      }
    }
    getIngredients();
  }, []);

  const { data, isLoading, hasError } = apiData;

  return (
    <div className={appStyles['app']}>
      <AppHeader />
      <main className={`${appStyles['ingredients-and-constructor']} pl-5 pr-5 text_type_main-default`}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading &&
          !hasError &&
          data.length &&
          <BurgerIngredients ingredientsData={data} />}
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
