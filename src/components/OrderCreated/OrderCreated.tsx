import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import React from 'react'

import styles from './OrderCreated.module.scss'
import { OrderCreatedProps } from './OrderCreated.props'

dayjs.extend(customParseFormat)

const OrderCreated: React.FC<OrderCreatedProps> = ({ item, text = 'От' }: OrderCreatedProps) => {
  return (
    <span className={styles.orderCreated}>
      {text} {dayjs(item.create_dt, 'DD.MM.YYYY hh:mm').format('DD.MM.YY')}
    </span>
  )
}

export default OrderCreated
