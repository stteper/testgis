import React from 'react'

import styles from './OrderDetailHead.module.scss'
import OrderDetailHeadProps from './OrderDetailHead.props'

import OrderCreated from '../OrderCreated/OrderCreated'
import OrderDates from '../OrderDates/OrderDates'
import OrderReview from '../OrderReview/OrderReview'
import OrderStatus from '../OrderStatus/OrderStatus'

const OrderDetailHead: React.FC<OrderDetailHeadProps> = ({ item }: OrderDetailHeadProps) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderHeader}>
        <span className={styles.orderTitle}>{`Заявка на перевозки №${item.id}`}</span>
        <OrderStatus item={item} />
      </div>

      <div className={styles.orderInfo}>
        <OrderCreated item={item} text={'Создано:'} />
        <OrderDates item={item} icon={false} text={'Сроки: '} />
        <OrderReview item={item} />
      </div>
    </div>
  )
}

export default OrderDetailHead
