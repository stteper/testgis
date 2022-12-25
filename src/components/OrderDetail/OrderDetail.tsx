import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AnyAction } from 'redux'

import styles from './OrderDetail.module.scss'

import { OrderDetails } from '../../interfaces/order'
import { getOrder, queryOrderData, getAdditionalParams } from '../../store/slices/order'

import Box from '../Box/Box'
import CargoInfo from '../CargoInfo/CargoInfo'
import CustomerInfo from '../CustomerInfo/CustomerInfo'
import IconButton from '../IconButton/IconButton'
import { Icon } from '../IconButton/IconButton.props'
import OrderDetailButtons from '../OrderDetailButtons/OrderDetailButtons'
import OrderDetailHead from '../OrderDetailHead/OrderDetailHead'
import ParamTable from '../ParamTable/ParamTable'
import { Parameter } from '../ParamTable/ParamTable.props'
import RouteInfo from '../RouteInfo/RouteInfo'
import TimeInfo from '../TimeInfo/TimeInfo'

const OrderDetail: React.FC = () => {
  const routeParams = useParams()
  const id = Number.parseInt(routeParams.id as string)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(queryOrderData(id) as AnyAction)
  }, [dispatch, id])

  const item: OrderDetails | null = useSelector(getOrder)
  const params: Parameter[] = useSelector(getAdditionalParams)

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
