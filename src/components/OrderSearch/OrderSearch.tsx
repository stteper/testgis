import React from 'react'

import styles from './OrderSearch.module.scss'

const OrderSearch: React.FC = () => {
  return (
    <div className={styles.orderSearch}>
      <form action='/search'></form>
    </div>
  )
}

export default OrderSearch
