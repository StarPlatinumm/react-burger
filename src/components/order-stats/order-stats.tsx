import orderStatsStyles from './order-stats.module.css';

type TOrderNumberAndStatus = {
  number: number,
  status: string
}

type TProps = { 
  total: number,
  totalToday: number,
  orders: TOrderNumberAndStatus[],
}

export default function OrderStats({total, totalToday, orders}: TProps) {
  return (
    <>
      <div className={`${orderStatsStyles['order-stats-ready-and-in-process']}`}>
        <h3 className='text text_type_main-medium'>Готовы:</h3>
        <h3 className='text text_type_main-medium'>В работе:</h3>
        <ul className={`${orderStatsStyles['order-stats-orders-list']} ${orderStatsStyles['cyan-color']} list text text_type_digits-default`}>{
          orders.filter((order) => order.status === 'done').slice(0, 20).map((order) => (
            <li key={order.number}>{order.number}</li>
          ))
        }</ul>
        <ul className={`${orderStatsStyles['order-stats-orders-list']} list text text_type_digits-default`}>{
          orders.filter((order) => order.status !== 'done').slice(0, 20).map((order) => (
            <li key={order.number}>{order.number}</li>
          ))
        }</ul>
      </div>
      <h3 className='mt-15 text text_type_main-medium'>Выполнено за все время:</h3>
      <p className={`${orderStatsStyles['glowing']} text text_type_digits-large OrderStatistics_number__KXF8g`}>{total}</p>
      <h3 className='mt-15 text text_type_main-medium'>Выполнено за сегодня:</h3>
      <p className={`${orderStatsStyles['glowing']} text text_type_digits-large OrderStatistics_number__KXF8g`}>{totalToday}</p>
    </>
  );
}
