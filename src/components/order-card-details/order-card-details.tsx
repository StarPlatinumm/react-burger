import orderCardDetailsStyles from './order-card-details.module.css';
import { TIngredient, TOrder } from '../../utils/types';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';

type TProps = {
  order: TOrder,
  isModal: boolean
}

export function ensureResult<T>(argument: T | null | undefined, message = 'This value was promised to be there.'): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

export default function OrderCardDetails({ order, isModal }: TProps) {
  

  const sortedArray = useMemo(() =>
    order.fixedIngredients!.reduce((acc: TIngredient[], item) => {
      if (acc.find(i => i._id === item._id)) {
        return acc.map((value) =>
          (value.quantity && value._id === item._id)
            ? { ...value, quantity: value.quantity + 1 }
            : value);
      }
      return [...acc, { ...item, quantity: 1 }];
    }, []), [order.fixedIngredients]
  );

  return (
    <div className={`${orderCardDetailsStyles['order-card-details-wrapper']} mb-5`}>

      <div className={`mt-10 text text_type_main-medium`}>{order.name}</div>

      <div className={`${order.status === 'Выполнен' && orderCardDetailsStyles['cyan-color']} text text_type_main-default mt-2`}>{order.status}</div>

      <div className='mt-15 text text_type_main-medium'>Состав:</div>
      
      <ul className={`${orderCardDetailsStyles['ingredients-list']}`}>{
        sortedArray.map( (ingredient, key) => (
          <li key={key}>
            <div className={`${orderCardDetailsStyles['ingredient-row']}`}>
              <img src={ingredient.image_mobile} alt="?" className={`${orderCardDetailsStyles['order-card-details-round-icon-img']}`} />
              <h5 className="text text_type_main-default">{ingredient.name}</h5>
              <div className={`${orderCardDetailsStyles['order-card-total-price-container']}`}>
                <div className={`text text_type_digits-default`}>{`${ingredient.quantity} X ${ingredient.price}`}</div>
                <div><CurrencyIcon type="primary" /></div>
              </div>
            </div>
          </li>
        ))
      }</ul>

      <div className={`${orderCardDetailsStyles['date-and-total-price']} pt-2`}>
        <FormattedDate className={'text text_type_main-default text_color_inactive'} date={new Date(order.createdAt)} />
        <div className={`${orderCardDetailsStyles['order-card-total-price-container']}`}>
          <div className={`text text_type_digits-default`}>{order.total}</div>
          <div><CurrencyIcon type="primary" /></div>
        </div>
      </div>
    </div>
  );
}
