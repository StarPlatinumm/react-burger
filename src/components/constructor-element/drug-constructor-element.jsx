import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import drugElementStyles from './drug-constructor-element.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT } from '../../services/actions/burger-constructor';
import { useDrop, useDrag } from "react-dnd";
import { useRef } from 'react';

function DragConstructorElement(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: REMOVE_INGREDIENT,
      key: props.id
    });
  }
  const ref = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: 'ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      // обрабатываем только элементы без type (не булки)
      if (props.type !== undefined) {
        return
      }

      const dragIndex = item.index;
      const hoverIndex = props.index;
      
      if (dragIndex === hoverIndex) {
        return
      }
      
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      props.moveElement(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'ingredient',
    item: () => {
      const id = props.id;
      const index = props.index;
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div ref={ref} data-handler-id={handlerId} className={`${isDragging && drugElementStyles['is-dragging']} ${drugElementStyles['item']} pb-2 pt-2`}>
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
  moveElement: PropTypes.func
}

export default DragConstructorElement;