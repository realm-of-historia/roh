import React from 'react'
import styles from './Explorer.module.scss'
import Text from '@/components/Text/Text'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'


const Explorer = () => {

  const slides = [
    ['/Slider image.png', 'UNLeASH YOUR INNeR eXPLOReR'],
    ['/Slider image.png', 'UNLeASH YOUR INNeR eXPLOReR'],
    ['/Slider image.png', 'UNLeASH YOUR INNeR eXPLOReR'],
    ['/Slider image.png', 'UNLeASH YOUR INNeR eXPLOReR']
  ]


  return (
    <div className={styles.main}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        className='mySwiper'
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.explorerImage}>
              <img src={item[0]} alt='' width={1920} height={720}/>
            </div>
            <Text><p>{item[1]}</p></Text>
          </SwiperSlide>
        ) )}

        <SwiperButton/>
      </Swiper>
    </div>
  )
}

export default Explorer