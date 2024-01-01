import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as LinkIcon} from '../../static/images/icon-link.svg'
import { ReactComponent as DocIcon} from '../../static/images/icon-doc.svg'
import { ReactComponent as TwitterIcon} from '../../static/images/icon-twitter.svg'

// import { ReactComponent as LangEnIcon} from '../../static/images/icon-language-en.svg'
// import { ReactComponent as LangCnIcon} from '../../static/images/icon-language-cn.svg'
// import { ReactComponent as LangRuIcon} from '../../static/images/icon-language-ru.svg'
// import { ReactComponent as ArrowIcon} from '../../static/images/icon-arrow.svg'

import styles from './nav.module.scss'
// import classNames from 'classnames'


// TODO: 切换语言暂不需要，功能还未完成
// function SwitchLang() {
//   const [showLangMenu, setShowLangMenu] = useState(false)
//   const [curLang, setCurLang] = useState('en')
//   const langRef = useRef(null);

//   const langData = [
//   {
//     lang: 'en',
//     icon: <LangEnIcon/>,
//     text: 'English'
//   }, {
//     lang: 'ru',
//     icon: <LangRuIcon/>,
//     text: 'русский'
//   },{
//     lang: 'cn',
//     icon: <LangCnIcon/>,
//     text: '中文'
//   }
// ]

//   let timer = null 
//   const enterHandle = () => {
//     clearTimeout(timer)
//     setShowLangMenu(true)
//   }

//   const leaveHandle = () => {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       setShowLangMenu(false)
//     }, 400)
//   }


//   return (
//     <div 
//       className={styles.nav__lang} 
//       onMouseLeave={leaveHandle}
//       ref={langRef}
//     >
//       <div className={styles.nav__lang__curLang}
//         onMouseEnter={enterHandle}
//       >
//         <LangEnIcon/>
//         <span className={styles.nav__lang__curLang__text}>English</span>
//         <ArrowIcon className={classNames({
//           [styles.nav__lang__curLang__arrow]: true,
//           [styles.nav__lang__curLang__arrowActive]: showLangMenu 
//         })}/>
//       </div>
//       <div 
//         className={styles.nav__lang__list} 
//         style={{display: showLangMenu ? 'block': 'none'}}
//         onMouseEnter={enterHandle}
//       >
//         {
//           langData.map((item, index) => (
//             <div key={index} 
//               className={classNames({
//                 [styles.nav__lang__item]: true
//               })}>
//               {item.icon}
//               <span>{item.text}</span>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }


function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="https://docs.magma.finance/" target="_blank" className={styles.nav__item} rel="noopener noreferrer">
        <DocIcon/>
        <span className={styles.nav__item__text}>Docs</span>
        <LinkIcon/>
      </Link>
      <Link to="https://twitter.com/MagmaProtocol" target="_blank" className={styles.nav__item} rel="noopener noreferrer">
        <TwitterIcon/>
        <span className={styles.nav__item__text}>Twitter (X)</span>
        <LinkIcon/>
      </Link>
      {/* <SwitchLang/> */}
    </nav>
  )
}



export default Nav