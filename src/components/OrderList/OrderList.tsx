import React, { useEffect } from 'react'

import styles from './OrderList.module.scss'

import { Order } from '../../interfaces/order'
import { getFilteredOrders, queryOrders } from '../../store/slices/orders'
import { useAppDispatch, useAppSelector } from '../../store/store'
import OrderFilters from '../OrderFilters/OrderFilters'
import OrderItem from '../OrderItem/OrderItem'
import OrderItemSkeleton from '../OrderItem/OrderItemSkeleton'
import OrderNavBar from '../OrderNavBar/OrderNavBar'

const OrderList: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(queryOrders())
  }, [dispatch])

  const items: Order[] = useAppSelector(getFilteredOrders)

  return (
    <div className={styles.orderList}>
      <OrderNavBar />
      <OrderFilters />

      <div className={styles.ordersContainer}>
        <div className={styles.ordersItems}>
          {items.length > 0
            ? items.map((item) => <OrderItem item={item} key={item.id} />)
            : [...Array(12)].map((_, id) => <OrderItemSkeleton key={id} />)}
        </div>
      </div>
    </div>
  )
}

export default OrderList
