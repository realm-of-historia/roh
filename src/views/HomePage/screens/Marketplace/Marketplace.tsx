"use client"

import React, { useRef, useState, useEffect } from 'react'
import styles from './Marketplace.module.scss'
import MarketCard from '@/components/MarketCard/MarketCard'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import { useWindowWidth } from '@react-hook/window-size'
import { useInView } from 'react-intersection-observer'
export interface StandardComponentProps {
    title?: string,
    isMarket?: boolean
    ref?: any
  }
const Marketplace = ({title, isMarket, ref}: StandardComponentProps) => {

    const [reff, inView] = useInView()

    
    const windowWidth: any = useWindowWidth()
    const [width, setWidth]: any = useState()
  
  
    useEffect(() => {
      setWidth(windowWidth)
    }, [windowWidth])  

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


    let slides = 4;

    if (width <= 576) {
        slides = 1.2
    }

    const swiperRef = useRef<any>(null)

  return (
        <div className={styles.marketplace} ref={ref}>
            {!isMarket &&         
                <div className={styles.title}>
                    <p ref={reff} className={`${inView ? styles.viewAnimation : ''}`}>{title}</p>
                    <Divider position={'left top'}></Divider>
                </div>
            }
            <div
                onMouseEnter={() => swiperRef.current && swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current && swiperRef.current.swiper.autoplay.start()}
            >
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Pagination, Autoplay]}
                    // spaceBetween={24}
                    slidesPerView={slides}
                    ref={swiperRef}
                    autoplay={{
                        delay: 0,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={!isMarket ? 6000 : 1000000000000000000000000}
                    className={styles.mySwiper}
                >
                    <SwiperSlide>
                        <MarketCard title={marketCardInfo[0]} price={marketCardInfo[1]} image={marketCardInfo[2]} avatar={marketCardInfo[3]} name={marketCardInfo[4]} bid={marketCardInfo[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfoSecond[0]} price={marketCardInfoSecond[1]} image={marketCardInfoSecond[2]} avatar={marketCardInfoSecond[3]} name={marketCardInfoSecond[4]} bid={marketCardInfoSecond[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfoThird[0]} price={marketCardInfoThird[1]} image={marketCardInfoThird[2]} avatar={marketCardInfoThird[3]} name={marketCardInfoThird[4]} bid={marketCardInfoThird[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfo[0]} price={marketCardInfo[1]} image={marketCardInfo[2]} avatar={marketCardInfo[3]} name={marketCardInfo[4]} bid={marketCardInfo[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfo[0]} price={marketCardInfo[1]} image={marketCardInfo[2]} avatar={marketCardInfo[3]} name={marketCardInfo[4]} bid={marketCardInfo[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfoSecond[0]} price={marketCardInfoSecond[1]} image={marketCardInfoSecond[2]} avatar={marketCardInfoSecond[3]} name={marketCardInfoSecond[4]} bid={marketCardInfoSecond[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfoThird[0]} price={marketCardInfoThird[1]} image={marketCardInfoThird[2]} avatar={marketCardInfoThird[3]} name={marketCardInfoThird[4]} bid={marketCardInfoThird[5]}></MarketCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MarketCard title={marketCardInfo[0]} price={marketCardInfo[1]} image={marketCardInfo[2]} avatar={marketCardInfo[3]} name={marketCardInfo[4]} bid={marketCardInfo[5]}></MarketCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
  )
}

export default Marketplace