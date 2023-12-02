"use client"

import React from 'react'
import styles from './Faces.module.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import { useWindowWidth } from '@react-hook/window-size'
import { useRef, useEffect, useState } from 'react'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'
import Link from 'next/link'
export interface StandardComponentProps {
  data?: any
}
const Faces = ({ data }: StandardComponentProps) => {

  const windowWidth: any = useWindowWidth()
  const [width, setWidth]: any = useState()

  useEffect(() => {
    setWidth(windowWidth)
  }, [windowWidth])


  let slides = 3;

  if (width <= 576) {
    slides = 1.2
  }

  const swiperRef = useRef<any>(null)

  return (
    <div className={styles.faces}>
      {/* <Swiper
        modules={[Navigation, Scrollbar, A11y, Pagination, Autoplay]}
        // spaceBetween={24}
        slidesPerView={slides}
        ref={swiperRef}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={6000}
        className={styles.mySwiper}
      > */}
      {/* {
          data?.data.map((_: any, i: number) => (
            <SwiperSlide key={i + 55}>
              <ImageMy src={_.attributes.url} alt='' width={640} height={640}/>
            </SwiperSlide>
          ))
        } */}
      <div className={styles.wrapper}>
        <Divider position={'top left'} noAnim={true} />
        {
          data?.map((_: any, i: number) => (
            <Link href={_.href || '/about'} key={i + 345576} className={styles.wrapperCard}>
              <ImageMy src={_.img.data.attributes.url} alt='' width={640} height={640} />
              <div className={styles.text}>
                <p className={styles.titleCard}>{_.name}</p>
                <p>{_.title}</p>
                <ImageMy src={_.icon.data.attributes.url} alt='' width={32} height={32} />
              </div>
              <Divider position={'top right'} noAnim={true}/>
            </Link>
          ))
        }
      </div>
      {/* <SwiperSlide>
              <img src='/Post-1.png' alt='' width={640} height={640}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/Post-2.png' alt='' width={640} height={640}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/Post.png' alt='' width={640} height={640}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/Post-1.png' alt='' width={640} height={640}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/Post-2.png' alt='' width={640} height={640}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/Post.png' alt='' width={640} height={640}/>
            </SwiperSlide> */}
      {/* </Swiper> */}
    </div>
  )
}

export default Faces