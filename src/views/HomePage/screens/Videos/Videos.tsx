"use client";

import React, { useRef, useEffect } from 'react'
import styles from './Videos.module.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Videos = () => {
  const firstImage = useRef(null)
  const secondImage = useRef(null)
  const thirdImage = useRef(null)


  useEffect(() => {
    if(firstImage.current){
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
    <div className={styles.videos}>
        <div className={styles.imageContainer}>
          <img src='Video-1.png' alt='' width={640} height={640} ref={firstImage}/>
        </div>
        <div className={styles.imageContainer}>
          <img src='Video-2.png' alt='' width={640} height={640} ref={secondImage}/>
        </div>
        <div className={styles.imageContainer}>
          <img src='Video.png' alt='' width={640} height={640} ref={thirdImage}/>
        </div>
    </div>
  )
}

export default Videos