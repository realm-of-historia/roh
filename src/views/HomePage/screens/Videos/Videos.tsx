"use client";

import React, { useRef, useEffect } from 'react'
import styles from './Videos.module.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ImageMy from '@/components/Image/ImageMy';
gsap.registerPlugin(ScrollTrigger)
export interface StandardComponentProps {
  data?: any
}
const Videos = ({ data }: StandardComponentProps) => {
  const firstImage = useRef(null)
  const secondImage = useRef(null)
  const thirdImage = useRef(null)
  const refArray = [firstImage,secondImage,thirdImage]
  
  useEffect(() => {
    if (firstImage.current && secondImage.current && thirdImage.current) {
      gsap.to([firstImage.current, secondImage.current, thirdImage.current], {
        scale: 1.2,
        scrollTrigger: {
          trigger: firstImage.current,
          start: 'top bottom',
          scrub: 1,
          toggleActions: 'play reset play reset',
        },
      });
    }
  }, []);
  return (
    <div className={styles.videos} >
      {
        data?.data.map((_: any, i: any) => (
          <div key={i + 33} className={styles.imageContainer}>
            <ImageMy src={_.attributes.url} alt='' width={640} height={640} ref={refArray[i]}/>
          </div>
        ))
      }
    </div>
  )
}

export default Videos