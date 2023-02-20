import { HTMLAttributes } from 'react'

import styles from './Button.module.css'

export const Button = ({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return <button className={`${styles.customStyle} ${className}`} {...props} />
}
