import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as RocketIcon} from '../../static/images/icon-rocket.svg'
import styles from './lauchAppBtn.module.scss'

function LauchApp() {
  return (
    <Link className={styles.lauchApp} to="https://app.magma.finance">
      <RocketIcon className={styles.lauchApp__icon}/>
      <span className={styles.lauchApp__text}>Lauch Magma</span>
    </Link>
  )
}


export default LauchApp