import cn from 'classnames'
import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import styles from './CargoInfo.module.scss'
import { CargoInfoProps } from './CargoInfo.props'
import 'react-circular-progressbar/dist/styles.css'
const CargoInfo: React.FC<CargoInfoProps> = ({ item }) => {
  let percentage = Math.round((100 * item.tonnage_kg) / item.tonnage_balance_kg)
  percentage = Number.isNaN(percentage) ? 0 : percentage

  return (
    <div className={styles.cargoInfo}>
      <div className={cn([styles.cargoBlock, styles.cargoBlockBlue])}>
        <p className={styles.cargoBlockTitle}>перевезено</p>
        <div className={styles.cargoDiagramWrapper}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            className={styles.diagram}
            counterClockwise={true}
            styles={buildStyles({
              pathColor: `#fff`,
              textColor: '#fff',
              trailColor: '#537cb9',
              textSize: '28px',
            })}
          />
          <div className={styles.diagramText}>
            <p className={styles.cargoBlockValue}>{Math.round(item.tonnage_kg / 1000)} тонн</p>
            <p className={styles.cargoBlockSmall}>Из {Math.round(item.tonnage_balance_kg / 1000)} тонн</p>
          </div>
        </div>
      </div>

      <div className={styles.cargoBlock}>
        <p className={styles.cargoBlockTitle}>Груз</p>
        <p className={styles.cargoBlockValue}>{item.cargo_type}</p>
      </div>

      <div className={styles.cargoBlock}>
        <p className={styles.cargoBlockTitle}>Тариф</p>
        <p className={styles.cargoBlockValue}>{Math.round(item.tariff_c / 100)} ₽ / тонна</p>
        {Boolean(item.downtime_cost) && (
          <p className={styles.cargoBlockSmall}>Простой {Math.round(item.downtime_cost ?? 0 / 100)} ₽ / сутки</p>
        )}
      </div>
    </div>
  )
}

export default CargoInfo
