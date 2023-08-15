import { useEffect } from 'react';
import { useSelector, useDispatch } from '../..';
import OrdersFeedComponent from '../../components/orders-feed/orders-feed';
import { connect as connectFeed, disconnect as disconnectFeed} from '../../services/actions/web-socket';
import { TOrdersResponse } from '../../utils/types';


export default function OrdersFeedListPage() {

  const dispatch = useDispatch();
  
  const { ordersData } = useSelector((state) => state.wsFeed);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")!.replace('Bearer ', '');
    dispatch(connectFeed(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));

    return () => {
      dispatch(disconnectFeed());
    };
  }, [dispatch]);

  const getReversedOrders = (): TOrdersResponse => {
    const orders = ordersData!.orders;
    const reversedOrders = [...orders].reverse();
    return {...ordersData, orders: reversedOrders} as TOrdersResponse
  }

  return (
    <>
      {
        ordersData &&
        <OrdersFeedComponent ordersData={getReversedOrders()}/>
      }
    </>
  );
}
