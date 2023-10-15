
import React from 'react'
import styles from './RunningLine.module.scss'
import {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'

const RunningLine = ({ text, image }: { text: string, image?: string }) => {

  const isRight = useRef(1);
  const velocity = useRef(1);
  const speed = useRef(1)
  // let isRight = 1
  const containerRef = useRef(null);
  const currentBackgroundPositionXRef = useRef(0);
  const currentScroll: any = useRef(0)
  // const content: any = containerRef.current;
  // content.style.backgroundImage = '/publications.png'

  const animateBackgroundPosition = (delta: any) => {
    velocity.current = (speed.current / delta) != 0 ? speed.current * 2 / delta : 1
    

    const content: any = containerRef.current;
    if (content) {
      currentBackgroundPositionXRef.current += 2 * isRight.current; //(velocity.current < 0 ? velocity.current * -1 : velocity.current)
      content.style.backgroundPositionX = `${currentBackgroundPositionXRef.current}px`;
    }

    requestAnimationFrame(animateBackgroundPosition);
  };

  const handleScroll = () => {
    const truth = currentScroll.current <= window.scrollY
    isRight.current = (truth ? 1 : -1);
    speed.current = window.scrollY - currentScroll.current
    currentScroll.current = window.scrollY || window.pageXOffset
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(animateBackgroundPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    // const direction = useRef(1) // calc direction somewhere, fo example onScroll event
  //   const velocity = useRef(1) // calc velocity onScroll event
  //   useEffect(() => {
  //     const rq = null
  //   let tr = 0
      

  //   render()
  //   function render() {
  //     tr += 0.1 * velocity.current
  //     linkRef.current.style.transformX = tr * direction.current
  //     rq = requestAnimationFrame(render)
  //   }

  //   return () => cancelRequestAnimationFrame(rq)
  //   },[])
  

  return (
    <div className={`${styles.runningLine}`}>
        <div className={styles.content} ref={containerRef}></div>
    </div>
  )
}

export default RunningLine