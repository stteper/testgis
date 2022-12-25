import React from 'react'

import styles from './ParamTable.module.scss'
import { ParamTableProps } from './ParamTable.props'

const ParamTable: React.FC<ParamTableProps> = ({ params }) => {
  return (
    <table className={styles.paramTable}>
      <tbody>
        {params.map((param, index) => (
          <tr key={index}>
            <th>{param.name}</th>
            <td>{param.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ParamTable
