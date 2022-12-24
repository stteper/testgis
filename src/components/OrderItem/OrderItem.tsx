import React from 'react'

import styles from './OrderItem.module.scss'
import OrderItemProps from './OrderItem.props'

import OrderCreated from '../OrderCreated/OrderCreated'
import OrderDates from '../OrderDates/OrderDates'
import OrderReview from '../OrderReview/OrderReview'
import OrderStatus from '../OrderStatus/OrderStatus'

const OrderItem: React.FC<OrderItemProps> = ({ item }: OrderItemProps) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderHeader}>
        <span className={styles.orderTitle}>{`Заявка №${item.id}`}</span>
        <OrderStatus item={item} />
      </div>

      <div className={styles.orderInfo}>
        <OrderCreated item={item} />
        <OrderDates item={item} icon={true} />
        <OrderReview item={item} />
      </div>
    </div>
  )
}

export default OrderItem
