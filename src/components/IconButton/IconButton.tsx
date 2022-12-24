import React from 'react'

import styles from './IconButton.module.scss'
import { Icon, IconButtonProps } from './IconButton.props'
import { ReactComponent as SvgAdd } from './plus.svg'

const IconButton: React.FC<IconButtonProps> = ({ text, icon, ...props }) => {
  return (
    <button className={styles.iconButton} {...props}>
      {icon === Icon.add && <SvgAdd width={22} height={22} className={styles.icon} />}
      {icon === Icon.delete && <SvgAdd width={20} height={20} className={styles.icon} />}
      {icon === Icon.edit && <SvgAdd width={20} height={20} className={styles.icon} />}
      {icon === Icon.back && <SvgAdd width={20} height={20} className={styles.icon} />}
      {text}
    </button>
  )
}

export default IconButton
