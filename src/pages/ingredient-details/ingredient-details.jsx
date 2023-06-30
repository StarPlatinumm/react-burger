import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';


function IngredientDetailsPage(props) {
  const getStateIngredients = (state) => state.ingredients;
  const { ingredients } = useSelector(getStateIngredients);
  const { id } = useParams();

  const ingredient = ingredients.find(element => element._id === id);

  return (
    <>
      {!props.isModal && <span className='text text_type_main-large'>Детали ингредиента</span>}
      {ingredient && <IngredientDetails ingredient={ingredient} />}
    </>
  );
}

export default IngredientDetailsPage;
