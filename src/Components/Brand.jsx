import React from 'react'

import styles from '../styles.js'
import { dropbox, coinbase, airbnb, google, binance, apple } from '../assets'

const Brand = () => {
  return (
    <div className={`brand__section ${styles.paddingF} flex flex-wrap justify-center items-center`}>
      <div className={`${styles.flexCenter} min-w-[120px] max-w-[150px] m-4 flex-1 `}>
        <img src={airbnb} alt="google" />
      </div>
      <div className={`${styles.flexCenter} min-w-[120px] max-w-[150px] m-4 flex-1 `}>
        <img src={binance} alt="google" />
      </div>
      <div className={`${styles.flexCenter} min-w-[120px] max-w-[150px] m-4 flex-1 `}>
        <img src={dropbox} alt="google" />
      </div>
      <div className={`${styles.flexCenter} min-w-[120px] max-w-[150px] m-4 flex-1 `}>
        <img src={coinbase} alt="google" />
      </div>
    </div>
  )
}

export default Brand