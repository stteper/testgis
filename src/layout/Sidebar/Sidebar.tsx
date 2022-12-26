import cn from 'classnames'
import React from 'react'

import { ReactComponent as SvgBlog } from './blog.svg'
import { ReactComponent as SvgCabinet } from './cabinet.svg'
import { ReactComponent as SvgLogo } from './logo.svg'
import { ReactComponent as SvgOrders } from './orders.svg'
import { ReactComponent as SvgPartners } from './partners.svg'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <SvgLogo className={styles.sidebarLogoImg} />
      </div>

      <ul className={styles.sidebarMenu}>
        <li className={styles.sidebarMenuItem}>
          <a href='/' className={styles.sidebarMenuLink}>
            <SvgCabinet className={styles.sidebarMenuIcon} /> Личный кабинет
          </a>
        </li>

        <li
          className={cn({
            [styles.sidebarMenuItem]: true,
            [styles.active]: true,
          })}
        >
          <a href='/' className={styles.sidebarMenuLink}>
            <SvgOrders className={styles.sidebarMenuIcon} /> Заявки
          </a>
        </li>

        <li className={styles.sidebarMenuItem}>
          <a href='/' className={styles.sidebarMenuLink}>
            <SvgPartners className={styles.sidebarMenuIcon} /> Партнеры
          </a>
        </li>

        <li className={styles.sidebarMenuItem}>
          <a href='/' className={styles.sidebarMenuLink}>
            <SvgBlog className={styles.sidebarMenuIcon} /> Блог
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
