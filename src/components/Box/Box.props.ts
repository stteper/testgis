import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface BoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  children?: JSX.Element | JSX.Element[] | null
}
