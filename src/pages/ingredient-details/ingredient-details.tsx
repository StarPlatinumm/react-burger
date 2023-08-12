import { useSelector } from '../..';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { TIngredient } from '../../utils/types';

type TProps = {
  isModal: boolean
}

function IngredientDetailsPage(props: TProps) {
  const { ingredients } = useSelector((state) => state.ingredients);
  const { id } = useParams();

  const ingredient = ingredients.find((element: TIngredient) => element._id === id);

  return (
    <>
      {!props.isModal && <span className='text text_type_main-large'>Детали ингредиента</span>}
      {ingredient && <IngredientDetails ingredient={ingredient} />}
    </>
  );
}

export default IngredientDetailsPage;
