"use client"

import React from 'react'
import styles from './Bundles.module.scss'
import RunningLine from '@/components/RunningLine/RunningLine'
import Bundle from '@/components/Bundle/Bundle'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import { useWindowWidth } from '@react-hook/window-size'
import Divider from '@/components/Divider/Divider'
export interface StandardComponentProps {
    data?: any,
    text?: string,
    href?: any,
    ribbon? : any
}

const Bundles = ({ribbon, data =[], text, href='/' }: StandardComponentProps) => {
    const { ref, inView } = useInView()

    const windowWidth: any = useWindowWidth()
    const [width, setWidth]: any = useState()


    useEffect(() => {
        setWidth(windowWidth)
    }, [windowWidth])


    const bundleInfo = [
        '25 Products Mega Bundle with 50% off discount',
        '$ 28.00',
        '/rockHoleNFT'
    ]

    const bundleInfoSecond = [
        '25 Products Mega Bundle with 50% off discount',
        '$ 28.00',
        '/chestNFT'
    ]

    const bundleInfoThird = [
        '25 Products Mega Bundle with 50% off discount',
        '$ 28.00',
        '/rockNFT'
    ]

    let slides = 4;

    if (width <= 576) {
        slides = 1.2
    }

    const swiperRef = useRef<any>(null)
    return (
        <div className={styles.bundles} ref={ref}>
            <RunningLine image={ribbon?.data.attributes.url} text='HOTTeST BUNDLeS'></RunningLine>
            <Swiper
                modules={[Navigation, Scrollbar, A11y, Pagination, Autoplay]}
                // spaceBetween={24}
                slidesPerView={slides}
                ref={swiperRef}
                className={`${styles.mySwiper} ${styles.bundlesContainer}`}
            >
                {
                    data?.map((_: any, index: number) => (
                        <SwiperSlide key={index}>
                            <Bundle href={_.href} description={_.description} image={_.img.data.attributes.url}></Bundle>
                        </SwiperSlide>
                    ))
                }
                {/* <SwiperSlide>
                    <Bundle title={bundleInfo[0]} price={bundleInfo[1]} image={bundleInfo[2]} href={href}></Bundle>
                </SwiperSlide>
                <SwiperSlide>
                    <Bundle title={bundleInfoSecond[0]} price={bundleInfoSecond[1]} image={bundleInfoSecond[2]} href={href}></Bundle>
                </SwiperSlide>
                <SwiperSlide>
                    <Bundle title={bundleInfoThird[0]} price={bundleInfoThird[1]} image={bundleInfoThird[2]} href={href}></Bundle>
                </SwiperSlide> */}
                <SwiperSlide>
                    <Link href={href} className={styles.offers}>
                        <div className={`${inView ? styles.diagonal : ''}`}></div>
                        <p className={styles.text}>
                            {'View all offers'}
                        </p>
                        <div className={`${inView ? styles.bigCircle : ''}`}></div>
                        <div className={`${inView ? styles.firstCircle : ''}`}></div>
                        <div className={`${inView ? styles.secondCircle : ''}`}></div>

                        {/* <div className={styles.firstLine}></div>
                    <div className={styles.secondLine}></div> */}
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default Bundles