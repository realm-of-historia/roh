import React from 'react'
import styles from './Faces.module.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperButton from '@/components/SwiperButton/SwiperButton'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import { useWindowWidth } from '@react-hook/window-size'
import {useRef} from 'react'

const Faces = () => {

  const windowWidth = useWindowWidth()

  let slides = 3;

  if (windowWidth <= 576) {
      slides = 1.2
  }

  const swiperRef = useRef<any>(null)

  return (
    <div className={styles.faces}>
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
          speed= {6000}
          className={styles.mySwiper}
          >
            <SwiperSlide>
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
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Faces