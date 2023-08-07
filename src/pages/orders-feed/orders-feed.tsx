import { useDispatch } from 'react-redux';
import { useSelector } from '../..';
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
  }, []);

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

// const myOrders = {
//   success: true,
//   orders: [
//     {
//       _id: "64cac00f82e277001bfa6821",
//       ingredients: [
//         "643d69a5c3f7b9001cfa093d",
//         "643d69a5c3f7b9001cfa093e",
//         "643d69a5c3f7b9001cfa0945",
//         "643d69a5c3f7b9001cfa093d"
//       ],
//       status: "done",
//       name: "Антарианский люминесцентный флюоресцентный бургер",
//       createdAt: "2023-08-02T20:43:59.421Z",
//       updatedAt: "2023-08-02T20:43:59.575Z",
//       number: 15643
//     },
//     {
//       _id: "64cac00f82e277001bfa6821",
//       ingredients: [
//         "643d69a5c3f7b9001cfa093d",
//         "643d69a5c3f7b9001cfa093e",
//         "643d69a5c3f7b9001cfa0945",
//         "643d69a5c3f7b9001cfa093d"
//       ],
//       status: "done",
//       name: "Антарианский люминесцентный флюоресцентный бургер",
//       createdAt: "2023-08-02T20:43:59.421Z",
//       updatedAt: "2023-08-02T20:43:59.575Z",
//       number: 25643
//     },
//     {
//       _id: "64cac00f82e277001bfa6821",
//       ingredients: [
//         "643d69a5c3f7b9001cfa093d",
//         "643d69a5c3f7b9001cfa093e",
//         "643d69a5c3f7b9001cfa0945",
//         "643d69a5c3f7b9001cfa093d"
//       ],
//       status: "done",
//       name: "Антарианский люминесцентный флюоресцентный бургер",
//       createdAt: "2023-08-02T20:43:59.421Z",
//       updatedAt: "2023-08-02T20:43:59.575Z",
//       number: 35643
//     },
//     {
//       _id: "64cac00f82e277001bfa6821",
//       ingredients: [
//         "643d69a5c3f7b9001cfa093d",
//         "643d69a5c3f7b9001cfa093e",
//         "643d69a5c3f7b9001cfa0945",
//         "643d69a5c3f7b9001cfa093d"
//       ],
//       status: "done",
//       name: "Антарианский люминесцентный флюоресцентный бургер",
//       createdAt: "2023-08-02T20:43:59.421Z",
//       updatedAt: "2023-08-02T20:43:59.575Z",
//       number: 45643
//     },
//     {
//       _id: "64cabd3282e277001bfa681a",
//       ingredients: [
//         "643d69a5c3f7b9001cfa093d",
//         "643d69a5c3f7b9001cfa0943",
//         "643d69a5c3f7b9001cfa0943",
//         "643d69a5c3f7b9001cfa0943",
//         "643d69a5c3f7b9001cfa0943",
//         "643d69a5c3f7b9001cfa0943",
//         "643d69a5c3f7b9001cfa0943",
//         "643d69a5c3f7b9001cfa093d",
//       ],
//       status: "done",
//       name: "Бессмертный space астероидный spicy флюоресцентный фалленианский экзо-плантаго минеральный био-марсианский традиционный-галактический люминесцентный альфа-сахаридный антарианский метеоритный бургер",
//       createdAt: "2023-08-02T20:31:46.721Z",
//       updatedAt: "2023-08-02T20:31:46.872Z",
//       number: 55642
//     }
//   ],
//   total: 15317,
//   totalToday: 67
// }