import { TOrdersResponse } from '../../utils/types';
import OrderCard from '../order-card/order-card';
import ordersFeedStyles from './orders-feed.module.css';

type TProps = {
  ordersData: TOrdersResponse
}

export default function OrdersFeedComponent({ ordersData }: TProps) {
  return (
    <ul className={`${ordersFeedStyles['feed']} custom-scroll pr-2`}>{
      ordersData.orders.map( (order) => (
        <li key={order.number}>
          <OrderCard order={order}/>
        </li>
      ))
    }</ul>
  );
}
