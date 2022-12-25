import React from 'react'

import Skeleton from 'react-loading-skeleton'

import styles from './OrderItem.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const OrderItemSkeleton: React.FC = () => {
  return (
    <div className={styles.order}>
      <div className={styles.orderHeader}>
        <span className={styles.orderTitle}>
          <Skeleton width={100} height={15} />
        </span>
        <Skeleton width={70} height={12} />
      </div>

      <div className={styles.orderInfo}>
        <Skeleton width={70} height={10} />
        <Skeleton width={70} height={10} />
        <Skeleton width={70} height={10} />
      </div>
    </div>
  )
}

export default OrderItemSkeleton
