import { LinkProps } from 'react-router-dom'

export enum Icon {
  add,
  edit,
  delete,
  back,
}
export interface IconButtonProps extends LinkProps {
  text?: string
  icon: Icon
  href: string
}
