"use client"

import React from 'react'
import styles from './RunningLine.module.scss'
import {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'

const RunningLine = ({ text }: { text: string }) => {

  const [isRight, setIsRight] = useState(1)

  const containerRef = useRef(null);


  useEffect(() => {
    const container: any = containerRef.current;

    const animationOptions = {
      backgroundPositionX: -container.offsetWidth * 16000 * isRight,
      duration: 1000000,
      repeat: -1,
      ease: 'linear',
    };

    const animation = gsap.to(container, animationOptions);


    gsap.to(container, {
      backgroundPositionX: '-50%',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom bottom',
        scrub: true,
        onUpdate: ({direction}) => {
          setIsRight(direction)
          console.log(isRight, direction)
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [isRight]);

  

  return (
    <div className={`${styles.runningLine} ${!isRight ? styles.run : styles.runReverse}`}>
        <div className={styles.content} ref={containerRef}></div>
    </div>
  )
}

export default RunningLine