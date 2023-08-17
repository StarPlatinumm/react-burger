import { useSelector, useDispatch } from '../..';
import OrderStats from '../../components/order-stats/order-stats';
import OrdersFeedComponent from '../../components/orders-feed/orders-feed';
import ordersFeedStyles from './orders-feed.module.css';
import { connect as connectFeed, disconnect as disconnectFeed} from '../../services/actions/web-socket';
import { useEffect } from 'react';
import { TOrder } from '../../utils/types';


export default function OrdersFeed() {
  const getNumbersAndStatus = () => {
    return ordersData!.orders.map((order: TOrder) => {
      return {
        number: order.number,
        status: order.status
      }
    })
  }

  const { ordersData } = useSelector((state) => state.wsFeed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectFeed('wss://norma.nomoreparties.space/orders/all'));

    return () => {
      dispatch(disconnectFeed());
    };
  }, [dispatch]);

  return (
    <div className={`${ordersFeedStyles['wrapper']}`}>
      <span className={`${ordersFeedStyles['header']} pt-10 pb-5 text text_type_main-medium`}>Лента заказов</span>
      <div className={`${ordersFeedStyles['feed-and-stats-container']}`}>
        {
          ordersData && 
          <>
            <OrdersFeedComponent ordersData={ordersData}/>
            <div className={`${ordersFeedStyles['stats']} custom-scroll`}>
              <OrderStats total={ordersData.total} totalToday={ordersData.totalToday} orders={getNumbersAndStatus()}/>
            </div>
          </>
        }
      </div>
    </div>
  );
}
