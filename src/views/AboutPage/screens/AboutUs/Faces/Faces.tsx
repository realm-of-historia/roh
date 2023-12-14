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
const Faces = ({ data = [] }: StandardComponentProps) => {

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
      {
        width <= 576 ?
          <div className={styles.wrapper}>
            <Divider position={'top left'} noAnim={true} />
            {
              data?.map((_: any, i: number) => (
                <SwiperSlide key={i + 5576}>
                  <Link href={_.href || '/about'} className={styles.wrapperCard}>
                    {
                      _.img.data && 
                      <ImageMy src={_.img.data.attributes.url} alt='' width={640} height={640} />
                    }
                    <div className={styles.text}>
                      {
                        _.name && 
                        <p className={styles.titleCard}>{_.name}</p>
                      }
                      {
                        _.title && 
                        <p>{_.title}</p>
                      }
                      {
                        _.icon.data && 
                        <ImageMy src={_.icon.data.attributes.url} alt='' width={32} height={32} />
                      }
                    </div>
                    <Divider position={'top right'} noAnim={true} />
                  </Link>
                </SwiperSlide>
              ))
            }
          </div>
          :
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Pagination, Autoplay]}
            slidesPerView={3}
            loop={true}
            scrollbar={{ draggable: true }}
            className={styles.wrapper}
          >
            <Divider position={'top left'} noAnim={true} />
            {
              data?.map((_: any, i: number) => (
                <SwiperSlide key={i + 345576}>
                  <Link href={_.href || '/about'} className={styles.wrapperCard}>
                    {
                      _.img.data &&
                      <ImageMy src={_.img.data?.attributes.url} alt='' width={640} height={640} />

                    }
                    <div className={styles.text}>
                      {
                        _.name && 
                        <p className={styles.titleCard}>{_.name}</p>
                      }
                      {
                        _.title && 
                        <p>{_.title}</p>
                      }
                      {
                        _.icon.data &&
                        <ImageMy src={_.icon.data?.attributes.url} alt='' width={32} height={32} />
                      }
                    </div>
                    <Divider position={'top right'} noAnim={true} />
                  </Link>
                </SwiperSlide>
              ))
            }
            {
              data?.length < 6 &&
              data?.map((_: any, i: number) => (
                <SwiperSlide key={i + 34376}>
                  <Link href={_.href || '/about'} className={styles.wrapperCard}>
                    {
                      _.img.data &&
                      <ImageMy src={_.img.data.attributes.url} alt='' width={640} height={640} />
                    }
                    <div className={styles.text}>
                      {
                        _.name && 
                        <p className={styles.titleCard}>{_.name}</p>
                      }
                      {
                        _.title && 
                        <p>{_.title}</p>
                      }
                      {
                        _.icon.data &&
                        <ImageMy src={_?.icon?.data?.attributes.url} alt='' width={32} height={32} />
                      }
                    </div>
                    <Divider position={'top right'} noAnim={true} />
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
      }

    </div>
  )
}

export default Faces