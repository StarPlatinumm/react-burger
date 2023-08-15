import { useSelector } from '../..';
import { useParams } from 'react-router-dom';
import { TIngredient, TOrder } from '../../utils/types';
import OrderCardDetails from '../../components/order-card-details/order-card-details';
import { useEffect, useState } from 'react';
import { getOrderFetch } from '../../utils/api';

type TProps = {
  isModal: boolean
}

export default function OrderCardDetailsPage(props: TProps) {
  const { ordersData } = useSelector((state) => state.wsFeed);
  const { ingredients } = useSelector((state) => state.ingredients);

  const [order, setOrder] = useState<TOrder | null>(null);

  const { number } = useParams();

  useEffect(() => {
    if (ingredients.length > 0) {
      getOrderFetch(number!).then(order => {
        const fixedIngredients = order.ingredients.map((id: string) => ingredients.find((element: TIngredient) => element._id === id)!);
        const total = fixedIngredients.reduce((acc, item) => acc + (item!.price ?? 0), 0);
        const status = order.status === 'done' ? 'Выполнен' : (order.status === 'created' ? 'Создан' : 'Готовится')
        setOrder({
          ...order,
          fixedIngredients: fixedIngredients,
          total: total,
          status: status
        })
      })
      
    }
  }, [ordersData, ingredients, number]);

  return (
    <>
      {!props.isModal && <span className='text text_type_main-large'>#{number}</span>}
      {order && <OrderCardDetails order={order} isModal={props.isModal} />}
    </>
  );
}
