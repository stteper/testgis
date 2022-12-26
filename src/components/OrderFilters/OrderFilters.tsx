import cn from 'classnames'
import React from 'react'

import styles from './OrderFilters.module.scss'

interface FilterItem {
  link: string
  title: string
  counter?: number
  current?: boolean
}

const filters: FilterItem[] = [
  {
    link: '/',
    title: 'Все',
    current: true,
  },
  {
    link: '/',
    title: 'с откликами',
    counter: 2,
  },
  {
    link: '/',
    title: 'активные',
  },
  {
    link: '/',
    title: 'на паузе',
  },
  {
    link: '/',
    title: 'завершенные',
  },
  {
    link: '/',
    title: 'других компаний',
  },
]

const OrderFilters: React.FC = () => {
  return (
    <nav className={styles.orderFilters}>
      <ul className={styles.filterItems}>
        {filters.map((filter) => (
          <li
            className={cn({
              [styles.filterItem]: true,
              [styles.active]: filter.current,
            })}
          >
            <a href={filter.link} className={styles.filterLink}>
              {filter.title} {filter.counter ? <span className={styles.filterCounter}>2</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default OrderFilters
