import React from 'react'

import { ReactComponent as SvgPointer } from './marker.svg'
import styles from './RouteInfo.module.scss'
import { RouteInfoProps } from './RouteInfo.props'
const RouteInfo: React.FC<RouteInfoProps> = ({ item }) => {
  return (
    <div className={styles.routeInfo}>
      <div className={styles.points}>
        <span className={styles.point}>
          <SvgPointer className={styles.pointer} />
          Пункт A
        </span>

        <span className={styles.point}>
          Пункт B
          <SvgPointer className={styles.pointer} />
        </span>

        <span className={styles.distance}>
          <span className={styles.distanceVal}>{Math.round(item.distance_m / 1000)} км</span>
        </span>
      </div>

      <div className={styles.addresses}>
        <span className={styles.startAddress}>{item.loading_address}</span>
        <span className={styles.endAddress}>{item.unloading_address}</span>
      </div>
    </div>
  )
}

export default RouteInfo
