import React from 'react'

import styles from './OrderDetail.module.scss'

import { OrderDetails } from '../../interfaces/order'
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

const item: OrderDetails = {
  id: 1723,
  loading_address: '353220, Краснодарский край, Динской р-н, ст-ца Старомышастовская',
  unloading_address: '344000, Ростовская обл, г Ростов-на-Дону',
  views_count: 0,
  tariff_c: 122200,
  distance_m: 262865,
  load_dt: '2023-02-17',
  ending_dt: '2023-02-28',
  cargo_type: 'Просо',
  cargo_type_object: {
    id: 9,
    title: 'Просо',
    order_type_id: 1,
    nomenclature_code: null,
  },
  tonnage_kg: 4000000,
  tonnage_balance_kg: 4000000,
  lat_lng_from: {
    latitude: 45.3398364,
    longitude: 39.0750559,
  },
  lat_lng_to: {
    latitude: 47.2306734,
    longitude: 39.7174089,
  },
  create_dt: '20.12.2022 9:10',
  short_name: 'ОАО "СПК "РОМАН"',
  coords_from: '45.3398364,39.0750559',
  coords_to: '47.2306734,39.7174089',
  loading_city: 'ст-ца Старомышастовская',
  unloading_city: 'Ростов-на-Дону',
  transport_type: 'Бортовой зерновоз',
  scales_length_cm: 9000,
  scales_capacity_kg: null,
  loading_desc: 'Зерномёт',
  downtime_desc: null,
  downtime_cost: null,
  additional_info: null,
  daily_shipping_rate_kg: null,
  deviation_percent: 0,
  deviation_type: 'percent',
  kontur_status: 1,
  verification: 0,
}

const params: Parameter[] = [
  {
    name: 'Наименование',
    value: 'ООО “Арктех-Агро”',
  },
  {
    name: 'ИНН',
    value: '8980900808',
  },
  {
    name: 'Представиель',
    value: 'Бондарчук Иван Константинович',
  },
  {
    name: 'Телефон',
    value: '+7 (938) 098-90-00',
  },
]

const OrderDetail: React.FC = () => {
  return (
    <div className={styles.orderDetail}>
      <div className={styles.header}>
        <IconButton icon={Icon.back} />
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
}

export default OrderDetail
