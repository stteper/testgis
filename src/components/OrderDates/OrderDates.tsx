import moment from 'moment'
import React from 'react'

import styles from './OrderDates.module.scss'
import { OrderDatesProps } from './OrderDates.props'
import { ReactComponent as SvgTime } from './time.svg'

const OrderDates: React.FC<OrderDatesProps> = ({ item, text, icon = false }: OrderDatesProps) => {
  const dates: string[] = []

  if (item.load_dt) {
    dates.push(moment(item.load_dt).format('DD.MM.YY'))
  }

  if (item.ending_dt) {
    dates.push(moment(item.ending_dt).format('DD.MM.YY'))
  }

  if (dates.length === 0) {
    return null
  }

  return (
    <span className={styles.orderDates}>
      {icon ? <SvgTime className={styles.orderDatesIcon} /> : null}
      {text}
      {dates.join(' - ')}
    </span>
  )
}

export default OrderDates
