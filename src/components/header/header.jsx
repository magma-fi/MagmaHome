import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import LauchAppBtn from '../lauchAppBtn/lauchAppBtn'
import Nav from '../nav/nav'
import { ReactComponent as MagmaLogoText } from '../../static/images/magmaLogo-text.svg'
import { ReactComponent as MenuIcon} from '../../static/images/icon-menu.svg'
import { ReactComponent as CloseIcon} from '../../static/images/icon-close.svg'
import { ReactComponent as MagmaLogo } from '../../static/images/magmaLogo.svg'
import styles from './header.module.scss'

const MenuModal = (props) => {
  return (
    <div className={styles.menuModal}>
      <div className={styles.menuModal__close} onClick={() => props.modalHandle(false)}>
        <CloseIcon/>
      </div>
      <div className={styles.menuModal__mask}></div>
      <div className={styles.menuModal__body}>
        <div className={styles.menuModal__content}>
          <MagmaLogo className={styles.menuModal__logo}/>
          <Nav/>
          <div className={styles.menuModal__body__lauchApp}>
            <LauchAppBtn/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const [showModal, setShowModal] = useState(false)
  const modalHandle = (isOpen) => setShowModal(isOpen)
  return (
    <header className={styles.hd}>
        <MagmaLogoText className={styles.hd__logo}/>
        <div className={styles.hd__nav}>
          <Nav/>
        </div>
        <div className={styles.hd__lauchApp}>
          <LauchAppBtn/>
        </div>
        <div className={styles.hd__menu} onClick={() => modalHandle(true)}>
          <MenuIcon/>
        </div>
        {showModal && createPortal(
          <MenuModal modalHandle={modalHandle} />,
          document.getElementById('root')
        )}
    </header>
  )
}

export default Header
