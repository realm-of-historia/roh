"use client"

import React from 'react'
import styles from './Explorer.module.scss'
import Text from '@/components/Text/Text'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import ImageMy from '../../../../components/Image/ImageMy'

export interface StandardComponentProps {
  data?: any
}
const Explorer = ({data} : StandardComponentProps) => {

  return (
    <div className={styles.main}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Pagination]}
        slidesPerView={1}
        loop={true}
        className='mySwiper'
      >
        {data?.map((item : any, index : number) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
              <ImageMy src={item.img.data.attributes.url} alt='' width={1920} height={720}/>
            <Text><p>{item.title}</p></Text>
          </SwiperSlide>
        ) )}

        <SwiperButton/>
      </Swiper>
    </div>
  )
}

export default Explorer