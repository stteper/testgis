import cn from 'classnames'
import React from 'react'

import styles from './TopMenu.module.scss'
const TopMenu: React.FC = () => {
  return (
    <nav className={styles.topMenu}>
      <ul className={styles.topMenuItems}>
        <li
          className={cn({
            [styles.topMenuItem]: true,
            [styles.active]: true,
          })}
        >
          <a href='/' className={styles.topMenuLink}>
            заявки
          </a>
        </li>

        <li className={styles.topMenuItem}>
          <a href='/' className={styles.topMenuLink}>
            Рейсы
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default TopMenu
