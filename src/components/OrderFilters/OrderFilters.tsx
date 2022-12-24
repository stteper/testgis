import cn from 'classnames'
import React from 'react'

import styles from './OrderFilters.module.scss'

const OrderFilters: React.FC = () => {
  return (
    <nav className={styles.orderFilters}>
      <ul className={styles.filterItems}>
        <li
          className={cn({
            [styles.filterItem]: true,
            [styles.active]: true,
          })}
        >
          <a href='/' className={styles.filterLink}>
            Все
          </a>
        </li>

        <li
          className={cn({
            [styles.filterItem]: true,
            [styles.active]: false,
          })}
        >
          <a href='/' className={styles.filterLink}>
            с откликами <span className={styles.filterCounter}>2</span>
          </a>
        </li>

        <li
          className={cn({
            [styles.filterItem]: true,
            [styles.active]: false,
          })}
        >
          <a href='/' className={styles.filterLink}>
            активные
          </a>
        </li>

        <li
          className={cn({
            [styles.filterItem]: true,
            [styles.active]: false,
          })}
        >
          <a href='/' className={styles.filterLink}>
            на паузе
          </a>
        </li>

        <li
          className={cn({
            [styles.filterItem]: true,
            [styles.active]: false,
          })}
        >
          <a href='/' className={styles.filterLink}>
            завершенные
          </a>
        </li>

        <li
          className={cn({
            [styles.filterItem]: true,
            [styles.active]: false,
          })}
        >
          <a href='/' className={styles.filterLink}>
            других компаний
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default OrderFilters
