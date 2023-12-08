"use client"

import React from 'react'
import styles from './Explorer.module.scss'
import Text from '@/components/Text/Text'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import ImageMy from '../../../../components/Image/ImageMy'
import Link from 'next/link'

export interface StandardComponentProps {
  data?: any
}
const Explorer = ({ data }: StandardComponentProps) => {


  return (
    <div className={styles.main}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={1000}
        scrollbar={{ draggable: true }}
        className='mySwiper'
      >
        {data?.map((item: any, index: number) => (
          <SwiperSlide key={index} >
            <Link href={item?.href || '/'} className={styles.swiperSlide}>
              <div className={styles.wrapperMedia}>
                <ImageMy src={item.img.data.attributes.url} alt='' width={1920} height={720} />
              </div>
              <Text><p>{item.title}</p></Text>
            </Link>
          </SwiperSlide>
        ))}

        <SwiperButton />
      </Swiper>
    </div>
  )
}

export default Explorer