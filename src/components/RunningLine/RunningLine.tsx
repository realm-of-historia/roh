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
      // backgroundPositionX: `${100 * -isRight}%`,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        scrub: true,
        onUpdate: ({direction}) => {
          setIsRight(prevIsRight => {
            if (direction !== prevIsRight) {
              return direction;
            }
            return prevIsRight;
          });
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [isRight]);

  

  return (
    <div className={`${styles.runningLine}`}>
        <div className={styles.content} ref={containerRef}></div>
    </div>
  )
}

export default RunningLine