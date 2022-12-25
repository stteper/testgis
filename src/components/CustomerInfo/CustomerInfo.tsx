import React from 'react'

import styles from './CustomerInfo.module.scss'
import { CustomerInfoProps } from './CustomerInfo.props'
import { ReactComponent as SvgInform } from './inform.svg'
import { ReactComponent as SvgVerify } from './verifying.svg'

const CustomerInfo: React.FC<CustomerInfoProps> = ({ item }) => {
  return (
    <div className={styles.customerInfo}>
      <p className={styles.customerInfoTitle}>
        {item.short_name}
        {Boolean(item.verification) && <SvgVerify className={styles.icon} />}
        <SvgInform className={styles.icon} />
      </p>
      <p className={styles.author}>Автор заявки</p>
    </div>
  )
}

export default CustomerInfo
