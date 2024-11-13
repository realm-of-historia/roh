import React from 'react'
import styles from './MarketCard.module.scss'
import Text from '../Text/Text'
import Link from 'next/link'

const MarketCard = ({bid, price, image, title, avatar, name}: {bid: string | Array<string>, price: string | Array<string>, image: string | Array<string>, title: string | Array<string>, avatar: string, name: string | Array<string>}) => {


  return (
    <div className={styles.card}>
        <Link href='/marketplace'>
            <div className={styles.imageContainer}>
                <img src={`${image}.png`} alt='' width={480} height={480}/>
                <div className={styles.dividerTop}></div>
                <div className={styles.dividerBottom}></div>
            </div>
            <div className={styles.dividerRight}></div>
            <div className={styles.dividerLeft}></div>
            <div className={styles.dividerBot}></div>
            <Text>
                <p className={styles.title}>
                    {title}
                </p>
            </Text>
            <div className={styles.price}>
                <Text>
                    <p className={styles.first}>
                        Price
                    </p>
                </Text>
                <Text>
                    <p className={styles.second}>
                        {price}
                    </p>
                </Text>
            </div>
            <div className={styles.bid}>
                <Text>
                    <p className={styles.first}>
                        Highest Bid
                    </p>
                </Text>
                <Text>
                    <p className={styles.second}>
                        {bid}
                    </p>
                </Text>
            </div>
            <div className={styles.user}>
                <Text>
                    <img src={`${avatar}.png`} alt='' width={32} height={32}/>
                    <p>{name}</p>
                </Text>
            </div>
        </Link>
    </div>
  )
}

export default MarketCard