import React from 'react'

import styles from './OrderDetailButtons.module.scss'

import IconButton from '../IconButton/IconButton'
import { Icon } from '../IconButton/IconButton.props'

const OrderDetailButtons: React.FC = () => {
  return (
    <div className={styles.orderButtons}>
      <IconButton icon={Icon.add} text={'Добавить рейсы'} />
      <IconButton icon={Icon.edit} />
      <IconButton icon={Icon.delete} />
    </div>
  )
}

export default OrderDetailButtons
