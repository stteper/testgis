import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'

import styles from './OrderList.module.scss'

import { Order } from '../../interfaces/order'
import { getFilteredOrders, queryOrders } from '../../store/slices/orders'
import OrderFilters from '../OrderFilters/OrderFilters'
import OrderItem from '../OrderItem/OrderItem'
import OrderItemSkeleton from '../OrderItem/OrderItemSkeleton'
import OrderNavBar from '../OrderNavBar/OrderNavBar'

const OrderList: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(queryOrders() as AnyAction)
  }, [dispatch])

  const items: Order[] = useSelector(getFilteredOrders)

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
