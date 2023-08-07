import orderCardStyles from './order-card.module.css';
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from '../..';
import { TOrder, TIngredient } from '../../utils/types';
import { useCallback, useEffect, useState } from 'react';

type TProps = { order: TOrder }

export default function OrderCard({ order }: TProps) {

  const { ingredients } = useSelector((state) => state.ingredients);

  let location = useLocation();

  const getIngredientsObj = useCallback(() => {
    return order.ingredients.map((id, i) => {
      const ingredient = ingredients.find((element: TIngredient) => element._id === id)
      return {
        ...ingredient,
        overlayText: i === 5 ? `+${order.ingredients.slice(6).length}` : ''
      }
    });
  }, [ingredients, order.ingredients])

  const [ingredientsObj, setIngredientsObj] = useState(getIngredientsObj());

  useEffect(() => {
      setIngredientsObj(getIngredientsObj());
    },
    [getIngredientsObj]
  );

  const reduceTotal = useCallback(() => {
    return ingredientsObj.reduce((acc, item) => acc + (item.price ?? 0), 0);
  }, [ingredientsObj]);
  
  return (
    <Link
      key={order.number}
      to={`/feed/${order.number}`}
      state={{ backgroundLocation: location, orderNumber: '#' + order.number }}
      className={`${orderCardStyles['no-decoration']}`}
    >
      <div className={`${orderCardStyles['order-card-container']} p-6`}>
        <div className={`${orderCardStyles['order-card-number-and-date']}`}>
          <span className={`text text_type_digits-default`}>#{order.number}</span>
          <FormattedDate className={`${orderCardStyles['date-color']}`} date={new Date(order.createdAt)} />
        </div>
        <h3 className={`${orderCardStyles['order-card-title']} text text_type_main-medium mt-6`}>
          {order.name}
        </h3>
        <p className={`${order.status === 'done' && orderCardStyles['cyan-color']} text text_type_main-default mt-2`}>
          {order.status === 'done' ? 'Выполнен' : (order.status === 'created' ? 'Создан' : 'Готовится')}
        </p>
        <div className={`${orderCardStyles['order-card-ingredients-container']} mt-4`}>
          <ul className={`${orderCardStyles['order-card-ingredients-ul']}`}>{
            getIngredientsObj().slice(0, 6).map( (ingredient, key) => (
              <li key={key} style={{transform: `translateX(calc(${key * (-16)}px))`, zIndex: `calc(${-key})`}} >
                <img src={ingredient.image_mobile} alt="?" className={`${orderCardStyles['order-card-round-icon-img']} ${key === 5 && ingredient.overlayText !== '+0' && orderCardStyles['last-item']}`} />
                {
                  (key === 5 && ingredient.overlayText !== '+0') && (
                    <p className={`${orderCardStyles['remaining-ingredients']} text_type_digits-default text`}>
                      {ingredient.overlayText}
                    </p>
                  )
                }
              </li>
            ))
            }</ul>
          <div className={`${orderCardStyles['order-card-total-price-container']} mt-4`}>
            <div className={`text text_type_digits-default`}>{reduceTotal()}</div>
            <div><CurrencyIcon type="primary" /></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
