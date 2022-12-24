import React from 'react'

import { ReactComponent as SvgList } from './list.svg'
import styles from './OrderButtons.module.scss'

import IconButton from '../IconButton/IconButton'
import { Icon } from '../IconButton/IconButton.props'

const OrderButtons: React.FC = () => {
  return (
    <div className={styles.orderButtons}>
      <IconButton icon={Icon.add} text={'Новая заявка'} />
      <SvgList className={styles.orderButtonsList} />
    </div>
  )
}

export default OrderButtons
