import cn from 'classnames'
import React from 'react'

import styles from './OrderStatus.module.scss'
import OrderStatusProps from './OrderStatus.props'

import { OrderCurrentStatus } from '../../interfaces/order'

const Statuses: { [key in OrderCurrentStatus]: String } = {
  [OrderCurrentStatus.active]: 'Активная',
  [OrderCurrentStatus.closed]: 'Закрыта',
}

const OrderStatus: React.FC<OrderStatusProps> = ({ item }: OrderStatusProps) => {
  const status = item ? OrderCurrentStatus.active : OrderCurrentStatus.closed

  return (
    <div
      className={cn({
        [styles.orderStatus]: true,
        [styles.active]: status === OrderCurrentStatus.active,
        [styles.closed]: status === OrderCurrentStatus.closed,
      })}
    >
      {Statuses[status]}
    </div>
  )
}

export default OrderStatus
