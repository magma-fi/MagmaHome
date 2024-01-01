import React, {useState} from 'react'
import classNames from 'classnames'
import { useWindowWidth } from '@react-hook/window-size'
import { isMobile } from 'react-device-detect'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { ReactComponent as SloganSvg} from '../../static/images/slogan-pic.svg'
import BorrowWen from '../../static/images/use-case-borrow-wen.png'
import RedeemWen from '../../static/images/use-case-redeem-wen.png'
import StakeMgm from '../../static/images/use-case-stake-mgm.png'
import StakeWen from '../../static/images/use-case-stake-wen.png'
import { ReactComponent as BorrowWenIcon} from '../../static/images/icon-borrowWen.svg'
import { ReactComponent as RocketColorIcon} from '../../static/images/icon-rocketColor.svg'
import { ReactComponent as FireIcon} from '../../static/images/icon-fire.svg'
import { ReactComponent as RedeemWenIcon} from '../../static/images/icon-redeemWen.svg'
import { ReactComponent as KeyBenefits} from '../../static/images/key-benefits-1wen-1usd.svg'
import { ReactComponent as GovernanceIcon1} from '../../static/images/icon-benefit--governance1.svg'
import { ReactComponent as GovernanceIcon2} from '../../static/images/icon-benefit--governance2.svg'
import { ReactComponent as LoansIcon1} from '../../static/images/icon-benefit--interest-free1.svg'
import { ReactComponent as LoansIcon2} from '../../static/images/icon-benefit--interest-free2.svg'
import { ReactComponent as PriceFloorIcon} from '../../static/images/icon-benefit--hard-price-floor.svg'
import { ReactComponent as RiskManagementIcon1} from '../../static/images/icon-benefit--risk-management1.svg'
import { ReactComponent as RiskManagementIcon2} from '../../static/images/icon-benefit--risk-management2.svg'
import { ReactComponent as RiskManagementIcon3} from '../../static/images/icon-benefit--risk-management3.svg'


import LauchAppBtn from '../../components/lauchAppBtn/lauchAppBtn'
import styles from './home.module.scss'


const Slogan = () => {
  return (
    <section className={classNames(styles.module, styles.slogan)}>
      <SloganSvg className={styles.slogan__pic}/>
      <h1 className={styles.slogan__sloganText}>Non-custodial and decentralized LST/RWA-backed stablecoin</h1>
      <p className={classNames(styles.module__descText, styles.slogan__descText)}>Magma is a new DeFi primitive that enables users to mint a stablecoin, WEN. Fully collateralized by liquid staking tokens (LSTs) and real world assets (RWAs), WEN opens DeFi doors for projects and users alike through providing a native stable asset for the ecosystem.</p>
      <div className={styles.slogan__lauchApp}>
        <LauchAppBtn/>
      </div>
    </section>
  )
}


