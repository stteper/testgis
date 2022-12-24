import React from 'react'

import styles from './OrderList.module.scss'

import { Order } from '../../interfaces/order'
import OrderFilters from '../OrderFilters/OrderFilters'
import OrderItem from '../OrderItem/OrderItem'
import OrderItemSkeleton from '../OrderItem/OrderItemSkeleton'
import OrderNavBar from '../OrderNavBar/OrderNavBar'

const items: Order[] = [
  {
    id: 1717,
    loading_address: '344000, Ростовская обл, г Ростов-на-Дону',
    unloading_address: '350000, Краснодарский край, г Краснодар',
    views_count: 1,
    tariff_c: 190000,
    distance_m: 276880,
    load_dt: '2023-01-11',
    ending_dt: '2023-01-27',
    cargo_type: 'Пнешница',
    cargo_type_object: {
      id: 186,
      title: 'Пнешница',
      order_type_id: 1,
      nomenclature_code: null,
    },
    tonnage_kg: 2000000,
    tonnage_balance_kg: 2000000,
    lat_lng_from: {
      latitude: 47.2306734,
      longitude: 39.7174089,
    },
    lat_lng_to: {
      latitude: 45.0322259,
      longitude: 38.9708116,
    },
    create_dt: '20.12.2022 7:32',
  },
  {
    id: 1716,
    loading_address: '344000, Ростовская обл, г Ростов-на-Дону',
    unloading_address: '350000, Краснодарский край, г Краснодар',
    views_count: 0,
    tariff_c: 190000,
    distance_m: 276880,
    load_dt: '2023-01-10',
    ending_dt: '2023-01-18',
    cargo_type: 'Пшеница',
    cargo_type_object: {
      id: 1,
      title: 'Пшеница',
      order_type_id: 1,
      nomenclature_code: null,
    },
    tonnage_kg: 2000000,
    tonnage_balance_kg: 2000000,
    lat_lng_from: {
      latitude: 47.2306734,
      longitude: 39.7174089,
    },
    lat_lng_to: {
      latitude: 45.0322259,
      longitude: 38.9708116,
    },
    create_dt: '20.12.2022 7:27',
  },
  {
    id: 1715,
    loading_address: '352030, Краснодарский край, Кущевский р-н, ст-ца Кущевская',
    unloading_address: '350915, Краснодарский край, г Краснодар, Прикубанский округ, ст-ца Елизаветинская',
    views_count: 0,
    tariff_c: 140000,
    distance_m: 199052,
    load_dt: '2022-12-31',
    ending_dt: '2023-01-08',
    cargo_type: 'Овёс',
    cargo_type_object: {
      id: 15,
      title: 'Овёс',
      order_type_id: 1,
      nomenclature_code: null,
    },
    tonnage_kg: 2100000,
    tonnage_balance_kg: 2100000,
    lat_lng_from: {
      latitude: 46.5545019,
      longitude: 39.6115419,
    },
    lat_lng_to: {
      latitude: 45.085714,
      longitude: 38.9807706,
    },
    create_dt: '13.12.2022 6:49',
  },
  {
    id: 1714,
    loading_address: '344000, Ростовская обл, г Ростов-на-Дону',
    unloading_address: '350000, Краснодарский край, г Краснодар',
    views_count: 0,
    tariff_c: 50000,
    distance_m: 276880,
    load_dt: '2022-12-31',
    ending_dt: '2023-01-06',
    cargo_type: 'Овёс',
    cargo_type_object: {
      id: 15,
      title: 'Овёс',
      order_type_id: 1,
      nomenclature_code: null,
    },
    tonnage_kg: 2000000,
    tonnage_balance_kg: 2000000,
    lat_lng_from: {
      latitude: 47.2306734,
      longitude: 39.7174089,
    },
    lat_lng_to: {
      latitude: 45.0322259,
      longitude: 38.9708116,
    },
    create_dt: '07.12.2022 7:05',
  },
]

const OrderList: React.FC = () => {
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
