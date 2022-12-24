import { DetailedHTMLProps, HTMLAttributes } from 'react'

export enum Icon {
  add,
  edit,
  delete,
  back,
}
export interface IconButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
  icon: Icon
}
