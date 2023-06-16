import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import drugElementStyles from './drug-constructor-element.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT } from '../../services/actions/burger-constructor';

function DragConstructorElement(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: REMOVE_INGREDIENT,
      key: props.id
    });
  }

  return (
    <div className={`${drugElementStyles['item']} pb-2 pt-2`}>
      {!props.isLocked ? (
        <DragIcon />
      ) : (
        <div></div>
      )}
      <ConstructorElement
        type={props.type}
        isLocked={props.isLocked}
        text={props.text}
        price={props.price}
        thumbnail={props.thumbnail}
        handleClose={handleClose}
      />
    </div>
  );
}

DragConstructorElement.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default DragConstructorElement;