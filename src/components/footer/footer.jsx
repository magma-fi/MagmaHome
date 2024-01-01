import React from 'react'
import Nav from '../nav/nav'
import { ReactComponent as MagmaLogoText } from '../../static/images/magmaLogo-text.svg'
import { ReactComponent as MagmaLogo } from '../../static/images/magmaLogo.svg'
import LauchAppBtn from '../lauchAppBtn/lauchAppBtn'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.ft}>
      <div className={styles.ft__r1}>
        <MagmaLogoText className={styles.ft__logoText}/>
        <MagmaLogo className={styles.ft__logo}/>
        <Nav/>
      </div>
      <div className={styles.ft__lauchApp}>
        <LauchAppBtn/>
      </div>
      <div className={styles.ft__copyright}>Made with ❤️ by the Magma team worldwide 🌍</div>
    </footer>
  )
}

export default Footer
