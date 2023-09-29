import React from 'react'
import styles from './RunningLine.module.scss'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'

const RunningLine = ({ text }: { text: string }) => {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      x: '5%',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        scrub: 1,
        toggleActions: 'play reset play reset',
      },
    });
  }, []);

  const items = Array(30).fill(null).map((_, index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <div className={styles.runningLine}>
      <div className={styles.track}>
        <div className={styles.content} ref={containerRef}>
          {items}
        </div>
      </div>
    </div>
  )
}

export default RunningLine