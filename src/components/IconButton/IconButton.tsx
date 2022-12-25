import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as SvgBack } from './back.svg'
import { ReactComponent as SvgDelete } from './delete.svg'
import { ReactComponent as SvgEdit } from './edit.svg'

import styles from './IconButton.module.scss'
import { Icon, IconButtonProps } from './IconButton.props'
import { ReactComponent as SvgAdd } from './plus.svg'

const IconButton: React.FC<IconButtonProps> = ({ text, href, icon, ...props }) => {
  return (
    <Link
      {...props}
      to={href}
      className={cn({
        [styles.iconButton]: true,
        [styles.bigPaddings]: icon === Icon.add,
      })}
    >
      {icon === Icon.add && <SvgAdd width={22} height={22} className={styles.icon} />}
      {icon === Icon.delete && <SvgDelete width={20} height={20} className={styles.icon} />}
      {icon === Icon.edit && <SvgEdit width={20} height={20} className={styles.icon} />}
      {icon === Icon.back && <SvgBack width={20} height={20} className={styles.icon} />}
      {text}
    </Link>
  )
}

export default IconButton
