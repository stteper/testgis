import cn from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import React from 'react'

import { ReactComponent as SvgCalendar } from './calendar.svg'
import { ReactComponent as SvgTimer } from './clock-3.svg'
import styles from './TimeInfo.module.scss'
import { TimeInfoProps } from './TimeInfo.props'

const TimeInfo: React.FC<TimeInfoProps> = ({ item }) => {
  if (!(item.ending_dt || item.load_dt)) {
    return null
  }

  return (
    <div className={styles.timeInfo}>
      {item.load_dt && (
        <span className={cn([styles.startPoint, styles.point])}>
          <SvgCalendar className={styles.calendar} />C {dayjs(item.load_dt).locale('ru').format('DD MMMM YYYY')}
        </span>
      )}

      <span className={styles.separator}>
        <span className={styles.timer}>
          <SvgTimer className={styles.timerIcon} />
        </span>
      </span>

      {item.ending_dt && (
        <span className={cn([styles.endPoint, styles.point])}>
          <SvgCalendar className={styles.calendar} />
          По {dayjs(item.ending_dt).locale('ru').format('DD MMMM YYYY')}
        </span>
      )}
    </div>
  )
}

export default TimeInfo
