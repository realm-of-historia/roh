import React from 'react'
import styles from './MarketCard.module.scss'

const MarketCard = ({bid, price, image, title, avatar, name}: {bid: string | Array<string>, price: string | Array<string>, image: string | Array<string>, title: string | Array<string>, avatar: string, name: string | Array<string>}) => {


  return (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            <img src={`${image}.png`} alt='' width={480} height={480}/>
            <div className={styles.dividerTop}></div>
            <div className={styles.dividerBottom}></div>
        </div>
        <div className={styles.dividerRight}></div>
        <div className={styles.dividerBot}></div>
        <p className={styles.title}>
            {title}
        </p>
        <div className={styles.price}>
            <p className={styles.first}>
                Price
            </p>
            <p className={styles.second}>
                {price}
            </p>
        </div>
        <div className={styles.bid}>
            <p className={styles.first}>
                Highest Bid
            </p>
            <p className={styles.second}>
                {bid}
            </p>
        </div>
        <div className={styles.user}>
            <img src={`${avatar}.png`} alt='' width={32} height={32}/>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default MarketCard