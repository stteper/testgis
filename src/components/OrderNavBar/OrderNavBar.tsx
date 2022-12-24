import React from 'react'

import styles from './OrderNavBar.module.scss'

import OrderButtons from '../OrderButtons/OrderButtons'
import OrderSearch from '../OrderSearch/OrderSearch'

const OrderNavBar: React.FC = () => {
  return (
    <div className={styles.orderNavBar}>
      <OrderSearch />
      <OrderButtons />
    </div>
  )
}

export default OrderNavBar
