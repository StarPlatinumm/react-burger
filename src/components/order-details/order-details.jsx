import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import orderDetailsStyles from './order-details.module.css';
import PropTypes from 'prop-types';

function OrderDetails(props) {
  const { id } = props;
  return (
    <div className={`${orderDetailsStyles['placed-order-details']} mt-4 mb-20 text_type_main-default`}>
      <div className={`${orderDetailsStyles['placed-order-details-id']} text text_type_digits-large`}>{id}</div>
      <div className={`${orderDetailsStyles['placed-order-details-id-title']} text text_type_main-medium pt-8`}>Идентификатор заказа</div>
      <div className={`${orderDetailsStyles['placed-order-details-status-icon']} pt-15`}>
        <CheckMarkIcon />
      </div>
      <div className={`${orderDetailsStyles['placed-order-details-status--title']} pt-15`}>Ваш заказ начали готовить</div>
      <div className={`${orderDetailsStyles['placed-order-details-message']} text_color_inactive pt-2`}>Дождитесь готовности на орбитальной станции</div>
    </div>
  );
}

OrderDetails.propTypes = {
  id: PropTypes.string.isRequired
}

export default OrderDetails;