import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import styles from './OrderDetail.module.scss'

import Box from '../../components/Box/Box'
import CargoInfo from '../../components/CargoInfo/CargoInfo'
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo'
import IconButton from '../../components/IconButton/IconButton'
import { Icon } from '../../components/IconButton/IconButton.props'
import OrderDetailButtons from '../../components/OrderDetailButtons/OrderDetailButtons'
import OrderDetailHead from '../../components/OrderDetailHead/OrderDetailHead'
import ParamTable from '../../components/ParamTable/ParamTable'
import { Parameter } from '../../components/ParamTable/ParamTable.props'
import RouteInfo from '../../components/RouteInfo/RouteInfo'
import TimeInfo from '../../components/TimeInfo/TimeInfo'
import { OrderDetails } from '../../interfaces/order'
import { getOrder, queryOrderData, getAdditionalParams } from '../../store/slices/order'
import { useAppDispatch, useAppSelector } from '../../store/store'

const OrderDetail: React.FC = () => {
  const routeParams = useParams()
  const id = Number.parseInt(routeParams.id as string)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(queryOrderData(id))
  }, [dispatch, id])

  const item: OrderDetails | null = useAppSelector(getOrder)
  const params: Parameter[] = useAppSelector(getAdditionalParams)

  return (
    item && (
      <div className={styles.orderDetail}>
        <div className={styles.header}>
          <IconButton icon={Icon.back} to={'/'} href={'/'} />
          <OrderDetailHead item={item} />
          <OrderDetailButtons />
        </div>

        <div className={styles.container}>
          <div className={styles.leftCol}>
            <Box title={'Детали перевозки'}>
              <RouteInfo item={item} />
              <CargoInfo item={item} />
              <TimeInfo item={item} />
            </Box>

            <div className={styles.additionalInfo}>
              <Box title={'Погрузка'}>
                <ParamTable params={params} />
              </Box>

              <Box title={'Выгрузка'}>
                <ParamTable params={params} />
              </Box>

              <Box title={'Дополнительно'}>
                <ParamTable params={params} />
              </Box>
            </div>
          </div>

          <div className={styles.rightCol}>
            <Box title={'Заказчик'}>
              <CustomerInfo item={item} />
            </Box>

            <Box title={'Маршрут на карте'}></Box>
          </div>
        </div>
      </div>
    )
  )
}

export default OrderDetail
