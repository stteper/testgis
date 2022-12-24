import { SelectUnstyled, OptionUnstyled, InputUnstyled } from '@mui/base'
import React from 'react'

import { ReactComponent as SvgCheck } from './check-2.svg'
import styles from './OrderSearch.module.scss'
import { ReactComponent as SvgSearch } from './search.svg'

const OrderSearch: React.FC = () => {
  return (
    <div className={styles.orderSearch}>
      <SvgSearch className={styles.searchIcon} />
      <form action='/search' className={styles.searchForm}>
        <SelectUnstyled className={styles.orderSearchType} defaultValue={'id'}>
          <OptionUnstyled className={styles.orderSearchTypeOption} value={'id'}>
            По номеру заявки
          </OptionUnstyled>
          <OptionUnstyled className={styles.orderSearchTypeOption} value={'date'}>
            По дате создания
          </OptionUnstyled>
        </SelectUnstyled>

        <SvgCheck className={styles.searchCheck} />

        <div className={styles.orderSearchFieldWrapper}>
          <InputUnstyled type={'text'} className={styles.orderSearchField} placeholder={'Поиск заявок'} />
        </div>
      </form>
    </div>
  )
}

export default OrderSearch
