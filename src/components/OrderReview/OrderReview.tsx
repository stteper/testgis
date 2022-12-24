import React from 'react'

import styles from './OrderReview.module.scss'
import { OrderReviewProps } from './OrderReview.props'

import { ReactComponent as SvgView } from './view.svg'

const OrderReview: React.FC<OrderReviewProps> = ({ item, text = 'Просмотры:' }: OrderReviewProps) => {
  return (
    <span className={styles.orderReview}>
      <SvgView className={styles.orderReviewIcon} /> {text} {item.views_count}
    </span>
  )
}

export default OrderReview
