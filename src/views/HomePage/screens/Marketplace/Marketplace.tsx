import React from 'react'
import styles from './Marketplace.module.scss'
import MarketCard from '@/components/MarketCard/MarketCard'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'
import { useSwiper } from 'swiper/vue'

const Marketplace = ({isMarket}: {isMarket?: boolean}) => {

    const marketCardInfo = [
        'Stone of prophecy',
        '2.66 ETH',
        'rockHoleNFT',
        'userImage3',
        'herzl77',
        '1.33 ETH'
    ]

    const marketCardInfoSecond = [
        'Stone of prophecy',
        '2.66 ETH',
        'chestNFT',
        'userImage2',
        'herzl77',
        '1.33 ETH'
    ]

    const marketCardInfoThird = [
        'Stone of prophecy',
        '2.66 ETH',
        'rockNFT',
        'userImage1',
        'herzl77',
        '1.33 ETH'
    ]

  return (
    <div className={styles.marketplace}>
        {!isMarket &&         
            <div className={styles.title}>
                <Text><p>MARKeTPLACe</p></Text>
                <Divider position={'left top'}></Divider>
            </div>
        }
        <div className={styles.cardsContainer}>
            <MarketCard title={marketCardInfo[0]} price={marketCardInfo[1]} image={marketCardInfo[2]} avatar={marketCardInfo[3]} name={marketCardInfo[4]} bid={marketCardInfo[5]}></MarketCard>
            <MarketCard title={marketCardInfoSecond[0]} price={marketCardInfoSecond[1]} image={marketCardInfoSecond[2]} avatar={marketCardInfoSecond[3]} name={marketCardInfoSecond[4]} bid={marketCardInfoSecond[5]}></MarketCard>
            <MarketCard title={marketCardInfoThird[0]} price={marketCardInfoThird[1]} image={marketCardInfoThird[2]} avatar={marketCardInfoThird[3]} name={marketCardInfoThird[4]} bid={marketCardInfoThird[5]}></MarketCard>
            <MarketCard title={marketCardInfo[0]} price={marketCardInfo[1]} image={marketCardInfo[2]} avatar={marketCardInfo[3]} name={marketCardInfo[4]} bid={marketCardInfo[5]}></MarketCard>
        </div>
    </div>
  )
}

export default Marketplace