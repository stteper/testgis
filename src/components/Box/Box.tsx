import React from 'react'

import styles from './Box.module.scss'
import { BoxProps } from './Box.props'

const Box: React.FC<BoxProps> = ({ title, children, ...props }) => {
  return (
    <div className={styles.box} {...props}>
      <p className={styles.boxTitle}>{title}</p>
      {children}
    </div>
  )
}

export default Box