const UseCases = () => {
  const clientWidth = useWindowWidth()
  const mobileMode = isMobile || clientWidth < 860
  const [curTabIndex, setCurTabIndex] = useState(0);
  const listData = [{
    icon: <BorrowWenIcon className={styles.useCases__ico}/>,
    pic: BorrowWen,
    title: "Borrow WEN",
    desc: "Get an interest-free loan using IOTX as collateral. DAI and USDC coming soon.",
    comingSoon: false,
  }, {
    icon: <RocketColorIcon className={styles.useCases__ico}/>,
    pic: StakeWen,
    title: "Stake WEN",
    desc: "Deposit WEN to the Stability Pool and earn collateral assets from liquidation fees, and MGM rewards.",
    comingSoon: false,
  }, {
    icon: <FireIcon className={styles.useCases__ico}/>,
    pic: StakeMgm,
    title: "Stake MGM",
    desc: "Stake MGM to earn a share of platform revenue - from fees and sustainable real yield through LSTs and RWAs.",
    comingSoon: true,
  }, {
    icon: <RedeemWenIcon className={styles.useCases__ico}/>,
    pic: RedeemWen,
    title: "Redeem WEN",
    desc: "1 WEN for 1 USD even when the WEN peg falls below $1.",
    comingSoon: false,
  }]

  const isActive = (index) => index === curTabIndex

  return (
    <section className={classNames(styles.module, styles.useCases)}>
      {
        listData.map((item, index) => {
          return (isActive(index) && !mobileMode)&& (
            <div key={index} className={styles.useCases__pcPic}>
              <img className={styles.useCases__pic} src={item.pic} alt={item.title}/>
            </div>
          )
        })
      }
      <div className={styles.useCases__content}>
        <h2 className={styles.module__primaryText}>Use cases</h2>
        <div className={styles.useCases__list}>
          {
            listData.map((item, index) => (
              <div 
                key={index} 
                className={classNames({
                  [styles.useCases__item]: true,
                  [styles.useCases__itemActive]: isActive(index) && !mobileMode
                })} 
                onMouseEnter={() => setCurTabIndex(index)} 
              >
                {(isActive(index) || mobileMode) && item.icon}
                <h3 className={styles.module__secondText}>
                  <span>{item.title}</span>
                  {item.comingSoon && <span className={styles.useCases__comingSoon}>Coming Soon</span>}
                </h3>
                {(isActive(index) || mobileMode) && <p className={styles.module__descText}>{item.desc}</p>}
                <div className={styles.useCases__mobilePic}>
                  <img className={styles.useCases__pic} src={item.pic} alt={item.title}/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

const KeyBenfits = () => {
  const listData = [{
    icon: (
      <div className={styles.keyBenfits__ico}>
        <LoansIcon1 className={styles.keyBenfits__ico__item}/>
        <LoansIcon2 className={styles.keyBenfits__ico__item}/>
      </div>
    ),
    title: "Interest-free loans",
    desc: "Free your liquidity with interest-free loans. Use the WEN stablecoin to participate in ecosystem DeFi and DePin opportunities.",
  }, {
    icon: (
      <div className={styles.keyBenfits__ico}>
        <RiskManagementIcon1 className={classNames(styles.keyBenfits__ico__item, styles.keyBenfits__ico__item__risk1)}/>
        <RiskManagementIcon2 className={classNames(styles.keyBenfits__ico__item, styles.keyBenfits__ico__item__risk1)}/>
        <RiskManagementIcon3 className={classNames(styles.keyBenfits__ico__item, styles.keyBenfits__ico__item__risk2)}/>
      </div>
    ),
    title: "Better risk management",
    desc: "Each position has a single collateral type, with specific parameters, isolating risks from each other.",
  }, {
    icon: (
      <div className={styles.keyBenfits__ico}>
        <PriceFloorIcon className={styles.keyBenfits__ico__item}/>
      </div>
    ),
    title: "Hard price floor",
    desc: "WEN maintains a price floor at $1 through a direct stability mechanism and arbitrage to restore the peg when it deviates.",
  }, {
    icon: (
      <div className={styles.keyBenfits__ico}>
        <GovernanceIcon1 className={styles.keyBenfits__ico__item}/>
        <GovernanceIcon2 className={classNames(styles.keyBenfits__ico__item, styles.keyBenfits__ico__item__governance2)}/>
      </div>
    ),
    title: "Governance minimized",
    desc: "Magma algorithmically manages its monetary policies, utilizing WEN redemption rates to set borrowing fees and stabilize WEN's value, ensuring a predictable and controlled ecosystem."
  }]
  return (
    <section className={classNames(styles.module, styles.keyBenfits)}>
      <h2 className={styles.module__primaryText}>Key benefits</h2>
      <div className={styles.keyBenfits__content}>
        <div className={styles.keyBenfits__list}>
          {
            listData.map((item, index) => (
              <div key={index} className={styles.keyBenfits__item}>
                {item.icon}
                <h3 className={classNames(styles.module__secondText)}>{item.title}</h3>
                <p className={styles.module__descText}>{item.desc}</p>
              </div>
            ))
          }
        </div>
        <KeyBenefits className={styles.keyBenfits__pic}/>
      </div>
    </section>
  )
}

const Roadmap = () => {
  const clientWidth = useWindowWidth()
  const mobileMode = isMobile || clientWidth < 860
  // TODO: phase2 完成把finish调整成true即可
  const listData = [{
    phase: "phase 1",
    phaseTime: "Late 2023",
    title: "Minting WEN using IOTX",
    desc: "This can be considered an early release or beta version. Minting will be limited to 1,000 WEN during this testing period.",
    finish: true,
  }, {
    phase: "phase 2",
    phaseTime: "Late Q1 or early Q2 2024",
    title: "WEN deposit rewards and sustainable real yield",
    desc: "Magma will enable deposit rewards for WEN. The income to support these rewards will be sustainably earned through the underlying LST.",
    finish: false,
  }, {
    phase: "phase 3",
    phaseTime: "Late Q2 2024",
    title: "DAO governance and platform token",
    desc: "The Magma Protocol governance framework and platform token (MGM) will be released.",
    finish: false
  }]

  const listFinish = listData.filter(item => item.finish)

  const lineFinishCss = {
    "width": !mobileMode ? listFinish.length * 33.33 + '%' : '4px',
    "height": mobileMode ? listFinish.length * 33.33 + '%' : '4px'
  }
  
  return (
    <section className={classNames(styles.module, styles.roadmap)}>
      <h2 className={styles.module__primaryText}>Roadmap</h2>
      <div className={styles.roadmap__content}>
        <div className={classNames(styles.roadmap__list)}>
          <div className={styles.roadmap__list__line}></div>
          <div className={styles.roadmap__list__lineFinish} 
              style={lineFinishCss}
          ></div>
            {
              listData.map((item, index) => (
                <div key={index} className={classNames(styles.roadmap__item)}>
                  <div className={classNames({
                    [styles.roadmap__item__circle]: true,
                    [styles.roadmap__item__circleFinish]: item.finish,
                  })}></div>
                  {item.finish && <div className={styles.roadmap__item__lineFinish}></div>}
                  <div className={styles.roadmap__item__phase}>
                    <span className={styles.roadmap__item__phase__num}>{item.phase}</span>
                    <span className={styles.roadmap__item__phase__time}>{item.phaseTime}</span>
                  </div>
                  <h3 className={classNames(styles.module__secondText)}>{item.title}</h3>
                  <p className={styles.module__descText}>{item.desc}</p>
                </div>
              ))
            }
        </div>
        <div className={classNames(styles.roadmap__listMore)}>
            <div className={styles.roadmap__item__circle}></div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className={classNames('page', 'layout')}>
      <Header />
      <main>
        <Slogan/>
        <UseCases/>
        <KeyBenfits/>
        <Roadmap/>
      </main>
      <Footer />
    </div>
  )
}


export default Home
