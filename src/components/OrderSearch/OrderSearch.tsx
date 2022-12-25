import { SelectUnstyled, OptionUnstyled, InputUnstyled } from '@mui/base'
import React, { useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce'

import { ReactComponent as SvgCheck } from './check-2.svg'
import styles from './OrderSearch.module.scss'
import { ReactComponent as SvgSearch } from './search.svg'

import { getFilter, setFilter, getFilterType, setFilterType } from '../../store/slices/orders'

const OrderSearch: React.FC = () => {
  const selectType = useSelector(getFilterType)
  const filterVal = useSelector(getFilter)

  const dispatch = useDispatch()

  const changeSelectTypeHandler = useCallback(
    (_: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: string | null): void => {
      if (value) {
        dispatch(setFilterType(value))
      }
    },
    [dispatch],
  )

  const changeSearchHandler = useCallback(
    useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch(setFilter(e.target.value))
    }, 800),
    [dispatch],
  )

  return (
    <div className={styles.orderSearch}>
      <SvgSearch className={styles.searchIcon} />

      <div className={styles.searchForm}>
        <SelectUnstyled className={styles.orderSearchType} value={selectType} onChange={changeSelectTypeHandler}>
          <OptionUnstyled className={styles.orderSearchTypeOption} value={'id'}>
            По номеру заявки
          </OptionUnstyled>
          <OptionUnstyled className={styles.orderSearchTypeOption} value={'date'}>
            По дате создания
          </OptionUnstyled>
        </SelectUnstyled>

        <SvgCheck className={styles.searchCheck} />

        <div className={styles.orderSearchFieldWrapper}>
          <InputUnstyled
            type={selectType === 'id' ? 'text' : 'date'}
            className={styles.orderSearchField}
            placeholder={'Поиск заявок'}
            onInput={changeSearchHandler}
            defaultValue={filterVal}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderSearch
