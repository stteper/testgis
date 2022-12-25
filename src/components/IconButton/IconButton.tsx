import cn from 'classnames'
import React from 'react'

import { ReactComponent as SvgBack } from './back.svg'
import { ReactComponent as SvgDelete } from './delete.svg'
import { ReactComponent as SvgEdit } from './edit.svg'

import styles from './IconButton.module.scss'
import { Icon, IconButtonProps } from './IconButton.props'
import { ReactComponent as SvgAdd } from './plus.svg'

const IconButton: React.FC<IconButtonProps> = ({ text, icon, ...props }) => {
  return (
    <button
      className={cn({
        [styles.iconButton]: true,
        [styles.bigPaddings]: icon === Icon.add,
      })}
      {...props}
    >
      {icon === Icon.add && <SvgAdd width={22} height={22} className={styles.icon} />}
      {icon === Icon.delete && <SvgDelete width={20} height={20} className={styles.icon} />}
      {icon === Icon.edit && <SvgEdit width={20} height={20} className={styles.icon} />}
      {icon === Icon.back && <SvgBack width={20} height={20} className={styles.icon} />}
      {text}
    </button>
  )
}

export default IconButton
