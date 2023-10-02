import React from 'react'
import styles from './RunningLine.module.scss'
import {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'

const RunningLine = ({ text }: { text: string }) => {

  const [isRight, setIsRight] = useState(false)

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      backgroundPositionX: '100%',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        scrub: 1,
        toggleActions: 'play reset play reset',
        onEnter: () => setIsRight(false),
        onLeaveBack: () => setIsRight(true),
      },
    });

    console.log(isRight)
  }, [containerRef]);



  return (
    <div className={`${styles.runningLine} ${!isRight ? styles.run : styles.runReverse}`} ref={containerRef}>
    </div>
  )
}

export default RunningLine