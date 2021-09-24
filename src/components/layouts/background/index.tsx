import {FC} from "react";
import styles from './index.module.scss'

export const Background: FC<{}> = props => {
  return (
    <div className={styles['background']} />
  )
}