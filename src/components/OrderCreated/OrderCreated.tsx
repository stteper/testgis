import moment from 'moment'
import React from 'react'

import styles from './OrderCreated.module.scss'
import { OrderCreatedProps } from './OrderCreated.props'

const OrderCreated: React.FC<OrderCreatedProps> = ({ item, text = 'От' }: OrderCreatedProps) => {
  return (
    <span className={styles.orderCreated}>
      {text} {moment(item.create_dt, 'DD.MM.YYYY hh:mm').format('DD.MM.YY')}
    </span>
  )
}

export default OrderCreated
