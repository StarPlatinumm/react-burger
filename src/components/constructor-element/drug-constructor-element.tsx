import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import drugElementStyles from './drug-constructor-element.module.css';
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT } from '../../services/actions/burger-constructor';
import { useDrop, useDrag } from "react-dnd";
import { useRef } from 'react';
import { TDragCollectedProps, TDragObj, TDropCollectedProps, TDrugConstructorElement } from '../../utils/types';


function DragConstructorElement(props: TDrugConstructorElement) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: REMOVE_INGREDIENT,
      key: props.id
    });
  }
  const ref = useRef<HTMLDivElement>(null)

  const [{ handlerId }, drop] = useDrop<TDragObj, unknown, TDropCollectedProps>({
    accept: 'ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    canDrop(item) {
      return item.type !== 'bun';
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index!;
      const hoverIndex = props.index!;
      
      if (dragIndex === hoverIndex) {
        return
      }
      
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      props.moveElement!(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  })

  const [{ isDragging }, drag] = useDrag<TDragObj, unknown, TDragCollectedProps>({
    type: 'ingredient',
    item: () => {
      const id = props.id;
      const index = props.index;
      const type = props.type;
      return { id, index, type }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div ref={ref} data-handler-id={handlerId} className={`${isDragging && drugElementStyles['is-dragging']} ${drugElementStyles['item']} pb-2 pt-2`}>
      {!props.isLocked ? (
        <DragIcon type="primary"/>
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

export default DragConstructorElement;