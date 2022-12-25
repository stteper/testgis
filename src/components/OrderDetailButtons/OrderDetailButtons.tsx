import React from 'react'

import styles from './OrderDetailButtons.module.scss'

import IconButton from '../IconButton/IconButton'
import { Icon } from '../IconButton/IconButton.props'

const OrderDetailButtons: React.FC = () => {
  return (
    <div className={styles.orderButtons}>
      <IconButton icon={Icon.add} text={'Добавить рейсы'} to={'/'} href={'/'} />
      <IconButton icon={Icon.edit} to={'/'} href={'/'} />
      <IconButton icon={Icon.delete} to={'/'} href={'/'} />
    </div>
  )
}

export default OrderDetailButtons
