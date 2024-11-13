import React from 'react'
import {useSwiper} from 'swiper/react'
import styles from './SwiperButton.module.scss';

const SwiperButton = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.navigation}>
            <button onClick={() => swiper.slidePrev()}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M38.5833 17.1053C39.4458 17.7953 39.5857 19.0539 38.8956 19.9165L29.2285 32.0004L38.8956 44.0843C39.5857 44.9469 39.4458 46.2055 38.5833 46.8955C37.7208 47.5855 36.4622 47.4456 35.7722 46.5831L25.1055 33.2498C24.5212 32.5194 24.5212 31.4814 25.1055 30.751L35.7722 17.4177C36.4622 16.5552 37.7208 16.4153 38.5833 17.1053Z" fill="#FBF6E8"/>
                </svg>
            </button>
            <button onClick={() => swiper.slideNext()}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.4177 46.8947C24.5552 46.2047 24.4153 44.9461 25.1053 44.0835L34.7725 31.9996L25.1053 19.9157C24.4153 19.0531 24.5552 17.7945 25.4177 17.1045C26.2802 16.4145 27.5388 16.5544 28.2288 17.4169L38.8955 30.7502C39.4798 31.4806 39.4798 32.5186 38.8955 33.249L28.2288 46.5823C27.5388 47.4448 26.2802 47.5847 25.4177 46.8947Z" fill="#FBF6E8"/>
            </svg>
            </button>
        </div>
    )
}

export default SwiperButton;